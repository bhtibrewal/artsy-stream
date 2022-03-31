import "./home_page.css";
import { CategoriesSection } from "./components";

export const HomePage = () => {
  
  return (
    <main className="main">
      <section className="section ">
        <span className="chip">All</span>
        <span className="chip">Tutorials</span>
        <span className="chip">Saved</span>
      </section>
      

      <CategoriesSection />
    </main>
  );
};
