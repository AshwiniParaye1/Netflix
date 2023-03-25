import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from './../store/index';
import { useEffect } from 'react';



export default function Movies() {

const navigate = useNavigate()  // use the useNavigate hook from react-router-dom to handle navigation

const [ isScrolled, setIsScrolled ] = useState(false)  // define a state variable called isScrolled to keep track of whether the page has been scrolled or not

const dispatch = useDispatch();  // use the useDispatch hook from react-redux to dispatch actions

const genresLoaded = useSelector((state) => state.netflix.genresLoaded);  // use the useSelector hook from react-redux to select a piece of state

const movies = useSelector((state) => state.netflix.movies);

  

useEffect( () => {  // use the useEffect hook to fetch data when the component mounts
  dispatch(getGenres())
}, [] )

useEffect(() => {
    if (genresLoaded) {
        dispatch(fetchMovies({type: "movies" }));
    }
}, [genresLoaded]);
  
  console.log(movies)

  window.onscroll = () => {  // set a window event listener to detect when the page is scrolled
    setIsScrolled(window.pageYOffset === 0 ? false : true);  // set isScrolled to true if the page has been scrolled, otherwise false
    return () => (window.onscroll = null);  // remove the event listener when the component unmounts
  }

  return (
    <div>
      Movies
    </div>
  )
}
