import "./user_profile.css";
import { PlayPlaylist } from "../../assets";
import { useUserContext, useVideoState } from "../../context";
import { useDocumentTitle } from "../../custom_hooks";
import { Link } from "react-router-dom";

export const UserProfilePage = () => {
  const {
    userData: { firstName, lastName, createdAt },
  } = useUserContext();
  useDocumentTitle(`| ${firstName}`);
  const {
    videoState: { playLists, likedList },
  } = useVideoState();

  return (
    <main className="main user-page">
      {/* <!-- header section --> */}
      <section className="sec user-header-sec flex-col">
        <div className="avatar-text avatar-m">{`${firstName[0]}${lastName[0]}`}</div>
        <h1>Hello {firstName}</h1>
        <p className="body-l">Artsy Streamer since {createdAt.split("T")[0]}</p>
      </section>
      <h2>Recent Activity</h2>

      {/* <!-- grid  --> */}
      <section className="section">
        <div className ='user-list-sec'>
          <Link to='/playlists' className="sec flex-align-center">
            <PlayPlaylist />
            <p> Playlists </p>
            <p className="sec-count">{playLists.length}</p>
            <i className="fa-solid fa-angle-right"></i>
          </Link>
          <Link to='/likes' className="sec flex-align-center">
            <PlayPlaylist />
            <p>Liked Videos </p>
            <p className="sec-count">{likedList.length}</p>
            <i className="fa-solid fa-angle-right"></i>
          </Link>
        </div>
      </section>
    </main>
  );
};
