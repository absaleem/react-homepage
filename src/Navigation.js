import React,{useState} from "react";

function Navigation({
    noofCartitem
}){

    const [counter,setCounter]=useState(0);    

    return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand"  >Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page"  >Home</a></li>
                        <li className="nav-item"><a className="nav-link">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown"   role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item"  >All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item"  >Popular Items</a></li>
                                <li><a className="dropdown-item"  >New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="button">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{noofCartitem}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
            
            </>
    
        );
}
export default Navigation;
