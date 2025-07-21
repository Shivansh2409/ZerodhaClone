import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Menu = () => {
  // Initialize user state
  const [user, setUser] = useState("user");
  try {
    // Fetch user data from the backend
    axios.get("http://localhost:3000/dashboard/user", {withCredentials: true})
      .then(response => {
        const users = response.data;
        console.log("User data fetched:", users.name);
        setUser(users.name);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  } catch (error) {
    console.error("Error in axios request:", error);
  }
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [inProfileDropdownOpen, setInProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileClick = () => {
    setInProfileDropdownOpen((prev) => !prev);
  }

  const handleLogoutClick = () => {
    axios.get("http://localhost:3000/user/logout", {withCredentials: true})
      .then(() => {
        console.log("Logout successful");
        window.location.href = "http://localhost:3001"; // Redirect to the home page
      })
      .catch(error => {
        console.error("Error during logout:", error);
      });
    setInProfileDropdownOpen(false);
  }

  const menuClass="menu";
  const activeMenuClass="menu selected"; 
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to={"/"} onClick={()=> handleMenuClick(0)}>
            <p className={selectedMenu===0 ? activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to={"/orders"} onClick={()=> handleMenuClick(1)}>
            <p className={selectedMenu===1 ? activeMenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to={"/holdings"} onClick={()=> handleMenuClick(2)}>
            <p className={selectedMenu===2 ? activeMenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to={"/positions"} onClick={()=> handleMenuClick(3)}>
            <p className={selectedMenu===3 ? activeMenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to={"/funds"} onClick={()=> handleMenuClick(4)}>
            <p className={selectedMenu===4 ? activeMenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to={"/apps"} onClick={()=> handleMenuClick(5)}>
            <p className={selectedMenu===5 ? activeMenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar" onClick={handleProfileClick} style={{ cursor: "pointer" }}>ID</div>
          <p className="username" onClick={handleProfileClick} style={{ cursor: "pointer" }}>{user}</p>
          {inProfileDropdownOpen && (
            <div className="profile-dropdown" style={{
              position: "absolute",
              right: "20px",
              top: "60px",
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              zIndex: 1000,
              minWidth: "120px"
            }}>
              <ul style={{ listStyle: "none", margin: 0, padding: "10px 0" }}>
                
                <li onClick={handleLogoutClick} style={{ padding: "5px 15px", cursor: "pointer", color: "red" }}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
