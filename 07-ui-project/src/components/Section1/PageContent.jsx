import React from 'react'
import LeftText from './LeftText'
import ImageContainer from './ImageContainer'

const PageContent = (props) => {
  return (
    <div className=' flex items-center gap-10 h-[90vh]  px-18'>
       <LeftText />
       <ImageContainer users={props.users}/> 

    </div>
  )
}

export default PageContent