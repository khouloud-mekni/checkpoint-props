import React from 'react'
import PropTypes from 'prop-types';
import './Profile.css'

const Profile = ({ fullName, bio ,profession, handleName, children}) => {
  console.log(fullName)
  return (
    <div className="profile-container">
  <div className="profile-header">
    <h1 className="profile-name">{fullName}</h1>
    <h2 className="profile-profession">{profession}</h2>
    <p className="profile-bio" >{bio}</p>
  </div>
  <img src={children} style={{marginLeft:20}} alt="hkohoto" className="profile-image"/>
  <br/> 
  <br/> 

  <button className="profile-button" onClick={handleName}>Click Me</button>
</div>
  )
}
Profile.propTypes={
  fullName:PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  
  
}
Profile.defaultProps={
  fullName:"hamadi blagui",
  bio: "No bio available",
  profession: "Unknown profession",
}

export default Profile