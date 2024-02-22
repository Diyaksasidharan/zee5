import React, { useEffect, useState } from 'react'
import './Banner.css';
import tmdbAxiosInstance from '../tmdbAxiosInstance';

function Banner({ fetchUrl }) {

    const [movie, setMovie] = useState();
    const base_url = 'https://image.tmdb.org/t/p/original/';


    // 
    

    const fetchData = async () => {
        try {
            const { data } = await tmdbAxiosInstance.get(fetchUrl);
    
            // Check if data.results is defined and not an empty array
            if (data.results && data.results.length > 0) {
                setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
            } else {
                console.error('No results found in the API response.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    // console.log(movie)

    useEffect(() => {
        fetchData()
    },[])

    // console.log(movie);


    return (
         <div style={{
            height: "600px",
            // backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
            backgroundImage : `url('https://media.istockphoto.com/id/1425800274/photo/television-streaming-video-multimedia-wall.jpg?s=1024x1024&w=is&k=20&c=HiachDG-inj-rLCnm7QuQz5qL_12vajlX_KjfaR-jQ0=')`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
        }}>

            <div className= "Banner-content">

            <h1> {movie?.name}</h1>
            <h5>{movie?.overview}</h5>

        </div>
        
        </div >
    )
}

export default Banner