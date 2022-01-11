import React from 'react'
import log from "../files/group2.png"

export const Request = () => {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="container mt-5">
                    <div>
                        <h2 style={{textTransform:"capitalize",}}>
                            Get discovered and increase sales with 
                            <b className='text-danger'>intelligent tools</b>
                            <center> 
                                <br />
                                <p className=' h23'></p>
                            </center>
                        </h2>
                        <center><p style={{width:"900px"}}>
                            One of the largest B2B wholesale marketplaces in the world. Founded in 1999 by Jack Ma, Alibaba.com ecommerce platform has helped sellers reach buyers around the world for more than 20 years, now with an end-to-end suite of tools built for B2B.
                        </p></center>
                    </div>
                    <br />
                    <div>
                        <img src={log} alt="group1" />
                    </div>
                    <br /> 
                    <br />
                </div>
                <div className="container lmm mb-5">
                    <h1 className="text-white mb-2" style={{textTransform:"capitalize",}}>
                        Ready to grow your <br /> business
                    </h1>
                    <div className="container row">
                        <button className="btn col-5 btn-danger p-3" style={{borderRadius:"30px"}}>Chat with Consultant</button>
                            <div className="col-2"></div>
                        <button className="btn col-5 p-3 border text-white" style={{borderRadius:"30px"}}>Start Selling</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
