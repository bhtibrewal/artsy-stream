import { BasicCard } from "../../components";
import { useVideoState } from "../../context";
import { EmptyListPage } from "../emptylist_page/EmptyListPage";

export const WatchLater = () => {
  const {
    videoState: { watchLater },
  } = useVideoState();

  if (watchLater.length === 0)
    return <EmptyListPage text={"No Videos Added To Watch Later"} />;
  return (
    <main className="main">
      <section className="section">
        <h2> Videos Added To Watch Later ({watchLater.length})</h2>
        <div className="grid m-top">
          {watchLater.map((video) => {
            return <BasicCard key={video._id} video={video} />;
          })}
        </div>
      </section>
    </main>
  );
};
