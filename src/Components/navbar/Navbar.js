import Button from "@mui/material/Button";
import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <button
          type="button"
          style={{"backgroundColor":"green",
            border: "1px solid black",
            padding: "5px 10px",
          }}
        >
         CREATE USER
        </button>
      </div>
    </div>
  );
};

export default Navbar;

