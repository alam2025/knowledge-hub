import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBookmark } from '@fortawesome/free-solid-svg-icons'


const Profile = ({image,name, publish_date,read_time}) => {
      console.log(name);
     
      return (
            <div className="mt-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-4">
                        <img className='profile-img' src={image} alt="" />
                        <div>
                              <h5>{name}</h5>
                              <p className='text-sm'>{publish_date}</p>
                        </div>
                  </div>           
                  <div>
                        <p>{read_time} min   <span className='p-2'><FontAwesomeIcon icon={faBookmark} /></span></p>
                  </div>
            </div>
      );
};

export default Profile;