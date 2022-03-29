import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header, PlaylistModal, Sidebar } from "./components";
import {
  HistoryPage,
  HomePage,
  LikesPage,
  Page404,
  PlaylistsPage,
  SignIn,
  VideoListing,
  VideoPage,
  WatchLater,
} from "./pages";

export default function App() {


  return (
    <div className="body">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<VideoListing />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/likes" element={<LikesPage />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/playlists" element={<PlaylistsPage />} />

      </Routes>

    </div>
  );
}
