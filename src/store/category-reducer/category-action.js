import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category-types";

// export const setCategoryMap = (data) =>
//   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, data);

export const fetchCategoryStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategorySuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoryFail = (err) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, err);

export const fetchCategoryAsync = () => async (disptach) => {
  disptach(fetchCategoryStart());
  try {
    const categoryMap = await getCategoriesAndDocuments();
    disptach(fetchCategorySuccess(categoryMap));
    // disptach();
  } catch (err) {
    disptach(fetchCategoryFail(err));
  }
};
