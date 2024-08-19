import React from 'react';
import styles from './Text.module.css';
const Text = () => {
    return (
        <>
            <div className={styles.percent}>
                PERCENT
            </div>
            <div className={styles.percent_select}>
                도슨트를 선택하세요
            </div>
        </>
    );
};

export default Text;