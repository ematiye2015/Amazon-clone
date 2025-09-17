import React from 'react'


import classes from './Header.module.css'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from './LowerHeader';
import { BiCart } from "react-icons/bi";
 
const Header = () => {
  return (
    <section>
      <div className={classes.header__container}>
        {/* ========================
            Logo Section
        ======================== */}
        <div className={classes.logo__container}>
          <a href="#">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>

          <div className={classes.header__delivery}></div>
        </div>

        {/* ========================
            Location Section
        ======================== */}
        <div className="location__container">
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>

        {/* ========================
            Search Section
        ======================== */}
        <div className={classes.search}>
          <select name="category" id="category">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search products" />
          <button className="search__icon">
            <BsSearch />
          </button>
        </div>

        {/* ========================
            Right Side Links
        ======================== */}
        <div className={classes.order_container}>
          {/* Language */}
          <div className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="US Flag"
              className="flag__icon"
            />
            <select name=""id="">
              <option value="en">EN</option>
            </select>
          </div>

          {/* Account */}
          <a href="#">
            <div>
              <p>Hello, Sign in</p>
              <span>Account & Lists</span>
            </div>
          </a>

          {/* Orders */}
          <a href="#">
            <p>Returns</p>
            <span>& Orders</span>
          </a>

          {/* Cart */}
          <a href="" className={classes.cart}>
            <BiCart size={28} />
            <span className="cart__count">0</span>
          </a>
        </div>
      </div>

<LowerHeader />

    </section>

  );
};

export default Header;