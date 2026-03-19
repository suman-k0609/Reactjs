import React from 'react'
import LeftText from './LeftText'
import ImageContainer from './ImageContainer'

const PageContent = () => {
  return (
    <div className=' flex items-center gap-10 h-[90vh]  py-10 px-18'>
       <LeftText />
       <ImageContainer /> 

    </div>
  )
}

export default PageContent