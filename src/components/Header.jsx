import React from 'react'
import logo from "../files/logo.png"

export const Header = () => {
    return (
        <div>
            {/* topnav */}
            <header class="text-white" style={header.header}>
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
                <nav className="navbar navbar-expand-lg navbar-light bg-white p-3">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Platform <i className="dropdown-toggle text-danger mt-1" role="button" data-bs-toggle="dropdown"></i> </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Solution <i className="dropdown-toggle text-danger mt-1" role="button" data-bs-toggle="dropdown"></i> </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing  </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Success Stories  </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ">Resources <i className="dropdown-toggle text-danger mt-1" role="button" data-bs-toggle="dropdown"></i> </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link sell text-white">
                                        Start Selling
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            <div className="header row">
                <div className="col-6 p-5">
                    <h1 className="text-center">
                        <strong>Why Sell on <b className='text-danger'> Anaizan</b></strong>
                    </h1>
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    )
}

const header = {
    header:{
        backgroundColor:"#0000FF",
        padding: "1%",
    }
}