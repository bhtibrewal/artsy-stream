import { Link } from "react-router-dom";
import { useVideoState } from "../../../context";

export const CategoriesSection = () => {
  const {
    videoState: { categories },
  } = useVideoState();

  return (
    <section className="categories_section">
      <h1>Categories</h1>
      <div className="categories_grid m-top">
        {categories?.map((category) => {
          const { img_src, _id, categoryName } = category;
          return (
            <Link
              to={`/videos/category/${categoryName}`}
              key={_id}
              className="category_wrapper"
            >
              <img alt="" src={img_src} />
              <div className="category_content">
                <div className="category_title body-l">{categoryName}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
