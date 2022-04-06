export const filterReducer = (state, { type, payload }) => {
    switch (type) {
      case "ALL_CATEGORIES":
        return { ...state, showCategories: [] };
      case "ADD_CATEGORY":
        return { ...state, showCategories: [payload] };
      case "SEARCH":
        return { ...state, searchKeyword: payload };
      default:
        return state;
    }
  };