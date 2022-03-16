import React, {useEffect, useState} from 'react';
import { useParams } from "react-router"
import axios from 'axios';

const Display = () => {

    const { category, id } = useParams();

    let [info, setInfo] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(res=>{
            console.log("Response getting details", res)
            setInfo(res.data);
        })
        .catch(err=>console.log("Error from display", err))
        setInfo({name: "Unknown"})
    },[category,id])

    return(
        info.name === "Unknown" ? 
        <div>
            <h2>These aren't the driods you're looking for</h2>
            <img src="http://4.bp.blogspot.com/-lkaPTJ47Mg8/UDuzl1DR1_I/AAAAAAAACK4/mWwQYhCbzx0/s1600/Obi+Won-These+aren't+the+droids.jpg" alt="img_obi_wan_kenobi" style={{width: 400, height: 300}}/>
        </div> :
        category === "people" ?
            <div>
                <h1>{info.name}</h1>
                <h3>Height: {info.height}</h3>
                <h3>Mass: {info.mass}</h3>
                <h3>Hair Color: {info.hair_color}</h3>
                <h3>Skin Color: {info.skin_color}</h3>
            </div> : 
        category === "planets" ? 
            <div>
                <h1>{info.name}</h1>
                <h3>Climate : {info.climate}</h3>
                <h3>Terrain: {info.terrain}</h3>
                <h3>Surface Water: {info.surface_water}</h3>
                <h3>Population: {info.population}</h3>
            </div> : 
            category === "starships" ? 
            <div>
                <h1>{info.name}</h1>
                <h3>Model : {info.model}</h3>
                <h3>Length: {info.length}</h3>
                <h3>Crew: {info.crew}</h3>
                <h3>Passengers: {info.passengers}</h3>
                <h3>Starship Class: {info.starship_class}</h3>
            </div> :
            category === "films" ? 
            <div>
                <h1>{info.title}</h1>
                <h3>Episode id: {info.episode_id}</h3>
                <h3>Director: {info.director}</h3>
                <h3>Producer: {info.producer}</h3>
                <h3>Release Date: {info.release_date}</h3>
            </div> : 
            category === "species" ? 
            <div>
                <h1>{info.name}</h1>
                <h3>Classification: {info.classification}</h3>
                <h3>Skin Colors: {info.skin_colors}</h3>
                <h3>Hair Color: {info.hair_colors}</h3>
                <h3>Eye Color: {info.eye_colors}</h3>
                <h3>Average Lifespan: {info.average_lifespan}</h3>
                <h3>Language: {info.language}</h3>
            </div> : 
            category === "vehicles" ? 
            <div>
                <h1>{info.name}</h1>
                <h3>Model: {info.model}</h3>
                <h3>Cargo Capacity: {info.cargo_capacity}</h3>
                <h3>Crew: {info.crew}</h3>
                <h3>Max Atmosphering Speed: {info.max_atmosphering_speed}</h3>
                <h3>Length: {info.length}</h3>
                <h3>Vehicle Class: {info.vehicle_class}</h3>
            </div> : ""
    )
}

export default Display;