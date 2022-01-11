import React from 'react'
import { Growbis } from './Growbis'
import logo from "../files/logo.png"
import { Request } from './Request'
import { Footers } from './Footers'

export const Header = () => {
    return (
        <div>
            {/* topnav */}
            <header className="text-white" style={header.header}>
                <div className="row container-fluid">
                    <div className="col-3 d-flex">
                        <div className="mr-5">&nbsp;&nbsp;WHISHLIST</div> &nbsp;&nbsp;   <div className=" ml-3" style={{color:'#6AB4FF'}}>PAINER</div> &nbsp;&nbsp;&nbsp;   <div className=" ml-3">MON COMPTE</div>
                    </div>
                    <div className="col-6">
                        Bienvenue Sur Votre Plateforme De Commerce en Ligm
                    </div>
                    <div className="col-3 row">
                        <i className='fa fa-instagram col' style={{fontSize:"20px"}}></i>
                        <i className="fa fa-youtube col" style={{fontSize:"20px"}}></i>
                        <i className="fa fa-facebook col" style={{fontSize:"20px"}}></i>
                        <i className="fa fa-linkedin col" style={{fontSize:"20px"}}></i>
                    </div>
                </div>
            </header>
            {/* navbar  */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top p-3">
                    <div className="container-fluid">
                        <p className="navbar-brand"><img src={logo} alt="logo" /></p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <p className="nav-link active" aria-current="page">Platform <i className="dropdown-toggle text-danger mt-1" role="button" data-bs-toggle="dropdown"></i> </p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link">Solution <i className="dropdown-toggle text-danger mt-1" role="button" data-bs-toggle="dropdown"></i> </p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link">Pricing  </p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link">Success Stories  </p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link ">Resources <i className="dropdown-toggle text-danger mt-1" role="button" data-bs-toggle="dropdown"></i> </p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link sell text-white">
                                        Start Selling
                                    </p>
                                </li>
                            </ul>
                            {/* <ul className="navbar-nav">
                                
                            </ul> */}
                        </div>
                    </div>
                </nav>
            <div className="header row">
                <div className="col-6 p-5">
                    <h1 className="text-center"><b className='d-flex p-5'>Why Sell on <p className='text-danger'> &nbsp;Anaizan</p></b></h1>
                    <p style={{width:"500px", marginTop:"-50px", marginBottom:"120px"}} className='text-start'>Anaizan.com makes ecommerce possible for sellers around the world, connecting you with new customers and the tools necessary to do business on a global scale.</p>
                </div>
                <div className="col im"></div>
                
            </div>
            <br />
             <Growbis />
             <Request />
             <Footers />
        </div>
    )
}

const header = {
    header:{
        backgroundColor:"#0000FF",
        padding: "1%",
    }
}