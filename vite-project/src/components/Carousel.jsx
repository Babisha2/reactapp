import React from 'react';
import  '../index.css';
import briyani from '../assets/swiggy/briyani.jpg';
import appam from '../assets/swiggy/appam.jpg';
import parotta from '../assets/swiggy/parotta.jpg';
import burgers from '../assets/swiggy/burgers.jpg';
import idli from '../assets/swiggy/idli.jpg';
import noodles from '../assets/swiggy/noodles.jpg';
import juice from '../assets/swiggy/juice.jpg';
import pasta from '../assets/swiggy/pasta.jpg';
import poori from '../assets/swiggy/poori.jpg';
import kebabs from '../assets/swiggy/kebabs.jpg';
import pizzas from '../assets/swiggy/pizzas.jpg';
import { Link } from 'react-router-dom';
const carousel = () => {
  return (
    <div>
<div className="container mt-4">
  <h4 className="fw-bold mb-3">What's on your mind?</h4>
  
    <div className="category-scroll" id="categoryScroll">
      <div className="category-item">
        <Link to="/briyani" className='briyani'><img src={briyani} alt="briyani"/></Link>
      </div>
      <div className="category-item">
         <Link to="/appam" className='appam'><img src={appam} alt="appam"/></Link>
      </div>
      <div className="category-item">
         <Link to="/parotta" className='parotta'><img src={parotta} alt="parotta"/></Link>
      </div>
      <div className="category-item">
         <Link to="/burgers" className='burgers'><img src={burgers} alt="Burgers"/></Link>
      </div>
      <div className="category-item">
         <Link to="/idli" className='idli'><img src={idli} alt="Idli"/></Link>
      </div>
      <div className="category-item">
         <Link to="/noodles" className='noodles'><img src={noodles} alt="noodles"/></Link>
      </div>
      <div className="category-item">
        <img src={juice} alt="juice"/>
      </div>
      <div className="category-item">
        <img src={pasta} alt="pasta"/>
      </div>
      <div className="category-item">
        <img src={poori} alt="poori"/>
      </div>
      <div className="category-item">
        <img src={kebabs} alt="kebabs"/>
      </div>
      <div className="category-item">
        <img src={pizzas} alt="pizzas"/>
      </div>
    </div>
  </div>
</div>
  )
}

export default carousel
