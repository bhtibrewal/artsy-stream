import { LikeButton, SaveButton, WatchLaterButton } from "../buttons";
import { Rating } from "../rating/Rating";

export const SingleVideoPageCard = ({ video }) => {
  const { title, creator, url, rating, views, description } = video;

  return (
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
          
          <div className=" video_card-btn center">
            <i className="fa-solid fa-share"></i>
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};
