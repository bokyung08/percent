import React from 'react';
import Text from './Text';
import styles from './Bgnd.module.css';
const Bgnd = () => {
    return (
        <div className={styles.bgnd}>
            Bgnd
            <Text>
            </Text>
            <img 
            style= 
            {{
                width: 80,
                height: 125, 
            }}
                src="https://www.dropbox.com/scl/fi/p4cnhom2jjwn703t3x3xr/3f7deb3c8bef7c1bdb473359773cac69-removebg-preview-1.png?rlkey=k88v200kc4ptu7rnlem32ccfb&st=rbigvm38&dl=0"
                alt="icon"
                />
        </div>
    );
};

export default Bgnd;