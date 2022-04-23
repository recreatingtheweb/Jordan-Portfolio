import { Link } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

function Home(){
    return <div>
        <Header title="Jordan Mccrae" text=" Height: 6'3
                &nbsp;
                Eyes: Brown
                &nbsp;
                Hair: Black
                &nbsp;
                Chest: 00/00
                &nbsp;
                Waist: 00
                &nbsp;
                Shoes: 12"/> 
      <Gallery/>  
    </div>
}

export default Home;