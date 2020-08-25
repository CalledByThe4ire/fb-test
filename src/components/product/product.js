import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';
import styles from './product.module.scss';

function Product() {
  const refInput = useRef();
  const refProduct = useRef();
  const refAnnotation = useRef();

  useEffect(() => {
    const { current: input } = refInput;
    const { current: label } = refProduct;

    const handleChange = () => {
      label.classList = `${classnames(styles.Product, {
        [styles.ProductDefault]: !input.checked && !input.disabled,
        [styles.ProductSelected]: input.checked && !input.disabled,
        [styles.ProductDisabled]: input.disabled,
      })}`;
    };

    handleChange();

    input.addEventListener('change', handleChange);

    return () => {
      input.removeEventListener('change', handleChange);
    };
  });

  return (
    <>
      <label
        htmlFor="cat-food"
        ref={refProduct}
      >
        <figure className={classnames(styles.ProductContainer)}>
          <h2 className={classnames(styles.ProductTitle)}>Нямушка</h2>
          <p className={classnames(styles.ProductTopping)}>с фуа-гра</p>
          <ul className={classnames(styles.ProductFeatures)}>
            <li>10 порций</li>
            <li>мышь в подарок</li>
          </ul>
          <div className={classnames(styles.ProductWeight)}>0,5</div>
          <figcaption className={classnames(styles.ProductCaption)}>
            Сказочное заморское яство
          </figcaption>
        </figure>
      </label>
      <input type="checkbox" id="cat-food" ref={refInput} disabled={false} />
      <p ref={refAnnotation}></p>
    </>
  );
}

export default Product;
