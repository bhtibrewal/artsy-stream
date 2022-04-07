import { carousel } from "../data/carousel.js";
import { useState, useEffect } from "react";
import { ButtonPrimary } from "../../../components";

export const Carousel = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => sliderControler(), 5000);
    return () => clearInterval(id);
  }, []);
  const sliderControler = () =>
    setSliderIndex((prev) => (prev + 1) % carousel.length);
  const { url, title, text, button } = carousel[sliderIndex];
  return (
    <section className="carousel-section">
      <img src={url} alt="carousel" loading="lazy" />
      <div className="carousel-content">
        <p className="body-l">{title}</p>
        <p>{text}</p>
        <ButtonPrimary onClick={() => navigate("/videos")}>
          {button}
        </ButtonPrimary>
      </div>
    </section>
  );
};
