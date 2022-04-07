import "./home_page.css";
import { CategoriesSection, Carousel } from "./components";

export const HomePage = () => {
  return (
    <main className="main">
      <Carousel />
      <CategoriesSection />
    </main>
  );
};
