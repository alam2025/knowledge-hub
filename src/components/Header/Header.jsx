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
                                         <a href="/blog">Blog</a>
                                         <a href="/about">About</a>
                                         <a href="/contact">Conatact</a>
                                         <img  src="/public/Profile.png" alt="" />

                                    </ul>
                              </div>
                        </div>
                  </nav>
            </div>
      );
};

export default Header;