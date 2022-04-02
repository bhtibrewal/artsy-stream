import { BasicCard } from "../../components";
import { useVideoState } from "../../context";
import { EmptyListPage } from "../emptylist_page/EmptyListPage";

export const LikesPage = () => {
  const {
    videoState: { likedList },
  } = useVideoState();

  if (likedList.length === 0) return <EmptyListPage text={"No Liked Videos"} />;
  return (
    <main className="main">
      <section className="section">
        <h2> Likes Videos ({likedList.length})</h2>
        <div className="grid m-top">
          {likedList.map((video) => {
            return <BasicCard key={video._id} video={video} />;
          })}
        </div>
      </section>
    </main>
  );
};
