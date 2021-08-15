import React,{useState} from 'react';
import myweb from '../src/images/myweb.jpg';
import Button from '@material-ui/core/Button';
import './index.css';



const Home= ()=>{
  const[background,setBackground]=useState("yellow");
  
    return(
    <>
    <div className="container-fluid nav-bg">
    <div className="row">
    <div className="col-10 mx-auto">
    
    <section id="header" className="" style={{background}} >
    <div className="container-fluid nav-bg">
    <div className="row">
    <div className="col-10 mx-auto">
      <div className="row">
      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
    <h1 >Grow your business with <strong className="brand-name"> Ratnesh Mishra</strong> </h1>
    <h2 className="my-3" >We are team of talented developer making websites
    </h2>
    <div className="mt-3">
    <Button variant="contained" color='primary'
    onClick={() =>setBackground('#d5d')}
    >
      Click me
    </Button>
      
    </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 header-img">
      <div className="oxx">
      <img src={myweb} className="img-fluid animated" alt="home img"/>
      <div className="oxx-content">
        <h3>Your Welcome</h3>
        <p>This is my whole portfolio site and all about it mention this site Like Software development Android development iOs Development and so on...</p>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
    </div>
    </div>
    </>
 
    );
  }

export default Home;