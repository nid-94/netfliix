import React,{useState} from 'react'
import { MovieData } from '../MovieData';
import MovieCard from './MovieCard';


function Search() {
    const [searchField, setSearchField] = useState("");
    
const handleChange = e => {
    setSearchField(e.target.value);

};
    

    return (
        <div>
            <div>
                <input  type = "search" placeholder = "Search Movie" onChange = {handleChange}/>
            </div>
            <MovieCard searchField={searchField}/>

        </div>

    )
}

export default Search