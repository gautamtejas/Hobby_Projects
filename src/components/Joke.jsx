import React from "react";
import { useState } from "react";
import Button from "./Button";
import './Joke.css'
import { useEffect } from "react";


const Joke = ()=>{

    const [joke,setJoke] = useState("");

    const fetchApi = () => {
       fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res) => res.json()) //returning data into json file
        .then((data) => setJoke(data.joke)); 
    };

    // console.log(joke);
    return(
     
       <div className="Joke">
        <Button fetchApi={fetchApi} /><br/>
        {joke}
       </div>
);
}

export default Joke