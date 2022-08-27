import PropTypes from 'prop-types';

export const SearchBox = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="searchbox" />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
