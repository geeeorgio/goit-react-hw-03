import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="searchBox">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id="searchBox"
        name="searchBox"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
