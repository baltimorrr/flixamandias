import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";



const MovieList = ({type = "now_playing"}) => {
	const [movies, setMovies] = useState([]);
	const { data } = useSWR(
		tmdbAPI.getMovieList(type),
		fetcher
	);

	useEffect(() => {
		setMovies(data?.results);
	}, [data]);


	return (
		<div className="movie-list">
			<Swiper
				grabCursor={"true"}
				spaceBetween={40}
				slidesPerView={"auto"}
			>
				{movies &&
					movies.map((item) => (
						<SwiperSlide key={item.id}>
							<MovieCard item={item} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default MovieList;
