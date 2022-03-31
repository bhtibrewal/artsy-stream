export const Rating = ({ rating }) => {
  return (
    <div className="artsy-rating">
      {Array(rating)
        .fill()
        .map((e, index) => {
          return <i key={index} className="fa-solid fa-star filled"></i>;
        })}
    </div>
  );
};
