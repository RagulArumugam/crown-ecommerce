import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import {
  fetchCategoryFail,
  fetchCategoryStart,
  fetchCategorySuccess,
} from "./category-action";
import { CATEGORIES_ACTION_TYPES } from "./category-types";

// ---- thunk -----
// export const fetchCategoryAsync = () => async (disptach) => {
//   disptach(fetchCategoryStart());
//   try {
//     const categoryMap = await getCategoriesAndDocuments();
//     disptach(fetchCategorySuccess(categoryMap));
//     // disptach();
//   } catch (err) {
//     disptach(fetchCategoryFail(err));
//   }
// };

export function* fetchCategoryAsync() {
  try {
    const categoryMap = yield call(getCategoriesAndDocuments());
    yield put(fetchCategorySuccess(categoryMap));
    // disptach();
  } catch (err) {
    yield put(fetchCategoryFail(err));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoryAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
