import React from 'react';
import './Solution.css';
import Profile from '../Profile/Profile';
import { addTime } from '../utilities/addToCart';

const Solution = (props) => {
      const { id,cover_image ,image,author_name,publish_date,read_time, title } = props.solution;

     
      const addReadTime=props.addReadTime;
      const addBookMark = props.addBookMark;

      return (
            <div className='solution'>
                  <div className="card mb-3">
                        <img src={cover_image} className="card-img-top" alt="..." />
                        <div>
                              <Profile
                              solution ={props.solution}
                                    addBookMark={addBookMark}
                               />
                        </div>
                        <div className="card-body">
                              <h5 className="card-title">{title}</h5>
                              <p className='mt-5'>#programming  #Coding</p>
                        </div>
                        
                        <button onClick={()=>addReadTime(props.solution)}  className='w-25 border-0 text-start bg-transparent mark'>Mark as read</button>
                  </div>

            </div>
      );
};

export default Solution;