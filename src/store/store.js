import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
//persist configuration

const persistConfig = {
  key: "root",
  storage,
  blackList: ["user"], // the reducer values we dont want
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//middleware runs before action hits the reducer
const middleWare = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWare));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
