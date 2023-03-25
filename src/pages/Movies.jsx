import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from './../store/index';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from './../utils/firebase-config';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import NotAvailable from '../components/NotAvailable';
import Slider from '../components/Slider';
import SelectGenre from '../components/SelectGenre';



export default function Movies() {

const navigate = useNavigate()  // use the useNavigate hook from react-router-dom to handle navigation

const [ isScrolled, setIsScrolled ] = useState(false)  // define a state variable called isScrolled to keep track of whether the page has been scrolled or not

const dispatch = useDispatch();  // use the useDispatch hook from react-redux to dispatch actions

const genresLoaded = useSelector((state) => state.netflix.genresLoaded);  // use the useSelector hook from react-redux to select a piece of state

const movies = useSelector((state) => state.netflix.movies);
const genres = useSelector((state) => state.netflix.genres);

  

useEffect( () => {  
  dispatch(getGenres())
}, [] )

useEffect(() => {
    if (genresLoaded) {
        dispatch(fetchMovies({type: "movie" }));
    }
}, [genresLoaded]);
  
  console.log(movies)

  window.onscroll = () => {  // set a window event listener to detect when the page is scrolled
    setIsScrolled(window.pageYOffset === 0 ? false : true);  // set isScrolled to true if the page has been scrolled, otherwise false
    return () => (window.onscroll = null);  // remove the event listener when the component unmounts
  }

    onAuthStateChanged(firebaseAuth,(currentUser) => {
    // if(currentUser) navigate("/")
  })

  return (
    <Container>

      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      
      <div className="data">
      <SelectGenre genres={genres} type="movie" />
        {
            movies.length ? <Slider movies={movies}/> : <NotAvailable />
        }
      </div>

    </Container>
  )
}

const Container = styled.div`

.data {
    margin-top: 8rem;
    .not-available {
        text-align:center;
        color: white;
        margin-top: 4rem;
    }
}

`;