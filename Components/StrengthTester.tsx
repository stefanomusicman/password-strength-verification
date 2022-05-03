import React, { useState } from 'react';
import styles from './StrengthTester.module.css';

const StrengthTester = () => {

    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState([]);

    return(
        <div className={styles.primary}>
            <div className={styles.strengthBar} />
            <input className={styles.inputBar} type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className={styles.feedback}>

            </div>
        </div>
    )
}

export default StrengthTester;