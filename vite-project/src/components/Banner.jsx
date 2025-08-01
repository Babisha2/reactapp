import React from 'react'
import r9 from '../assets/swiggy/r9.jpg';
import t1 from '../assets/swiggy/t1.jpg';
import r1 from '../assets/swiggy/r1.jpg';
import t4 from '../assets/swiggy/t4.jpg';
import r5 from '../assets/swiggy/r5.jpg';
import r7 from '../assets/swiggy/r7.jpg';
const Banner = () => {
  return (
    <div>
<div class="container my-4">
  <h5 className="fw-bold">Restaurants with online food delivery in Nagercoil</h5>
  <div className="filter-bar my-3">
    <button className="filter-btn">Filter</button>
    <button className="filter-btn">Sort By</button>
    <button className="filter-btn">Fast Delivery</button>
    <button className="filter-btn">New on Swiggy</button>
    <button className="filter-btn">Rating 4.0+</button>
    <button className="filter-btn">Pure Veg</button>
    <button className="filter-btn">Offers</button>
    <button className="filter-btn">Rs. 300–Rs. 600</button>
    <button className="filter-btn">Less than 300</button>
  </div>

    <div className="restaurant-scroll" id="restoScroll">
      <div className="restaurant-card">
        <img src={r9} alt="KFC"/>
        <div className="restaurant-body">
          <div className="title">KFC</div>
          <div><span className="rating">★ 4.5</span> • 15–20 mins</div>
          <div>Burgers, Fast Food<br />Nagercoil</div>
        </div>
      </div>
      <div className="restaurant-card">
        <img src={t1} alt="Pizza Hut"/>
        <div className="restaurant-body">
          <div className="title">Pizza Hut</div>
          <div><span className="rating">★ 4.4</span> • 15–20 mins</div>
          <div>Pizzas<br />Veppamoodu</div>
        </div>
      </div>
      <div className="restaurant-card">
        <img src={r1} alt="NIC"/>
        <div className="restaurant-body">
          <div className="title">NIC Ice Creams</div>
          <div><span className="rating">★ 4.7</span> • 20–25 mins</div>
          <div>Ice Cream, Desserts<br />CHITTIKULAM</div>
        </div>
      </div>
      <div className="restaurant-card">
        <img src={t4} alt="Kwality Walls"/>
        <div className="restaurant-body">
          <div className="title">Kwality Walls</div>
          <div><span className="rating">★ 4.6</span> • 20–25 mins</div>
          <div>Desserts, Ice Cream<br />Veppamoodu</div>
        </div>
      </div>
      <div className="restaurant-card">
        <img src={r5} alt="Kwality Walls"/>
        <div className="restaurant-body">
          <div className="title">Kwality Walls</div>
          <div><span className="rating">★ 4.6</span> • 20–25 mins</div>
          <div>Desserts, Ice Cream<br />Veppamoodu</div>
        </div>
      </div>
      <div className="restaurant-card">
        <img src={r7} alt="Kwality Walls"/>
        <div className="restaurant-body">
          <div className="title">Kwality Walls</div>
          <div><span className="rating">★ 4.6</span> • 20–25 mins</div>
          <div>Desserts, Ice Cream<br />Veppamoodu</div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Banner
