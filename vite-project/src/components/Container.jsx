import React from 'react';
import t1 from '../assets/swiggy/t1.jpg';
import t2 from '../assets/swiggy/t2.jpg';
import t3 from '../assets/swiggy/t3.jpg';
import t4 from '../assets/swiggy/t4.jpg';
import t5 from '../assets/swiggy/t5.jpg';
import t6 from '../assets/swiggy/t6.jpg';
import { Link } from 'react-router-dom';
const Container = () => {
  return (
    <div>
      <div className="container mt-4">
  <h5 className="fw-bold mb-3">Top restaurant chains in Nagercoil</h5>


    <div className="scroll-container" id="restoScroll">
      <div className="restaurant-card position-relative">
        <Link to="/rest1" className='rest1'><img src={t1} alt="Pizza Hut"/></Link>
        <div className="restaurant-body">
          <div className="restaurant-title">Pizza Hut</div>
          <div className="restaurant-details">
            <span className="rating">★4.4</span> · 15–20 mins<br />
            Pizzas<br />
            Veppamoodu
          </div>
          </div>
      </div>
      <div className="restaurant-card position-relative">
        <img src={t2} alt="KFC"/>
        <div className="restaurant-body">
          <div className="restaurant-title">KFC</div>
          <div className="restaurant-details">
            <span className="rating">★ 4.5</span> · 15–20 mins<br />
            Burgers, Fast Food<br />
            Nagercoil
          </div>
        </div>
      </div>
      <div className="restaurant-card position-relative">
        <img src={t3} alt="NIC"/>
        <div className="restaurant-body">
          <div className="restaurant-title">NIC Ice Creams</div>
          <div className="restaurant-details">
            <span className="rating">★ 4.7</span> · 20–25 mins<br />
            Ice Cream, Desserts<br />
            Chittikulam
          </div>
        </div>
      </div>
      <div className="restaurant-card position-relative">
        <img src={t4} alt="Kwality Walls"/>
        <div className="restaurant-body">
          <div className="restaurant-title">Kwality Walls</div>
          <div className="restaurant-details">
            <span className="rating">★ 4.6</span> · 20–25 mins<br />
            Ice Cream, Desserts<br />
            Veppamoodu
          </div>
        </div>
      </div>
      <div className="restaurant-card position-relative">
        <img src={t5} alt="Kwality Walls"/>
        <div className="restaurant-body">
          <div className="restaurant-title">Kwality Walls</div>
          <div className="restaurant-details">
            <span className="rating">★ 4.6</span> · 20–25 mins<br />
            Ice Cream, Desserts<br />
            Veppamoodu
          </div>
        </div>
      </div>
      <div className="restaurant-card position-relative">
        <img src={t6} alt="Kwality Walls"/>
        <div className="restaurant-body">
          <div className="restaurant-title">Kwality Walls</div>
          <div className="restaurant-details">
            <span className="rating">★ 4.6</span> · 20–25 mins<br />
            Ice Cream, Desserts<br />
            Veppamoodu
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
  )
}

export default Container

