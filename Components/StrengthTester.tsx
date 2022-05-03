import styles from './StrengthTester.module.css';

const StrengthTester = () => {
    return(
        <div className={styles.primary}>
            <div className={styles.strengthBar}>
                <div className={styles.filler}/>
            </div>
            <input className={styles.inputBar} type='text'/>
            <div className={styles.feedback}>

            </div>
        </div>
    )
}

export default StrengthTester;