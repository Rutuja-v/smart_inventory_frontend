import "./sidebar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";


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
        <ul>
          <p className="title">MAIN</p>
          <li>
            <HomeOutlinedIcon className="icon"/>
            <span>Home</span>
          </li>
          <p className="title">SERVICE</p>
          <Link to="./godowns" style={{ textDecoration: "none" }}>
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
        
          <li>
            <CreditCardIcon className="icon" />
            <span>Inwards</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Returns</span>
          </li>
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