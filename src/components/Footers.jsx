import React from 'react'

export const Footers = () => {
    return (
        <div>
            <footer>
                <div style={{borderBottom:"1px solid rgb(165, 165, 165)",paddingTop: "5%",paddingLeft:"5%",paddingRight:"5%",paddingBottom:"2%"}}>
                    <div className="container-fluid row">
                        <div className="col-3">
                            <h6 className='text-start text-white'>Sell With Anaizon</h6>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    
                                    How much does it cost?
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Beginner s Guide
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Intro to ecommerce
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Inventory Management
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Inventory Management
                                    
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h6 className='text-start text-white'>Swlling Programs</h6>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    
                                    Fulfillment by Anaizon
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Anaizon Advertising
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Anaizon Worlwide
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Anaizon Business
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    More Programs
                                    
                                </li>
                            </ul>

                        </div>
                        <div className="col-3">
                            <h6 className='text-start text-white'>Anaizon for Brands</h6>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    
                                    Build an online store
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Tips for Brands on Anaizon
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Brand case studies
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Anaizon Brand Registry
                                    
                                </li>
                            </ul>

                        </div>
                        <div className="col-3">
                            <h6 className='text-start text-white'>Ecommerce Resource</h6>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    
                                    Seller University
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Anaizon
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Service Partner Network
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Anaizon Seller Events
                                    
                                </li>
                                <li className="nav-item">
                                    
                                    Seller Central Help
                                    
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <br />
                <div className="container mt-3">
                    <div className="d-flex">
                        <div style={{flex:"3"}}>
                            <div className="col-lg-6 col-md-12">
                                <h5 className="text-white text-start">News Letter Hebdomadaire</h5>
                                <div className="d-flex" style={{borderRadius:"25px",border:"1px solid white"}}>
                                    <input type="text" placeholder='Enter your email here' style={{color:"white", backgroundColor:"transparent",border:"none"}} className="form-control" />
                                    <button className="btn btn-warning" style={{borderRadius:"25px",width:"300px", padding:"10px"}}>Send</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12" style={{flex:"1"}}>
                            <h5 className="text-white text-start">Suivez nous sur:</h5>
                            <div className="col-12 row"  style={{borderRadius:"10px", width:"300px", padding:"5px",border:"1px solid white"}}>
                                <i className="fa fa-facebook-square col-3 text-white" style={{fontSize:"30px"}}></i>
                                <i className='fa fa-instagram col-3 text-white' style={{fontSize:"30px"}}></i>
                                <i className="fa fa-linkedin-square col-3 text-white" style={{fontSize:"30px"}}></i>
                                <i className="fa fa-twitter-square col-3 text-white" style={{fontSize:"30px"}}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div style={footer.footer}>
                    <div className="container-fluid">
                        <div className="d-flex">
                            <div className="col-lg-6 col-md-12">
                                <p className="text-white" style={{fontSize:"12px"}}>Copyright © 2021 Anaïzan. All rights reserved.</p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p className="text-white" style={{fontSize:"12px"}}>Confidentialité / Conditions d'utilisation / Préférences en matière de cookies / Protéger mes données personnelles / AdChoices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
const footer = {
    footer:{
        backgroundColor:"#1679ebe3",
        paddingTop: "2%",
        paddingRight:"4%"
    }
}