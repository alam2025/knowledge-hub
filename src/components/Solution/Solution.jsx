import React from 'react';
import './Solution.css';
import Profile from '../Profile/Profile';

const Solution = (props) => {
      console.log(props.solution);
      const { cover_image ,image,author_name,publish_date,read_time, title } = props.solution;
     

      return (
            <div className='solution'>
                  <div className="card mb-3">
                        <img src={cover_image} className="card-img-top" alt="..." />
                        <div>
                              <Profile
                                    image={image}
                                    name={author_name}
                                    publish_date={publish_date}
                                    read_time={read_time}
                               />
                        </div>
                        <div className="card-body">
                              <h5 className="card-title">{title}</h5>
                        </div>
                  </div>

            </div>
      );
};

export default Solution;