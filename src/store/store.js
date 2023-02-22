import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import createSagaMddleware from "redux-saga";
import { rootSaga } from "./root-saga";
// import thunk from "redux-thunk";
//persist configuration

const persistConfig = {
  key: "root",
  storage,
  blackList: ["user"], // the reducer values we dont want
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMddleware();

//middleware runs before action hits the reducer
const middleWare = [
  process.env.NODE_ENV !== "production" && logger,
  // thunk,
  sagaMiddleware,
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWare));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
