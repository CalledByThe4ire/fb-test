import React, { useReducer } from 'react';
import classnames from 'classnames';
import styles from './app.module.scss';
import Products from '../products';
import reducer, { initialState } from '../../state/reducer';
import Context from '../../context';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className={classnames(styles.App)}>
        <div className={classnames(styles.AppContainer)}>
          <h1 className={classnames(styles.AppHeader)}>
            Ты сегодня покормил кота?
          </h1>
          <Products />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
