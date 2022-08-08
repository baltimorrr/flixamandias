import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import TvSeriesCard from "./TvSeriesCard";

const TvSeriesList = ({ type = "now_playing" }) => {
	const [tvSeries, setTvSeries] = useState([]);
	const { data } = useSWR(tmdbAPI.getTvSeriesList(type), fetcher);

	useEffect(() => {
		setTvSeries(data?.results);
	}, [data]);

	return (
		<div className="movie-list">
			<Swiper
				grabCursor={"true"}
				spaceBetween={40}
				slidesPerView={"auto"}
			>
				{tvSeries &&
					tvSeries.map((item) => (
						<SwiperSlide key={item.id}>
							<TvSeriesCard item={item} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default TvSeriesList;
