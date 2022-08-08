import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";
import TvSeriesList from "../components/tv/TvSeriesList";

const HomePage = () => {
	return (
		<Fragment>
			<section className="movies-layout page-container pb-4">
				<h2 className="capitalize text-white mb-4 text-3xl font-bold">
					Movies
				</h2>
			</section>
			<section className="movies-layout page-container pb-10">
				<h2 className="capitalize text-white mb-10 text-2xl font-bold">
					Now playing
				</h2>
				<MovieList type="now_playing" />
			</section>
			<section className="movies-layout page-container pb-10">
				<h2 className="capitalize text-white mb-10 text-2xl font-bold">
					Top Rated
				</h2>
				<MovieList type="top_rated" />
			</section>
			<section className="movies-layout page-container pb-10">
				<h2 className="capitalize text-white mb-10 text-2xl font-bold">
					Trending
				</h2>
				<MovieList type="popular" />
			</section>

			<section className="movies-layout page-container pb-4">
				<h2 className="capitalize text-white mb-4 text-3xl font-bold">
					TV Series
				</h2>
			</section>
			<section className="movies-layout page-container pb-10">
				<h2 className="capitalize text-white mb-10 text-2xl font-bold">
					Top Rated
				</h2>
				<TvSeriesList type="top_rated" />
			</section>
			<section className="movies-layout page-container pb-10">
				<h2 className="capitalize text-white mb-10 text-2xl font-bold">
					Trending
				</h2>
				<TvSeriesList type="popular" />
			</section>
		</Fragment>
	);
};

export default HomePage;
