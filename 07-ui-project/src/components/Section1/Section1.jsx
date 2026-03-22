import React from 'react'
import Navbar from './Navbar.jsx'
import PageContent from './PageContent.jsx'
const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-white '>
      <Navbar />
      <PageContent users={props.users}/>
    </div>
  )
}

export default Section1