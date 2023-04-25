import "./sidebar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import Button from '@mui/material/Button';
import { Outlet, Link, Routes, Route } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Inwards from "../Inwards/Inwards";
import { NavLink } from "react-router-dom";


// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {

  return (
    <>
  
    <div className="sidebar">
      <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
          </Link>

       
      </div>
      <hr />
      <div className="center">
        {/* <nav> */}
        <ul>
          <p className="title">MAIN</p>
          <li>
            <HomeOutlinedIcon className="icon"/>
            <span>Home</span>
          </li>
          <p className="title">SERVICE</p>
          <Link to="/Godowns" style={{ textDecoration: "none" }}>
            <li>
            <StoreIcon className="icon" />
              <span>Godwons</span>
            </li>
            </Link>
            <Link to="/employees" style={{ textDecoration: "none" }}>
            <li>
              
              <PersonOutlineIcon className="icon" />
              <span>Employees</span>
            </li>
            </Link>
            <p className="title">USEFUL</p>
            <Link to="/Inwards" style={{ textDecoration: "none" }}>
        
          <li>
            <CreditCardIcon className="icon" />
            <span>Inwards</span>


          </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>

          <Link to="/Returns" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Returns</span>
          </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Reports</span>
          </li>
          
         
         
          <p className="title">USER</p>
          
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
        {/* </nav> */}
        {/* <Button variant="contained" disableElevation>
        Disable elevation
      </Button> */}
      </div>
      
    </div>
    <Outlet />
   
    </>
  );
};

export default Sidebar;