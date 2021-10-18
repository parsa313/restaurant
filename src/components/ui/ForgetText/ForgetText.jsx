import React from 'react'
import styles from './forgettext.module.css'

function ForgetText() {
    return (
        <div className="text-center mt-5 d-flex align-items-center flex-column">

            <h2 className={styles.title}>Forgot Your Password ?</h2>
            <p className={styles.text}>dont worry just choose your new password carefully and hit the change button </p>
            <p className={styles.alert}>pay attention that you already should be loged in</p>
            
        </div>
    )
}

export default ForgetText
