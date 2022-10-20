import { createStore, compose, applyMiddleware, AnyAction } from "redux";
import { persistStore } from "redux-persist";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import { appReducer } from "./reducers";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import persistReducer from "redux-persist/es/persistReducer";
import * as loginActions from "./actions/loginActions";
import { apiClient } from "../services/client";

const config: any = {
  key: "root",
  storage: storage,
  blacklist: [
    "loginReducer",
    // "loadingReducer",
  ],
  debug: true, // to get useful logging
  stateReconciler: autoMergeLevel2,
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware({
  onError: () => {
    store.dispatch(loginActions.logOut());
    setTimeout(() => {
      alert("Unexpected error: check your internet connection");
    }, 200);
  },
});

middleware.push(sagaMiddleware);
// TODO: push only for DEV env
middleware.push(createLogger());

// clear storage (https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store/35641992#35641992)
// this version doesn't clear persistent data
// and has some issues with redux router package
const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === "LOG_OUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const reducers = persistReducer(config, rootReducer);
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig: any = { enhancers };

const store = createStore(reducers, undefined, compose<any>(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  console.log("Test", store.getState());
});
const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(sagas);

const { dispatch } = store;

apiClient.interceptors.response.use(undefined, (err: any) => {
  const error = err.response;
  // if error is 401, emit logout action
  if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
    alert("Session has expired, please log in again");
    dispatch(loginActions.logOut());
  }
});

export default configureStore;
