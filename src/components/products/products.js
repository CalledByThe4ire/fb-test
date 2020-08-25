import React from 'react';
import classnames from 'classnames';
import styles from './products.module.scss';
import Product from '../product';

function Products({ products }) {
  return (
    <ul className={classnames(styles.Products)}>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </ul>
  );
}

export default Products;
