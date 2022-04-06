import { useReducer, createContext, useContext } from "react";
import { filterReducer } from "./filterReducer";

const VideoFilterContext = createContext();

const VideoFilterProvider = ({ children }) => {
  const initialFilterState = {
    showCategories: [],
    searchKeyword: "",
  };
  const [filterState, filterStateDispatch] = useReducer(
    filterReducer,
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
