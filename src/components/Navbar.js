import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return <div>
        <div class="cover-container-fluid d-flex w-100 h-100 p-3 mx-auto flex-column">

<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
     {/* <a class="navbar-brand" href="#">Navbar</a>  */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/portfolio">Portfolio</Link>
        </li> */}
        <li class="nav-item">
          <Link class="nav-link" to="/about">About Me</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Social Media
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="https://www.instagram.com/jordan.a.mccrae/"><i class="fa-brands fa-instagram-square"></i>Instagram</a></li>
            <li><a class="dropdown-item" href="#"><i class="fa-brands fa-facebook-square"></i>Facebook</a></li>
            <li><a class="dropdown-item" href="https://www.tiktok.com/@jordan.a.mccrae"><i class="fa-brands fa-tiktok"></i>Tik Tok</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    </div>
}



export default Navbar;