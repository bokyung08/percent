import React from 'react';
import styles from './Rectangle.module.css';

const Rectangle = ({children}) => {
    return (
        <div className={styles.rectangle}>{children}</div>
    );
};

export default Rectangle;