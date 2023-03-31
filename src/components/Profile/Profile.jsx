import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBookmark } from '@fortawesome/free-solid-svg-icons'


const Profile = (props) => {
      const {image,author_name, publish_date,read_time }=props.solution;
      const addBookMark = props.addBookMark;
      // console.log(props.solution);
     
      return (
            <div className="mt-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-4">
                        <img className='profile-img' src={image} alt="" />
                        <div>
                              <h5>{author_name}</h5>
                              <p className='text-sm'>{publish_date}</p>
                        </div>
                  </div>           
                  <div>
                        <p>{read_time} min   <span onClick={()=>addBookMark(props.solution)} className='p-2'><FontAwesomeIcon icon={faBookmark} /></span></p>
                  </div>
            </div>
      );
};

export default Profile;