import React, { useState, useEffect } from 'react';
import styles from './StrengthTester.module.css';

// Criteria for password checks
// 1. Length must be minimum 8 Characters long - Penalty: 40%
// 2. Must have at least 1 Capital Letter - Penalty: 15%
// 3. Must have at least 1 Lowercase letter - Penalty: 15%
// 4. Must have at least 1 number - Penalty: 15%
// 5. Must have at least 1 special character "~!@#$%^&*()_+}{\?><" - Penalty: 15%

const StrengthTester = () => {

    const [password, setPassword] = useState<string>('');
    const [feedback, setFeedback] = useState<any[]>([]);

    //CHECK LENGTH
    function checkLength(str: string): any {
        const length: number = str.length;

        if(length < 8) {
            return {
                message: 'Your password is too short',
                penalty: 40
            }
        }
    }
    const lengthResult = checkLength(password);

    //CHECK FOR MIN 1 UPPERCASE LETTER
    function checkUppercase(str: string): any {
        const regex = /[A-Z]/;
        const result = regex.test(str);

        if(result === false) {
            return {
                message: 'Your password must have at least 1 Uppercase Character',
                penalty: 15
            }
        }
    }
    const upperResult = checkUppercase(password);

    //CHECK FOR MIN 1 LOWERCASE LETTER
    function checkLowercase(str: string): any {
        const regex = /[a-z]/;
        const result = regex.test(str);

        if(result === false) {
            return {
                message: 'Your password must have at least 1 Lowercase Character',
                penalty: 15
            }
        }
    }
    const lowerResult = checkLowercase(password);

    //CHECK FOR MIN 1 SPECIAL CHAR
    function checkSpecialChar(str: string): any {
        const regex = /[~!@#$%^&*_+}{\?><]/;
        const result = regex.test(str);

        if(result === false) {
            return {
                message: 'Your password must have at least 1 Special Character',
                penalty: 15
            }
        }
    }
    const specialResult = checkSpecialChar(password);

    //CHECK FOR MIN 1 NUMBER
    function checkForNumber(str: string): any {
        const regex = /[0-9]/;
        const result = regex.test(str);

        if(result === false) {
            return {
                message: 'Your password must have at least 1 Number',
                penalty: 15
            }
        }
    }
    const numberResult = checkForNumber(password);

    function handleAll(): void {
        const weaknesses: any[] = []
        weaknesses.push(lengthResult);
        weaknesses.push(upperResult);
        weaknesses.push(lowerResult);
        weaknesses.push(specialResult);
        weaknesses.push(numberResult);
        setFeedback(weaknesses);
    }

    useEffect(() => {
        handleAll()
        console.log(feedback);
    }, [password])

    return(
        <div className={styles.primary}>
            <div className={styles.strengthBar} />
            <input className={styles.inputBar} type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className={styles.feedback}>
                {/* {feedback.map(item => )} */}
            </div>
        </div>
    )
}

export default StrengthTester;