import React, { useState } from 'react';
import styles from "./Header.module.scss";
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";


const logo = (
    <div className={styles.logo}>
        <Link to="/">
            <h2>
                e<span>Shop</span>.
            </h2>
        </Link>
    </div>
);
const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");
const cart = (
    <span className={styles.cart}>
        <Link to="/cart">
            Cart
            <FaShoppingCart size={20} />
            <p>0</p>
        </Link>
    </span>
);

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    // const [displayName, setdisplayName] = useState("");
    // const [scrollPage, setScrollPage] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const hideMenu = () => {
        setShowMenu(false);
    };

    return (
        <header>
            <div className={styles.header}>
                {logo}
                <nav className={
                    showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
                }>

                    <div className={
                        showMenu
                            ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                            : `${styles["nav-wrapper"]}`
                    }
                        onClick={hideMenu}
                    ></div>
                        <ul onClick={hideMenu}>
                            <li className={styles["logo-mobile"]}>
                                {logo}
                                <FaTimes size={22} color="#fff" onClick={hideMenu} />
                            </li>
                            <li>

                                <Link to="/admin/home">
                                    <button className="--btn --btn-primary">Admin</button>
                                </Link>

                            </li>
                            <li>
                                <NavLink to="/" className={activeLink}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={activeLink}>
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                        <div className={styles["header-right"]} onClick={hideMenu}>
                            <span className={styles.links}>

                                <NavLink to="/login" className={activeLink}>
                                    Login
                                </NavLink>


                                <a href="#home" style={{ color: "#ff7722" }}>
                                    <FaUserCircle size={16} />
                                    Hi,
                                </a>


                                <NavLink to="/order-history" className={activeLink}>
                                    My Orders
                                </NavLink>


                                {/* <NavLink to="/" >
                                Logout
                            </NavLink> */}

                            </span>
                            {cart}
                        </div>
                    
                </nav>
                <div className={styles["menu-icon"]}>
                    {cart}
                    <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
                </div>
            </div>
        </header>
    );
};

export default Header;