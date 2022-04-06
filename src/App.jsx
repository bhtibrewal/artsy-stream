import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Header, PlaylistModal, Sidebar, Toast } from "./components";
import {
  HistoryPage,
  HomePage,
  LikesPage,
  PlaylistsPage,
  SignIn,
  SignUp,
  SinglePlaylistPage,
  VideoListing,
  VideoPage,
  WatchLater,
} from "./pages";
import { usePlaylistModal, useUserContext, useTheme } from "./context";
import { privateRouting } from "./utils";

function App() {
  const { isUserLoggedIn } = useUserContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [displaySidebar, setDisplaySidebar] = useState(true);

  useEffect(() => {
    privateRouting({ isUserLoggedIn, pathname, navigate });
  }, [pathname, isUserLoggedIn]);

  const { display } = usePlaylistModal();
  const { darkMode } = useTheme();

  const authRoutes = ["/sign-in", "/sign-up"];
  return (
    <div className={`body ${darkMode && "dark"}`}>
      {!authRoutes.some((route) => route === pathname) && (
        <>
          <Header setDisplaySidebar={setDisplaySidebar} />
          {displaySidebar && <Sidebar />}
        </>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<VideoListing />} />
        <Route
          path="/videos/category/:categoryName"
          element={<VideoListing />}
        />
        <Route path="/videos/:videoId" element={<VideoPage />} />

        <Route path="/likes" element={<LikesPage />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/playlists" element={<PlaylistsPage />} />
        <Route
          path="/playlists/:playlistTitle"
          element={<SinglePlaylistPage />}
        />
        {/*  */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route pat="/sign-up" element={<SignUp />} />
      </Routes>

      {display && <PlaylistModal />}
      <Toast position="bottom-right" />
    </div>
  );
}

export default App;