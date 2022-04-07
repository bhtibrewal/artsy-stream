import "./App.css";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header, PlaylistModal, Sidebar, Toast } from "./components";
import {
  HistoryPage,
  HomePage,
  LikesPage,
  Page404,
  PlaylistsPage,
  SignIn,
  SignUp,
  SinglePlaylistPage,
  UserProfilePage,
  VideoListing,
  VideoPage,
  WatchLater,
} from "./pages";
import { usePlaylistModal, useUserContext, useTheme } from "./context";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import { AuthRoutes } from "./utils/AuthRoutes";

function App() {
  const { pathname } = useLocation();
  const [displaySidebar, setDisplaySidebar] = useState(true);

  const { displayModal } = usePlaylistModal();
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

        {/* private routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/likes" element={<LikesPage />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/playlists" element={<PlaylistsPage />} />
          <Route
            path="/playlists/:playlistTitle"
            element={<SinglePlaylistPage />}
          />
          <Route path="/user-profile" element={<UserProfilePage />} />
        </Route>
        <Route element={<AuthRoutes />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>

      {displayModal && <PlaylistModal />}
      <Toast position="bottom-right" />
    </div>
  );
}

export default App;
