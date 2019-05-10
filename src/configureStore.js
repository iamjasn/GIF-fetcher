import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import rootReducer from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preloadedState) {
  const composedEnhancers = composeEnhancer(applyMiddleware(thunk));

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

    if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(rootReducer());
    });
  }

  return store
}
