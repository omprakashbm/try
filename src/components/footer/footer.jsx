import React from 'react'

import logo from "../Header/images/logo1.png";
import facebook from "./images/facebook.webp";
import twitter from "./images/twitter.png";
import {Link} from 'react-router-dom'

import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row" style={{display:'flex', flexWrap:'wrap'}}>
            <div className="col-md-4 col-12">
              <img src={logo} alt="" className="logo" />
              <h5 className="mt-3 ms-5 fw-bold">Connect with us</h5>
              <form className="ms-5">
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email Address"
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 d-flex  submitButton"
                  >
                    Send
                  </button>
                </div>
              </form>

              <div className="d-flex ms-5 mt-4" style={{gap:5, display:'flex', justifyContent:'center'}}>
                <img src={facebook} alt="" className="social" />
                <img src={twitter} alt="" className="social" />
              </div>
            </div>
             
                <div className='col-md-5' >
                <h5 className='fw-bold first first1' ><u>Company</u></h5>
                <ul className='item item1'>
                  <li className='fw-bold'><Link to="/about" style={{textDecoration:'none', color:"inherit"}}> About Us</Link></li>
                  <li className='fw-bold'> <Link to='' style={{textDecoration:'none', color:'inherit' }}>Privacy Policy</Link></li>
                  <li className='fw-bold'> <Link to='' style={{textDecoration:'none', color:'inherit'}}>Terms & Condition</Link></li>
                  <li className='fw-bold'><Link to='' style={{textDecoration:'none', color:'inherit'}}>Our Team</Link></li>
                </ul>
              </div>
            
              
              <div className='col-md-3 '>
                <h5 className='fw-bold first'><u>Resources</u></h5>
                <ul className='item'>
                  <li className='fw-bold'><Link to='' style={{textDecoration:'none', color:'inherit'}}>Blog</Link></li>
                  <li className='fw-bold'><Link to='' style={{textDecoration:'none', color:'inherit'}}>Contact Us</Link></li>
                  <li className='fw-bold'><Link to='' style={{textDecoration:'none', color:'inherit'}}>Events</Link></li>
                  <li className='fw-bold'><Link to='' style={{textDecoration:'none', color:'inherit'}}>Products</Link></li>
                </ul>
              </div>
            
            
          </div>
        </div>
        <p className="d-flex justify-content-center pt-5 pb-2">
          Copyright © ConnexLearn
        </p>
      </div>
    </div>
  );
};

export default Footer;
