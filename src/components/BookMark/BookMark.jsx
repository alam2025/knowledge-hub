import React from 'react';
import './BookMark.css';

const BookMark = ({bookmark}) => {
      // console.log(bookmark);
      return (
            <div className='booked mt-3'>
                  <h5>{bookmark.title}</h5>
                         
            </div>
      );
};

export default BookMark;