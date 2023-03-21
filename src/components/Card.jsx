import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import video from '../assets/video.mp4';

export default function Card({movieData, isLiked = false}) {

    const [ isHovered, setIsHovered ] = useState(false);

    const navigate = useNavigate()

  return <Container onMouseEnter={ () => setIsHovered(true) } 
                    onMouseLeave={ () => setIsHovered(false) }>

    <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} 
    alt='' 
    />
    {
        isHovered && (
            <div className='hover'>
                <div className='image-video-container'>
                        <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`}  alt='movie' 
                        onClick={ () => navigate("/player") }
                        />
                        <video src={video} autoPlay muted loop 
                            onClick={ () => navigate("/player") }>
                        </video>
                </div>
            </div>
        )
    }

  </Container>
}


const Container = styled.div``;