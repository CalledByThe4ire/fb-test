import React from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import styles from './product.module.scss';
import { pluralize } from '../product/utils';
import { useAppContext, useHover } from '../hooks';
import { toggleProduct } from '../../state/actions';

function Product({ product }) {
  const { dispatch } = useAppContext();

  const updateProduct = (event, productId) => {
    event.preventDefault();
    dispatch(toggleProduct(productId));
  };

  const [hoverRef, isHovered] = useHover();

  const {
    id: productId,
    descriptionMapping,
    name,
    topping,
    featuresMapping,
    weight,
    annotation,
    isSelected,
    isFinished,
  } = product;

  const { enums, stuff } = featuresMapping;
  const {
    default: defaultDescription,
    hovered: hoveredDescription,
  } = descriptionMapping;

  return (
    <li className={styles.Product}>
      <label
        htmlFor="cat-food"
        onClick={(event) => updateProduct(event, productId)}
        className={classnames(styles.ProductItem, {
          [styles.ProductItemDefault]: !isFinished && !isSelected,
          [styles.ProductItemSelected]: isSelected,
          [styles.ProductItemDisabled]: isFinished,
          [styles.ProductItemHovered]: isHovered,
        })}
        ref={hoverRef}
      >
        <figure className={styles.ProductContainer}>
          <h2 className={styles.ProductTitle}>{name}</h2>
          <p className={styles.ProductTopping}>{topping}</p>
          <ul className={styles.ProductFeatures}>
            {enums.map(({ plurals, count, phrase }) => {
              const str = `${count === 1 ? '' : count} ${pluralize(
                count,
                plurals
              )} ${phrase}`;

              return <li key={uuidv4()}>{str}</li>;
            })}
            {stuff.map((str) => (
              <li key={uuidv4()}>{str}</li>
            ))}
          </ul>
          <div className={styles.ProductWeight}>{weight}</div>
          <figcaption className={styles.ProductCaption}>
            {isHovered && (isSelected && !isFinished) ? hoveredDescription : defaultDescription}
          </figcaption>
        </figure>
      </label>
      <input type="checkbox" id="cat-food" disabled={isFinished} />
      <p className={styles.ProductAnnotation}>
        {isSelected ? (
          annotation
        ) : isFinished ? (
          `Печалька, ${topping} закончился.`
        ) : (
          <>
            Порадуй котэ,{' '}
            <a href="/" onClick={(event) => updateProduct(event, productId)}>
              купи
            </a>
            .
          </>
        )}
      </p>
    </li>
  );
}

export default Product;
