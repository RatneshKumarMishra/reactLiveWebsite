import React,{useState} from 'react';
import mohit from '../src/images/mohit.jpg';
import Button from '@material-ui/core/Button';
import './index.css';



const About= ()=>{
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
    <h1 >Grow your business with <strong className="brand"> Ratnesh Mishra</strong> </h1>
    <h2 className="my-3" >We are team of talented developer making websites
    </h2>
    <div className="mt-3">
    <Button variant="contained" color='primary'
    onClick={() =>setBackground('orange')}
   
    >
      Click me
    </Button>
      
    </div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 header-img">
      <div className="box">
      <img  src={mohit} className="img-fluid animated" alt="home img"/>
      <div className="content">
        <h2>Er Ratnesh Mishra</h2>
        <p>I am a website and android/iOS application developer if you Any help than contact with me</p>
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

export default About;