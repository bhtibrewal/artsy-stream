import "./history_page.css";
import { BasicCard, OutlineButtonPrimary } from "../../components";
import {  useVideoState } from "../../context";
import { clearHistory, removeFromHistory } from "../../services";
import { EmptyListPage } from "../emptylist_page/EmptyListPage";

export const HistoryPage = () => {
  const {
    videoState: { history },
    videoStateDispatch,
  } = useVideoState();


  if (history.length === 0)
    return <EmptyListPage text="No Videos Watched in History" />;

  return (
    <main className="main">
      <section className="section">
        <div className="flex-align-center">
          <h2> Videos watched in history ({history.length})</h2>
          <OutlineButtonPrimary
            className={"clear-history-btn"}
            onClick={() => clearHistory({ videoStateDispatch, showToast })}
          >
            <i className="fa-solid fa-trash"></i>
            <span>Clear History</span>
          </OutlineButtonPrimary>
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
