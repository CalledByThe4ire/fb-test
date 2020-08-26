import React from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import styles from './product.module.scss';
import { pluralize } from '../product/utils';
import { useAppContext } from '../hooks';
import { toggleProduct } from '../../state/actions';

function Product({ product }) {
  const { dispatch } = useAppContext();

  const updateProduct = (productId) => () => dispatch(toggleProduct(productId));

  const {
    id: productId,
    description,
    name,
    topping,
    featuresMapping,
    weight,
    annotation,
    isSelected,
    isFinished,
  } = product;

  const { enums, stuff } = featuresMapping;

  return (
    <li className={styles.Product}>
      <label
        htmlFor="cat-food"
        className={classnames(styles.ProductItem, {
          [styles.ProductItemDefault]: !isFinished && !isSelected,
          [styles.ProductItemSelected]: isSelected,
          [styles.ProductItemDisabled]: isFinished,
        })}
        onClick={updateProduct(productId)}
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
            {description}
          </figcaption>
        </figure>
      </label>
      <input
        type="checkbox"
        id="cat-food"
        disabled={isFinished}
      />
      <p className={styles.ProductAnnotation}>
        {isSelected ? (
          annotation
        ) : isFinished ? (
          `Печалька, ${topping} закончился.`
        ) : (
          <>
            Порадуй котэ, <a href="#/" onClick={updateProduct(productId)}>купи</a>.
          </>
        )}
      </p>
    </li>
  );
}

export default Product;
