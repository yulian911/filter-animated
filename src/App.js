import React, { useEffect } from 'react'
import Movie from './Movie'
import './App.css'
import Filter from './Filter'
import {motion ,AnimatePresence} from "framer-motion"

function App() {

  const[popular,setPopular]=React.useState([])
  const[filter,setFilter]=React.useState([])
  const[activeGenre,setActiveGenre]=React.useState(0)

  const fetchPopular = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1');
      
      const movies = await data.json()
      setPopular(movies.results)
      setFilter(movies.results)
      console.log(popular)

  }

  useEffect(()=>{
  fetchPopular()
  },[])
  return (
    <div className="App" >
      <Filter popular={popular} setFiltered={setFilter} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
      <motion.div 
      
       layout className="popular-movies">
         <AnimatePresence>
            {filter.map(movie=>{
              return(
                  <Movie key={movie.id} movie={movie}/>
              )
            })}
         </AnimatePresence>
     
      </motion.div>
    </div>
  )
}

export default App

// https://api.themoviedb.org/3/movie/popular?api_key=<<d5c35e51c81488b19da7c1f572507a3d>>&language=en-US&page=1