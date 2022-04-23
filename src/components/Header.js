import React from "react";

function Header(props){
    return <div>
           <div className="header">
           <h1 >{props.title}</h1>
                
                <p >
                {props.text}
                </p>
                {/* <h1 >Jordan Mccrae</h1>
                
                <p >
                Height: 6'3
                &nbsp;
                Eyes: Brown
                &nbsp;
                Hair: Black
                &nbsp;
                Chest: 00/00
                &nbsp;
                Waist: 00
                &nbsp;
                Shoes: 12
                </p> */}
         </div>
         </div>
}

export default Header;
