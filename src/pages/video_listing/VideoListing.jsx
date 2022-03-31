import "./video_listing.css";
import { BasicCard } from "../../components";
import { useVideoFilter, useVideoState } from "../../context";
import { filterByCategory, getFilteredVideosList } from "../../utils";

export const VideoListing = () => {
  const {
    videoState: { videoList, categories },
  } = useVideoState();
  const { filterState, filterStateDispatch } = useVideoFilter();
  const filteredVideosList = getFilteredVideosList(
    [filterByCategory],
    [...videoList],
    filterState
  );

  if (videoList.length === 0) return <div>Loading...</div>;
  return (
    <main className="main">
      <section className="section">
        <span
          className="chip"
          onClick={() => filterStateDispatch({ type: "ALL" })}
        >
          All
        </span>
        {categories.map((category) => {
          const { categoryName, _id } = category;
          return (
            <span
              key={_id}
              className="chip"
              onClick={() =>
                filterStateDispatch({
                  type: "ADD_CATEGORY",
                  payload: categoryName,
                })
              }
            >
              {categoryName}
            </span>
          );
        })}
      </section>
      <section className="videos-listing-sec">
        {filteredVideosList.map((video) => {
          return <BasicCard key={video._id} video={video} />;
        })}
      </section>
    </main>
  );
};
