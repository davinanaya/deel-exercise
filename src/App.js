import React, { useState } from "react";
import './App.css';
import Autocomplete from './Autocomplete';

const apiKey = "427d8081e90bd2dddfc8930c4a897dc9";

function App() {
    const [movies, setMovies] = useState([]);

    const oncHangeHandler = async (val) => {
        if (!val) {
            return setMovies([]);
        }

        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${val}`);
        const data = await response.json();
        setMovies(data.results)
    }

    return (
    <div className="App">
        <h1>Movies</h1>
        <Autocomplete data={movies} onChange={oncHangeHandler}/>
    </div>);
}

export default App;
