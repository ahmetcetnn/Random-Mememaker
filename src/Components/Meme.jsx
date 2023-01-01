import React from "react";
import memesData from "../memesData";
import { useState } from "react";

function Meme() {
  const [memeImage, setMemeImage] = useState("")
  
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }



  return (
    <main>
      <div className="form">
        <input className="input" type="text" placeholder="Top text" />
        <input className="input" type="text" placeholder="Bottom text" />
        <button className="button" onClick={getMemeImage} >Get a new meme image</button>
      </div>
      <img src={memeImage} className="memeimage"/>
    </main>
  );
}

export default Meme;
