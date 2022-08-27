const API_KEY = 'ed056b717633eb18d85d4433e906e4ce';
const API_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${API_URL}/trending/all/day?api_key=${API_KEY}`
    );
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      const errorMessage = await response.json();
      console.log('error in api', errorMessage.status_message);
      return Promise.reject(errorMessage.status_message);
    }
  } catch (error) {
    console.log('error in catch api', error);
    return Promise.reject('Request was failed. Please, try again.');
  }
};

export const getSearchMovies = async query => {
  try {
    const response = await fetch(
      `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      const errorMessage = await response.json();
      console.log('error in api', errorMessage.status_message);
      return Promise.reject(errorMessage.status_message);
    }
  } catch (error) {
    console.log('error in catch api', error);
    return Promise.reject('Request was failed. Please, try again.');
  }
};

export const getMovieById = async id => {
  try {
    const response = await fetch(
      `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorMessage = await response.json();
      console.log('error in api', errorMessage.status_message);
      return Promise.reject(errorMessage.status_message);
    }
  } catch (error) {
    console.log('error in catch api', error);
    return Promise.reject('Request was failed. Please, try again.');
  }
};

export const getCastInfo = async id => {
  try {
    const response = await fetch(
      `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorMessage = await response.json();
      console.log('error in api', errorMessage.status_message);
      return Promise.reject(errorMessage.status_message);
    }
  } catch (error) {
    console.log('error in catch api', error);
    return Promise.reject('Request was failed. Please, try again.');
  }
};

export const getReviews = async id => {
  try {
    const response = await fetch(
      `${API_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      const errorMessage = await response.json();
      console.log('error in api', errorMessage.status_message);
      return Promise.reject(errorMessage.status_message);
    }
  } catch (error) {
    console.log('error in catch api', error);
    return Promise.reject('Request was failed. Please, try again.');
  }
};
