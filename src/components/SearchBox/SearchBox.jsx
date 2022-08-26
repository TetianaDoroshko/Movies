export const SearchBox = ({ onSubmit, value }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="searchbox" />
      <button type="submit">Search</button>
    </form>
  );
};
