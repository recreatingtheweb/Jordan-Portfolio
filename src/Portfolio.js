import { Link } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Portfolioalbum
 from "./components/Portfolioalbum";
function Portfolio(){
    return <div>
    
        <Header title=" My Portfolio" text="A look at previous companies I have worked with blah blah" /> 
      <Portfolioalbum/>  
    </div>
}

export default Portfolio;