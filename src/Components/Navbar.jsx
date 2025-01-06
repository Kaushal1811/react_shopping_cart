import React, { useState } from "react";
import { items } from "./Data";
import { BsCartCheckFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setD, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (fcategory) => {
    const elctronics = items.filter(
      (product) => product.category === fcategory
    );
    // console.log(elctronics)
    setD(elctronics);
  };

  const filterByPrice = (fprice) => {
    const elctronics = items.filter((product) => product.price >= fprice);
    // console.log(elctronics)
    setD(elctronics);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} onClick={() => setD(items)} className="brand">
            E-Commerce
          </Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>

          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
            <BsCartCheckFill style={{fontSize: '1.5rem'}} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        {
      location.pathname == '/' && (<div className="navbar-wrapper">
        <div className="items">Filter by {"->"}</div>
        <div onClick={() => setD(items)} className="items">
          No Filter
        </div>
        <div onClick={() => filterByCategory("mobile")} className="items">
          Mobiles
        </div>
        <div onClick={() => filterByCategory("laptop")} className="items">
          Laptops
        </div>
        <div onClick={() => filterByCategory("tablet")} className="items">
          Tablets
        </div>
        <div onClick={() => filterByPrice("29999")} className="items">
          {">="}29999
        </div>
        <div onClick={() => filterByPrice("49999")} className="items">
          {">="}49999
        </div>
        <div onClick={() => filterByPrice("69999")} className="items">
          {">="}69999
        </div>
        <div onClick={() => filterByPrice("89999")} className="items">
          {">="}89999
        </div>
      </div>

      )
    }
        
      </header>
    </>
  );
};

export default Navbar;
