import React from 'react';
import './Cart.css';
import BookMark from '../BookMark/BookMark';

const Cart = () => {
      return (
            <div className='cart'>
                  <div className='spent-time'>
                        <h5>Spent time on read : </h5>
                  </div>
                  <div className='bookMark mt-4'>
                        <h5>BookMarked Blogs :</h5>
                        <BookMark />

                  </div>
            </div>
      );
};

export default Cart;