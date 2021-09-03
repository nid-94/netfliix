import './App.css';
import MovieCard from './component/MovieCard';
import Search from './component/Search';
import { MovieData } from './MovieData';
import {Navbar} from './component/Navbar/Navbar'


function App() {
  return (
    <div className='App'>
      <Navbar/>
     <Search MovieData={MovieData}/>
     

    </div>
  );
}

export default App;
