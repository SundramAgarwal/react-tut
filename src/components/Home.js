import React from "react";

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mlvk4Ny-9yRQzFrZn-GI5snIMP0wu5B6NQ&usqp=CAU"
          alt="no"
        />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://m.media-amazon.com/images/I/7199N-Uz2AL._SX679_.jpg"
            alt="no"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-phone</span>
          <span>price: 100$</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
