import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import MoviePage from "./pages/MoviePage";
import TvSeriesDetailPage from "./pages/TvSeriesDetailPage";
import TvSeriesPage from "./pages/TvSeriesPage";

function App() {
	return (
		<Fragment>
			<Routes>
				<Route element={<Main></Main>}>
					<Route
						path="/"
						element={
							<>
								<Banner />
								<HomePage />
							</>
						}
					></Route>
					<Route
						path="/movies"
						element={<MoviePage></MoviePage>}
					></Route>
					<Route
						path="/movie/:movieId"
						element={<MovieDetailPage></MovieDetailPage>}
					></Route>
					<Route
						path="/tv-series"
						element={<TvSeriesPage></TvSeriesPage>}
					></Route>
					<Route
						path="/tv/:tvId"
						element={<TvSeriesDetailPage></TvSeriesDetailPage>}
					></Route>
				</Route>
			</Routes>
		</Fragment>
	);
}

export default App;
