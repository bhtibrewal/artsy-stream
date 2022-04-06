import { useVideoFilter } from "../../../context";

export const Search = () => {
  const {
    filterState: { searchKeyword },
    filterStateDispatch,
  } = useVideoFilter();
  return (
    <div className="artsy-input icon-input search-input">
      <i className="fas fa-search search-icon"></i>
      <input
        placeholder="Search..."
        type="text"
        value={searchKeyword}
        onChange={(e) => filterStateDispatch({type: "SEARCH", payload: e.target.value})}
      />
    </div>
  );
};
