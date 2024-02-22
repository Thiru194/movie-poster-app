import React,{useEffect, useState} from "react";
 function Movie(){
  const [movieList,setMovieList]=useState([])
const getMovie = ()=>{
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=3f526d64d5558a114981369d60f1cd60")
    .then(res => res.json())
    .then(json => setMovieList(json.results))
} 
useEffect(()=>{
    getMovie()
},[])
    console.log(movieList)


     return(
        <div>
            {movieList.map((movie)=>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            )}
        </div>
     )
 }
 export  default  Movie;