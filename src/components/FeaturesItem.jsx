import React from 'react'

const FeaturesItem = ({icon, title, content}) => {
  return (
    <div className='px-2 lg:py-4 h-[210px]'>
        <div className='flex-center bg-p3 rounded-full text-white size-12 text-3xl'>
            { icon }
        </div>

        <div className='py-4 body-1 font-barlow capitalize text-p1'>
            { title }
        </div>

        <div className='font-exo max-lg:small-caption max-xl:small-1'> 
            { content }
        </div>
    </div>
  )
}

export default FeaturesItem