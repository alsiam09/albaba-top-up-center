import React from 'react'
import AlbabaProfile from './AlbabaProfile'
import TopUpProdect from './TopUpProdect'

const HomeBody = () => {
  return (
    <section className='py-[20px] bg-[#201f1f]'>
        <div className="container mx-auto lg:flex justify-between">
            <div className="albabaProfile lg:w-[45%]"><AlbabaProfile/></div>
            <div className="TopUPItem lg:w-[55%] px-[10px]"><TopUpProdect/></div>
        </div>
    </section>
  )
}

export default HomeBody