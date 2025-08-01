import React from "react";
import { useNavigate } from "react-router-dom";
import gpay from '../src/assets/pictures/gpay.jpg';
import phonepe from '../src/assets/pictures/phonepe.jpg';
import Navbar from './components/Navbar';
function Payment() {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/order-success");
  };

  return (
    <div>
      <Navbar/>
    <div className="container mt-4">
      <button className="btn btn-link text-dark mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h5>Payment Options</h5>
      <p className="text-muted">1 item • Total: ₹277</p>

      <div className="border rounded p-3 mb-3">
        <p className="mb-1"><strong>Meat And Eat</strong> | Delivery in: 35–40 mins</p>
        <p className="text-muted mb-0">Home | Sunshine Textiles, Mekkamandapam, TN</p>
      </div>

      <div className="alert alert-success py-2 px-3">
        Save upto ₹55 more with payment offers
      </div>

      <h6 className="mt-4">Pay by any UPI App</h6>
      <div className="list-group">
        {/* Payment options */}
        {/* PhonePe */}
        <label className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={phonepe} alt="PhonePe" style={{ height: "24px", marginRight: "10px" }} />
            PhonePe UPI
          </div>
          <input type="radio" name="paymentMethod" />
        </label>

        {/* Google Pay */}
        <label className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={gpay} alt="GPay" style={{ height: "24px", marginRight: "10px" }} />
            Google Pay
          </div>
          <input type="radio" name="paymentMethod" />
        </label>

        {/* Add new UPI ID */}
        <label className="list-group-item d-flex justify-content-between align-items-center text-danger">
          <div>
            <strong>+ Add New UPI ID</strong><br />
            <small className="text-muted">You need to have a registered UPI ID</small>
          </div>
        </label>
      </div>

      <h6 className="mt-4">Credit & Debit Cards</h6>
      <div className="list-group">
        <label className="list-group-item text-danger">
          <strong>+ Add New Card</strong><br />
          <small className="text-muted">Save and Pay via Cards.</small>
        </label>
      </div>

      <h6 className="mt-4">More Payment Options</h6>
      <div className="list-group mb-4">
        <label className="list-group-item d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/891/891419.png" alt="Wallets" style={{ height: "24px", marginRight: "10px" }} />
            Wallets
          </div>
          <span className="text-muted small">PhonePe, Amazon Pay & more</span>
        </label>
      </div>

      {/* Place Order Button */}
      <button
        className="btn btn-success w-100"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
    </div>
  );
}

export default Payment;