import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/home.jpg';
import MovieLogo from '../assets/homeTitle.webp';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from './../store/index';



export default function Netflix() {  // define a React component called Netflix

  const navigate = useNavigate()  // use the useNavigate hook from react-router-dom to handle navigation

  const [ isScrolled, setIsScrolled ] = useState(false)  // define a state variable called isScrolled to keep track of whether the page has been scrolled or not

  const dispatch = useDispatch();  // use the useDispatch hook from react-redux to dispatch actions

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);  // use the useSelector hook from react-redux to select a piece of state

  const movies = useSelector((state) => state.netflix.movies);

  

  useEffect( () => {  // use the useEffect hook to fetch data when the component mounts
    dispatch(getGenres())
  }, [] )

  useEffect(() => {
    if(genresLoaded) dispatch(fetchMovies({type: "all"}));
  }, [])
  

  window.onscroll = () => {  // set a window event listener to detect when the page is scrolled
    setIsScrolled(window.pageYOffset === 0 ? false : true);  // set isScrolled to true if the page has been scrolled, otherwise false
    return () => (window.onscroll = null);  // remove the event listener when the component unmounts
  }
console.log('movies ====', movies);
  return (  // return the JSX markup for the component
    <Container>  
      <Navbar isScrolled={isScrolled} /> 
      <div className='hero'>  
        <img src={backgroundImage} alt='background' className='background-image' />  
        <div className='container'>  
          <div className='logo'>  
            <img src={MovieLogo} alt='Movie Logo' /> 
          </div>
          <div className='buttons flex'> 
            <button className='flex j-center a-center' onClick={() => navigate('/player')}>  
            
              <FaPlay />Play
            </button>
            <button className='flex j-center a-center'>  
                <AiOutlineInfoCircle />More Info
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image: {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          padding: 0.5rem;
          border-radius: 0.2rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;