import React from 'react'
import codesandbox from '../../images/codesandbox.png'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <a href='https://www.linkedin.com/in/mwfront/' target="_blank">
              <i className='fa fa-linkedin-square'></i>
            </a>
            <a href='https://github.com/ManuelVillarVitoria' target="_blank">
              <i className='fa fa-github-square'></i>
            </a>
            <a href='https://medium.com/@manuelvillar_19482' target="_blank">
              <i className='fa fa-brands fa-medium'></i>
            </a>
            <a href='https://codesandbox.io/dashboard/all/?workspace=d705a9d9-5ec2-4b59-86a2-4aae8af77374' target="_blank">
              <img src={codesandbox} className="codesandbox" alt='codesandbox'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile