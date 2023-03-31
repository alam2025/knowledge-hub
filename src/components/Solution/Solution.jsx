import React from 'react';
import './Solution.css';
import Profile from '../Profile/Profile';

const Solution = (props) => {
      console.log(props.solution);
      const { cover_image ,image,author_name,publish_date} = props.solution;
     

      return (
            <div className='solution'>
                  <div className="card mb-3">
                        <img src={cover_image} className="card-img-top" alt="..." />
                        <div>
                              <Profile
                                    image={image}
                                    name={author_name}
                                    publish_date={publish_date}
                               />
                        </div>
                        <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                  </div>

            </div>
      );
};

export default Solution;