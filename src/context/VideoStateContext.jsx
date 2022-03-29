import { createContext, useContext, useEffect, useReducer } from "react";

const VideoStateContext = createContext();

const VideoStateProvider = ({ children }) => {
  const initialVideoState = {
    videoList: [],
    playLists: [],
    likedList: [],
    history: [],
    watchLater: [],
    categories: [],
  };
  const video_state_reducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD_VIDEOS":
        return { ...state, videoList: payload };
      case "ADD_CATEGORIES":
        return { ...state, categories: payload };
      default:
        return { ...state };
    }
  };

  const [videoState, videoStateDispatch] = useReducer(
    video_state_reducer,
    initialVideoState
  );

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
