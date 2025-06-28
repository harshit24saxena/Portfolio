import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='m-5 relative'>
      <h3 className='subHeading'> WORK </h3>
      <h3 className='subHeading mb-4' >with me</h3>
            <img
        className="absolute left-105 top-0 h-20 sm:left-90"
        src="./src/assets/StyleElementCircle.png"
        alt=""
      />
      <div className=' mx-auto gap-5 sm:flex my-5'>
        <img className= 'sm:w-3/5 h-60 my-3' src="https://th.bing.com/th/id/OIP.KNonymuZak9MeZWto2oUlgHaE8?w=260&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
        <div className='my-10'>
            <h6>Address</h6>
            <p className='mb-3'>152, vidhyapati Nagar, ujjain , Madhya Pradesh, India</p>
            <h6>Phone</h6>
            <p className='mb-3'>(+91) 8602629896</p>
            <h6>E-mail</h6>
            <p className='mb-3'>saxena24honey@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
