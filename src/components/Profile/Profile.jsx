import React from 'react';
import './Profile.css';

const Profile = ({image,name, publish_date}) => {
      console.log(name);
     
      return (
            <div className="mt-4">
                  <div className="d-flex gap-4">
                        <img className='profile-img' src={image} alt="" />
                        <div>
                              <h5>{name}</h5>
                              <p className='text-sm'>{publish_date}</p>
                        </div>
                  </div>
                  <div>

                  </div>
            </div>
      );
};

export default Profile;