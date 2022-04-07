import { createContext, useContext, useEffect, useReducer } from "react";
import { videoStateReducer } from "./videoStateReducer.js";
import { fetchCategories, fetchVideoList } from "../../services";

const VideoStateContext = createContext();

const VideoStateProvider = ({ children }) => {
  const initialVideoState = {
    videoList: [],
    categories: [],
    playLists: [],
    likedList: [],
    history: [],
    watchLater: [],
    notesManagement: [],
  };

  const [videoState, videoStateDispatch] = useReducer(
    videoStateReducer,
    initialVideoState
  );
  useEffect(() => {
    fetchVideoList({ videoStateDispatch });
    fetchCategories({ videoStateDispatch });
  }, []);

  return (
    <VideoStateContext.Provider
      value={{ videoState, videoStateDispatch, initialVideoState }}
    >
      {children}
    </VideoStateContext.Provider>
  );
};

const useVideoState = () => {
  const context = useContext(VideoStateContext);
  if (!context) {
    throw new Error(`use useVideoState must be used inside a context provider`);
  }
  return context;
};
export { VideoStateProvider, useVideoState };
