import {Link} from "react-router-dom"

function Home({movies, loading, error}) {
    if(loading === true) return <h1>Loading..</h1>
    if(error === true) return <h1>oops couldn't load movies..</h1>
    return <div className="movie-grid">
        {movies.map((movie) => <Link  to={"/movieinfo/" + movie.id} key={movie.id}><img className="movie-card" src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}/><h3 className="poster-container">🕒{movie.release_date}</h3> </Link>)}
    </div>
}

export default Home