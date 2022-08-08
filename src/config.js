export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "dc01a8f91ca4c206932a350cbf16d7c0"

const tmdbEndpointMovie = "https://api.themoviedb.org/3/movie"
const tmdbEndpointSearchMovie = "https://api.themoviedb.org/3/search/movie"

const tmdbEndpointTV = "https://api.themoviedb.org/3/tv"
const tmdbEndpointSearchTV = "https://api.themoviedb.org/3/search/tv"

export const tmdbAPI = {
    getMovieList: (type, page = 1) => `${tmdbEndpointMovie}/${type}?api_key=${apiKey}&page=${page}`,
    getMovieDetails: (movieId) => `${tmdbEndpointMovie}/${movieId}?api_key=${apiKey}`,
    getMovieMeta: (movieId, type) => `${tmdbEndpointMovie}/${movieId}/${type}?api_key=${apiKey}`,
    getMovieSearch: (query, page) => `${tmdbEndpointSearchMovie}?api_key=${apiKey}&query=${query}&page=${page}`,
    getTvSeriesList: (type, page = 1) => `${tmdbEndpointTV}/${type}?api_key=${apiKey}&page=${page}`,
    getTvSeriesDetails: (tvSeriesId) => `${tmdbEndpointTV}/${tvSeriesId}?api_key=${apiKey}`,
    getTvSeriesMeta: (tvSeriesId, type) => `${tmdbEndpointTV}/${tvSeriesId}/${type}?api_key=${apiKey}`,
    getTvSeriesSearch: (query, page) => `${tmdbEndpointSearchTV}?api_key=${apiKey}&query=${query}&page=${page}`,
    imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
    image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
}