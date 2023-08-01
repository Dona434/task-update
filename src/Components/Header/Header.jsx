import React from 'react';
import Digitalpick from '../../../src/images/Digitalpick.png';
import './Header.css';

const Header = () => {
  return (
    <>
    <div class="shadow bg-body-white rounded">
    <nav class="navbar">
      <div class="container">
        <a class="navbar-brand" style={{marginLeft:"-10px"}}>
        <img src={Digitalpick} alt='logo' class="p-3"/>
        </a>
      </div>

      <div className="container px-5 text-center" style={{marginLeft:"60rem",marginTop:"-85px"}}>
          <div className="row justify-content-between justify-content-end">
            <div className="col-auto">
              <div className="p-1 guidance">Guidance</div>
            </div>
            <div className="col-auto">
              <div className="p-1 help">Help</div>
            </div>
            <div className="col-auto" style={{marginTop:"2px"}}>
              <span className='outer'>
                <span className='inner'>Login</span>
              </span>
            </div>
          </div>
        </div>
    </nav>
    </div>

    
    <div className='outerBox'>
      <p className='home'>Home</p> 
      <div className='hcontainer'>
      <span className='arrow'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M8.25 18.3334L15.5833 11.0001L8.25 3.66675" stroke="#2A97E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></span>

      <p className='digital'>Digital Marketplace</p>
      <span className='arrow1'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M8.25 18.3334L15.5833 11.0001L8.25 3.66675" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></span>

      <p className='digital'>Cloud hosting, software and support</p>
      <span className='arrow1'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M8.25 18.3334L15.5833 11.0001L8.25 3.66675" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></span>

      <p className='digital'>Cloud support</p>
      <span className='arrow1'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M8.25 18.3334L15.5833 11.0001L8.25 3.66675" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></span>
      
      </div>
    </div>
    <div className='line'></div>
    </>
  )
}

export default Header

