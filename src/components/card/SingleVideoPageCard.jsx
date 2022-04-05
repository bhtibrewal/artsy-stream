import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useToast } from "../../context";
import { LikeButton, SaveButton, WatchLaterButton } from "../buttons";
import { Rating } from "../rating/Rating";

export const SingleVideoPageCard = ({ video, children }) => {
  const { title, creator, url, rating, views, description } = video;
  const { pathname } = useLocation();
  const { showToast } = useToast();
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const copyLink = () => {
    navigator.clipboard.writeText(`https://artsystream.netlify.app${pathname}`);
    showToast({ title: "Link Copied", type: "success" });
    setIsLinkCopied(true);
    setTimeout(() => {
      setIsLinkCopied(false);
    }, 4000);
  };

  return (
    <>
      <div className="card single_video-card">
        <iframe
          className="single_page-video"
          src={url}
          allowFullScreen
          alt={`${title} ${creator}`}
        ></iframe>

        <div className="content">
          <h2>{title}</h2>
          <h3>by {creator}</h3>
          <p>{description}</p>

          <span className="flex-align-center">
            <Rating rating={rating} />| {views} views
          </span>

          <div className="video-actions">
            <LikeButton video={video}>
              <span> Like </span>
            </LikeButton>
            <SaveButton video={video}>
              <span>Save</span>
            </SaveButton>
            <WatchLaterButton video={video}>
              <span>Watch Later</span>
            </WatchLaterButton>
            <div className=" video_card-btn center" onClick={copyLink}>
              <i
                className={`fa-solid ${
                  isLinkCopied ? "fa-circle-check" : "fa-share"
                }`}
              ></i>
              <span>{isLinkCopied ? "Copied" : "Share"}</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};
