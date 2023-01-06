import React from "react";
import memesData from "../memesData";
import { useState } from "react";

function Meme() {


  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})




  const [memeImage, setMemeImage] = useState("")
  
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }

    function handleChange(event){
      const {name,value} =event.target
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))


    }

  return (
    <main>
      <div className="form">
        <input 
        className="input" 
        type="text"
        placeholder="Top text" 
        name="topText"
        value={meme.topText}
        onChange={handleChange}

        />
       
        <input 
        className="input" 
        type="text"
        placeholder="Bottom text" 
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
        />


        <button className="button" onClick={getMemeImage} >Get a new meme image</button>
      </div>
      <img src={memeImage} className="memeimage"/>
      <h2 className="meme--text top">{meme.topText}</h2>
       <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </main>
  );
}

export default Meme;
