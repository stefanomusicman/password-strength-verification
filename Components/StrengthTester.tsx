import React, { useState, useEffect, useRef } from 'react';
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

    //GAINS ACCESS TO STRENGTH METER IN ORDER TO APPEND CSS VARIABLE BELOW IN handleAll() FUNCTION
    const strengthRef: any = useRef();

    //CHECK LENGTH
    function checkLength(str: string): object | undefined {
        const length: number = str.length;

        if(length < 8) {
            return {
                message: 'Your password is too short',
                penalty: 40
            }
        }
    }

    //CHECK FOR MIN 1 UPPERCASE LETTER
    function checkUppercase(str: string): object | undefined {
        const regex: RegExp = /[A-Z]/;
        const result: boolean = regex.test(str);

        if(result === false) {
            return {
                message: 'Your password must have at least 1 Uppercase Character',
                penalty: 15
            }
        }
    }

    //CHECK FOR MIN 1 LOWERCASE LETTER
    function checkLowercase(str: string): object | undefined {
        const regex: RegExp = /[a-z]/;
        const result: boolean = regex.test(str);

        if(result === false) {
            return {
                message: 'Your password must have at least 1 Lowercase Character',
                penalty: 15
            }
        }
    }

    //CHECK FOR MIN 1 SPECIAL CHAR
    function checkSpecialChar(str: string): object | undefined {
        const regex: RegExp = /[~!@#$%^&*_+}{\?><]/;
        const result: boolean = regex.test(str);

        if(result === false) {
            return {
                message: 'Your password must have at least 1 Special Character',
                penalty: 15
            }
        }
    }

    //CHECK FOR MIN 1 NUMBER
    function checkForNumber(str: string): object | undefined {
        const regex: RegExp = /[0-9]/;
        const result: boolean = regex.test(str);

        if(result === false) {
            return {
                message: 'Your password must have at least 1 Number',
                penalty: 15
            }
        }
    }

    //CHECK EVERYTHING AND DETERMINE STRENGTH AND FEEBACK
    function handleAll(): void {
        const weaknesses: any[] = [];
        let strength: number = 100;
        weaknesses.push(checkLength(password));
        weaknesses.push(checkUppercase(password));
        weaknesses.push(checkLowercase(password));
        weaknesses.push(checkSpecialChar(password));
        weaknesses.push(checkForNumber(password));
        const filtered = weaknesses.filter(item => {
            if(item !== undefined) {
                return item
            }
        })
        setFeedback(filtered);
        filtered.forEach(item => {
            strength -= item.penalty
        });
        strengthRef.current.style.setProperty('--strength', strength);
    }

    //SET TO RUN EVERYTIME PASSWORD INPUT CHANGES
    useEffect(() => {
        handleAll()
    }, [password])

    return(
        <div className={styles.primary}>
            <div className={styles.strengthBar} ref={strengthRef} />
            <input placeholder='Enter Password Here' className={styles.inputBar} type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className={styles.feedback}>
                {feedback.map(item => <p key={Math.random()}>{item.message}</p>)}
            </div>
        </div>
    )
}

export default StrengthTester;