import React from 'react'
import lmm from "../files/group.png"
import lms from "../files/group1.png"

export const Growbis = () => {
    return (
        <div className='mt-5'>
            <div className="container pl-5 pr-5 mt-5">
                <div className=" container row">
                    <div className="col-lg-6 col-md-12">
                        <h2 className="text-start">
                            Grow Your <strong className='text-danger'>Business</strong><p className=' h2'></p>
                        </h2>
                        <br />
                        <p className='text-start'>
                            One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                        </p>
                        <p className='text-start'>
                            One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                        </p>
                        <p className='text-start'>
                            One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img src={lmm} width="600" height="400" alt="lmm"  />
                    </div>
                </div>
                <div className=" container mt-5 row">
                    <div className="col-lg-6 col-md-12 ">
                        <img src={lms} width="500" height="300" alt="lms" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h2 className="text-start">
                        Reach Millions Of Business <br /> Buyers 
                           <strong className='text-danger'> Globally</strong><p className=' h2'></p>
                        </h2>
                        <br />
                        <p className='text-start'>
                            One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                        </p>
                        <p className='text-start'>
                            One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
