import './App.css'
import {Link, Route, Routes} from "react-router-dom"
import {useState, useEffect} from "react"
import Movieinfo from "./Movieinfo"
import Home from "./Home"


function App() {
const API_MOVIELIST = "https://api.themoviedb.org/3/movie/popular?api_key=83e1eee5575294427cba9b6574245364&language=en-US&page=1"

const [movies, setMovies] = useState([])
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)

const apiCall = async() => {
  setLoading(true)
  setError(false)
  try{
  const result = await fetch(API_MOVIELIST);
  const data = await result.json();
  setMovies(data.results);
  }
  catch(err){
setError(true) 
console.log(err)
  }
  finally{
    setLoading(false)
  }
}

useEffect(() => apiCall(), []);

  return (
      <div>
        <Link to="/"><button>Home</button></Link>
<Routes>
  <Route path="/" element={<Home movies={movies} error={error} loading={loading}/>} />
  <Route path="/movieinfo/:id" element={<Movieinfo movies={movies} error={error} loading={loading}/>} />
</Routes>
      </div>
  )
}

export default App
