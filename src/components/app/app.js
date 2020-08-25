import React from 'react';
import classnames from 'classnames';
import styles from './app.module.scss';
import Products from '../products';
import data from './assets/data';

function App() {
  return (
    <div className={classnames(styles.App)}>
      <div className={classnames(styles.AppContainer)}>
        <h1 className={classnames(styles.AppHeader)}>Ты сегодня покормил кота?</h1>
        <Products products={data}/>
      </div>
    </div>
  );
}

export default App;
