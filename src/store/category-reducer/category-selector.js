import { createSelector } from "reselect"


export const selectCategory = (state) => state?.categories?.categoriesMap;


//select the reducer

// const selectCategoryReducer = (state) => state.categories;

// export const selectCategories = createSelect([selectCategoryReducer],(categoriesSlice) => categoriesSlice.categories)

// export const selectCategory =  createSelector([selectCategories], (state) => state?.categories?.categoriesMap;
