import React from 'react';
import styles from "../Style/auth.module.scss"
import loginImg from '../assets/login.png'

const Login = () => {
    return (
        <section className={`container ${styles.auth}`}>

            <div className={styles.img}>
                <img src={loginImg} alt="Login" />
            </div>
            <div className={styles.form}>

            </div>
        </section>
    );
};

export default Login;