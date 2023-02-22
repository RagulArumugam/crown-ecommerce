import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./category-reducer/categories-saga";

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
