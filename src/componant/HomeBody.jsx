import React from 'react'
import AlbabaProfile from './AlbabaProfile'

const HomeBody = () => {
  return (
    <section className='py-[20px] bg-[#201f1f]'>
        <div className="container mx-auto md:flex justify-between">
            <div className="albabaProfile md:w-[40%]"><AlbabaProfile/></div>
            <div className="TopUPItem md:w-[60%]">wello</div>
        </div>
    </section>
  )
}

export default HomeBody