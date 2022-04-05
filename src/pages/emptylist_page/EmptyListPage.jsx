import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components";

export const EmptyListPage = ({text}) => {
  const navigate = useNavigate();
  return (
    <main className="main center">
      <div className="empty-list flex-col">
        <i className="fa-solid fa-headphones-simple fa-5x"></i>
        <p className="body-l">{text}</p>
        <ButtonPrimary onClick={() => navigate("/videos")}>
          <span> Explore</span>
          <i className="fa-solid fa-arrow-right"></i>
        </ButtonPrimary>
      </div>
    </main>
  );
};
