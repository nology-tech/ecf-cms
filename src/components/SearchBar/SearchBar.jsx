import "./SearchBar.scss";

import magnifyGlass from "../../assets/magnifying-glass-grey.svg";

const SearchBar = ({ placeHolderText, searchWord, handleSearchInput }) => {
  return (
    <div className="search-bar">
      {/*Props being used to change the placeholder text, as well as store search word and handle the logic of the search bar for updates*/}
      <img src={magnifyGlass} alt="Search Icon" className="search-bar__image" />
      <input
        type="text"
        placeholder={placeHolderText}
        value={searchWord}
        onChange={handleSearchInput}
        className="search-bar__input"
      />
    </div>
  );
};

export default SearchBar;
