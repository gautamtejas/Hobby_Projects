import React from "react";
import './Button.css'

const Button =  (props)=>{
return <button onClick={props.fetchApi}>
             click to generate Joke.
       </button>;
}

export default Button