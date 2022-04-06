import "./video_listing.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BasicCard } from "../../components";
import { useVideoFilter, useVideoState } from "../../context";
import { useDocumentTitle } from "../../custom_hooks";
import { getFilteredVideosList } from "../../utils";
import { Search } from "./components";

export const VideoListing = () => {
  const { categoryName } = useParams();
  useDocumentTitle("| Videos");
  useEffect(() => {
    if (categoryName) {
      filterStateDispatch({
        type: "ADD_CATEGORY",
        payload: categoryName,
      });
    } else {
      filterStateDispatch({ type: "ALL_CATEGORIES" });
    }
  }, []);
  const {
    videoState: { videoList, categories },
  } = useVideoState();
  const { filterState, filterStateDispatch } = useVideoFilter();
  const { showCategories } = filterState;

  const filteredVideosList = getFilteredVideosList([...videoList], filterState);

  if (videoList.length === 0) return <div>Loading...</div>;
  return (
    <main className="main">
      <section className="section">
        <Search />
      </section>
      <section className="section categories-chip">
        <span
          className={`chip ${showCategories.length === 0 && "active"}`}
          onClick={() => filterStateDispatch({ type: "ALL_CATEGORIES" })}
        >
          All
        </span>
        {categories.map((category) => {
          const { categoryName, _id } = category;
          return (
            <span
              key={_id}
              className={`chip ${
                showCategories.includes(categoryName) && "active"
              }`}
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
