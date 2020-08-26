import React from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import styles from './products.module.scss';
import Product from '../product';
import { useAppContext } from '../hooks';

function Products() {
  const { state: products } = useAppContext();
  return (
    <ul className={classnames(styles.Products)}>
      {products.map((product) => {
        return <Product key={uuidv4()} product={product} />;
      })}
    </ul>
  );
}

export default Products;
