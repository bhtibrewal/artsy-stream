import "./home_page.css";
import {ButtonPrimary} from '../../components'
import { CategoriesSection } from "./components";

export const HomePage = () => {
  const carousel= [
    {
      url: "https://static.skillshare.com/cdn-cgi/image/quality=80,width=1000,format=auto/assets/images/browse/browse-banner-2.webp",
      title: "Online Classes",
      text: "Find what facinates you as you explore these classes ",
      button: "Get Started",
    },
    {
      url: "https://static.skillshare.com/uploads/video/thumbnails/cfa4f7b3e8b769ebacbe9348a8b55c35/original",
      title: "Online Classes",
      text: "Find what facinates you as you explore these classes ",
      button: "Get Started",
    },
  ];

  return (
    <main className="main">
      <section className="carousel-section">
        <img src={carousel[0].url} alt='carousel' loading="lazy"/>
        <div className="carousel-content">
          <p className="body-l">{carousel[0].title}</p>
          <p >{carousel[0].text}</p>
          <ButtonPrimary onClick={() => navigate("/videos")}>
            {carousel[0].button}
          </ButtonPrimary>
        </div>
      </section>
      <CategoriesSection />
    </main>
  );
};
