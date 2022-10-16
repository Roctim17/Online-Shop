import React from 'react';
import styles from '../Style/Footer.module.scss'

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
    return (
        <div>
          <div className={styles.footer}>&copy; {year} All Rights Reserved</div>;

        </div>
    );
};

export default Footer;