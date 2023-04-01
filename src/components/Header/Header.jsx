import React from 'react';
import './Header.css'

const Header = () => {
      
      return (
            <div className='header container'>
                  <nav className="navbar navbar-expand-lg bg-white">
                        <div className="container-fluid ">
                              <a className="navbar-brand" href="#">KNOWLEDGE HUB</a>
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                         
                                          
                                         
                                    </ul>
                                    <ul className='menu-item d-flex justify-content-center align-items-center'>
                                         <a id='blog' href="#">Blog</a>
                                         <a href="#">About</a>
                                         <a href="#">Conatact</a>
                                         <img  src="/public/avatar.jpg" alt="profile" />

                                    </ul>
                              </div>
                        </div>
                  </nav>
            </div>
      );
};

export default Header;