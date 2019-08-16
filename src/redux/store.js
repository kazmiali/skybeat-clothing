import { createStore } from 'redux';
// import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
// import logger from 'redux-logger';

import rootReducer from './root-reducer';

// const middlewares = [logger];

export const store = createStore(rootReducer, composeWithDevTools());

export const persistor = persistStore(store);

export default { store, persistor };
