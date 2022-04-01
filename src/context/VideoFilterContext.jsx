import { useReducer, createContext, useContext } from "react";

const VideoFilterContext = createContext();

const VideoFilterProvider = ({ children }) => {
  const initialFilterState = {
    showCategories: [],
  };
  const filter_reducer_fn = (state, { type, payload }) => {
    switch (type) {
      case "ALL":
        return { ...state, showCategories: [] };
      case "ADD_CATEGORY":
        return { ...state, showCategories: [payload] };
      default:
        return state;
    }
  };
  const [filterState, filterStateDispatch] = useReducer(
    filter_reducer_fn,
    initialFilterState
  );
  return (
    <VideoFilterContext.Provider value={{ filterState, filterStateDispatch }}>
      {children}
    </VideoFilterContext.Provider>
  );
};
const useVideoFilter = () => {
  const context = useContext(VideoFilterContext);
  if (!context) {
    throw new Error(
      `use useVideoFilter must be used inside a context provider`
    );
  }
  return context;
};
export { VideoFilterProvider, useVideoFilter };
