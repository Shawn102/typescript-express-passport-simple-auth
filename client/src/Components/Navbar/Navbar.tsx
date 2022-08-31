import React from 'react';
import axios from 'axios';
import styles from './Navbar.module.css';
import {Link, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const logout = () => {
        axios.get("http://localhost:5000/auth/logout", {withCredentials: true}).then((res) => {
            if(res.data === "done") {
                navigate("/login")
            }
        }).catch(() => {

        })
    }
  return (
    <div className={styles.navBarWrapper}>
        <ul className={styles.navBar}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li onClick={logout}>Logout</li>
        </ul>
    </div>
  )
}

export default Navbar;