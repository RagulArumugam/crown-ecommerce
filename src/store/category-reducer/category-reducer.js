import React from "react";
import { CATEGORIES_ACTION_TYPES } from "./category-types";
const INITIAL_STATE = {
  categoriesMap: {},
  isCategoryLoading: false,
  error: null,
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesMap: payload,
        isCategoryLoading: false,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isCategoryLoading: true,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        error: payload,
        isCategoryLoading: false,
      };
    default:
      return state;
  }
};
