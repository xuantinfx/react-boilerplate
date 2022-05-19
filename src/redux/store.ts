import { persistStore } from 'redux-persist';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { isDevelopment } from 'src/globals/configs';
import rootReducer from './rootReducer';

const configureStore = () => {
  const middlewares = [thunkMiddleware];
  let enhancers = [];

  if (isDevelopment) {
    // @ts-ignore
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, compose(middleWareEnhancer, ...enhancers));
  // @ts-ignore
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
