import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import mohit from '../src/images/mohit.jpg';




const Navbar = () => {
 function ratnesh(){
   alert('Please select')
 }
    return (
        <>
<div className="container-fluid nav-bg">
 <div className="row">
   <div className="col-10 mx-auto">

     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
     
        <NavLink className="navbar-brand" to="/">
        <div className="ox">
        <div className="ox-pic">

        <img  src={mohit} className="img-fluid animated" alt="home img"/>
         
        </div>
        <div className="ox-content">
         <p>Ratnesh</p> 
         
        </div>
        </div>
          </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav ml-auto my-2 my-lg-0 navbar-nav-scroll" styles="--bs-scroll-height: 100px;">
        <li className="nav-item">
        <NavLink exact className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Video">Videos</NavLink>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={ratnesh()} className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
 </div>
</div>

        </>
    )
}
export default Navbar;