/**
 * Create the store with dynamic reducers
 */
import {setAutoFreeze} from 'immer';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createReducer from './createReducers';
import rootSaga from './saga';

setAutoFreeze(false);

export function configureStore(initialState = {}) {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const rootReducer = createReducer();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  if (__DEV__) {
    store.subscribe(() => {
      console.log(store.getState());
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
}

const store = configureStore();
const persistor = persistStore(store);

export {store, persistor};
