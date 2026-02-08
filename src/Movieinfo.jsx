import { useParams } from "react-router-dom";

function Movieinfo ({movies, error, loading}) {
    const param = useParams()
    const movieID = Number(param.id)

    const findMovie = movies.find((movie) => movie.id === movieID)

    if(error) return <h1>oops could not load Movie</h1>
    if(loading) return <h1>Loading..</h1>

    return <div className="movie-detail">
{ findMovie ? 
<> 
<img src={"https://image.tmdb.org/t/p/w500/" + findMovie.poster_path} alt={findMovie.title}/>
<div>

<h1> ⭐{findMovie.vote_average / 2}/5</h1>
<h2 className="movie-description">{findMovie.overview}</h2>
<h3>🕒{findMovie.release_date}</h3>
</div>


</> 
: undefined}

   </div>
}

export default Movieinfo