import React from "react";
import memesData from "../memesData";

function Meme() {
  return (
    <main>
      <div className="form">
        <input className="input" type="text" placeholder="Top text" />
        <input className="input" type="text" placeholder="Bottom text" />
        <button className="button">Get a new meme image</button>
      </div>
    </main>
  );
}

export default Meme;
