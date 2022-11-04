import React from 'react'
import './mailList.css'
const MailList = () => {
  return (
    <div className='mailList'> 
      <h1 className="mailTitle">Save Time ,Save Money</h1>
      <span className='mailDesc'>Sign Up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder='Enter Your Email' />
        <button> Subcribed</button>
      </div>
    </div>
  )
}

export default MailList