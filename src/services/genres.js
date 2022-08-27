export const genresTransform = genres => {
  let genresString = [];
  genres.map(genre => genresString.push(genre.name));

  return genresString.join(', ');
};
