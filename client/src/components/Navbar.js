import React from 'react'
import "../App.css" 

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        {
        true ?
        <div>Log In</div>
            :
        <div>Log Out</div>
        }
    </div>
  </>
  )
}

export default Navbar