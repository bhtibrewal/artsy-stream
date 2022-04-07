import {
  LikeButton,
  PlayButton,
  SaveButton,
  WatchLaterButton,
} from "../buttons";
import { Rating } from "../index";

export const BasicCard = ({ video, children }) => {
  const { title, creator, img_src, tag, rating } = video;
  return (
    <div className="card w-30 basic">
      <div className="img-sec">
        <span className="card-tag">{tag}</span>
        <img className="card-img" src={img_src} alt={`${title} ${creator}`} loading="lazy"/>
        <PlayButton video={video} />
      </div>
      <div className="content">
        <div className="card-header">
          <h1>{title}</h1>
          <h2>by {creator}</h2>
          <Rating rating={rating} />
          <div className="video-actions">
            <LikeButton video={video} />
            <SaveButton video={video} />
            <WatchLaterButton video={video} />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
