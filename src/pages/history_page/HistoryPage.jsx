import "./history_page.css";
import { BasicCard, OutlineButtonPrimary } from "../../components";
import { useToast, useVideoState } from "../../context";
import { clearHistory, removeFromHistory } from "../../services";
import { EmptyListPage } from "../emptylist_page/EmptyListPage";

export const HistoryPage = () => {
  const {
    videoState: { history },
    videoStateDispatch,
  } = useVideoState();
  const { showToast } = useToast();

  if (history.length === 0)
    return <EmptyListPage text="No Videos Watched in History" />;

  return (
    <main className="main">
      <section className="section">
        <div className="flex-align-center">
          <h2> Videos watched in history ({history.length})</h2>
          <button
            className="btn video_card-btn clear-btn"
            title="Like"
            onClick={() => clearHistory({ videoStateDispatch, showToast })}
          >
            <i className={`fa-solid fa-trash `}></i>
            Clear History
          </button>
        </div>
        <div className="grid m-top">
          {history.map((video) => {
            return (
              <BasicCard key={video._id} video={video}>
                <div
                  className=" video_card-btn center"
                  title={"Remove from history"}
                  onClick={() =>
                    removeFromHistory({
                      _id: video._id,
                      videoStateDispatch,
                      showToast,
                    })
                  }
                >
                  <i className="fa-solid fa-trash"></i>
                </div>
              </BasicCard>
            );
          })}
        </div>
      </section>
    </main>
  );
};
