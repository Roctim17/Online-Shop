import React from 'react';
import styles from "../Style/Card.module.scss"

const Card = ({children, cardClass}) => {
    return (
        <div className={`${styles.card} {cardClass}`}>
            
            {children}
        </div>
    );
};

export default Card;