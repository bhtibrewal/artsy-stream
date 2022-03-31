import { useVideoState } from "../../../context";

export const CategoriesSection = () => {
  const {
    videoState: { categories },
  } = useVideoState();

  return (
    <section className="categories_section">
      <h1>Categories</h1>
      <div className="categories_grid">
        {categories?.map((category, index) => {
          const { img_src } = category;
          return (
            <div key={index} className="category_wrapper">
              <img alt="" src={img_src} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
