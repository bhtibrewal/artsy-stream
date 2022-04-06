import { createContext, useContext, useState } from "react";

const PlaylistModalContext = createContext();

const PlaylistModalProvider = ({ children }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [video, setVideo] = useState({});

  return (
    <PlaylistModalContext.Provider
      value={{ displayModal, setDisplayModal, video, setVideo }}
    >
      {children}
    </PlaylistModalContext.Provider>
  );
};

const usePlaylistModal = () => {
  const context = useContext(PlaylistModalContext);
  if (!context) {
    throw new Error(
      `use usePlaylistModal must be used inside a context provider`
    );
  }
  return context;
};
export { PlaylistModalProvider, usePlaylistModal };
