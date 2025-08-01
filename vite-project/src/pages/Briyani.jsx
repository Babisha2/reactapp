import React from 'react';
import briyani1 from '../assets/pictures/briyani1.jpg';
import briyani3 from '../assets/pictures/briyani3.jpg';
import briyani2 from '../assets/pictures/briyani2.jpg';
import briyani4 from '../assets/pictures/briyani4.jpg';
import Navbar from '../components/Navbar';
const Briyani = () => {
  return (
    <div>
      <Navbar/>
    
    <div>
<div className="p-4">
  <h2>Biryani</h2>
  <p>Taste these delectable classics, delectable biryanis to make your day.</p>
<div className="d-flex gap-3 mb-3"> 
  <button className="btn btn-outline-secondary btn-sm">Filter</button>
  <button className="btn btn-outline-secondary btn-sm">Sort By</button>
  <button className="btn btn-outline-secondary btn-sm">10 Mins Delivery</button>
</div>
<h5 className="mb-3">Restaurants to explore</h5>
  <div className="scrolling-wrapper d-flex flex-nowrap">
    <div className="card">
      <img src={briyani1} class="card-img-top" alt="Curry Home"/>
      <div className="card-body">
        <h5 className="card-title">Curry Home</h5>
        <p className="card-text text-muted">⭐ 4.4 · 40-45 mins<br />Biryani, Home Food, Healthy Food<br /><small>Veppamoodu</small></p>
      </div>
    </div>
    <div className="card position-relative">
      <img src={briyani3} class="card-img-top" alt="Singhar"/>
      <div className="card-body">
        <h5 className="card-title">Singhar Restaurant</h5>
        <p className="card-text text-muted">⭐ 4.3 · 20-25 mins<br />Chinese, Biryani, South Indian<br /><small>Veppamoodu</small></p>
      </div>
    </div>
    <div className="card position-relative">
      <img src={briyani2} class="card-img-top" alt="Time Pass"/>
      <div className="card-body">
        <h5 className="card-title">Time Pass Restaurant</h5>
        <p className="card-text text-muted">⭐ 4.4 · 25-30 mins<br />South Indian, Biryani, Fast Food<br /><small>Holy cross college Road</small></p>
      </div>
    </div>
    <div className="card">
      <img src={briyani4} class="card-img-top" alt="Mummy Daddy"/>
      <div className="card-body">
        <h5 className="card-title">Mummy Daddy Hotel</h5>
        <p className="card-text text-muted">⭐ 4.6 · 15-20 mins<br />Biryani, South Indian, Beverages<br /><small>Veppamoodu</small></p>
      </div>
    </div>

  </div>

</div>
    </div>
    </div>
  )
}

export default Briyani

