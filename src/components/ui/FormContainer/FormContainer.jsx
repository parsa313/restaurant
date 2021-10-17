import React from 'react'
import styles from './formcontainer.module.css'

function FormContainer(props) {
    return (
        <div className={styles["form-container"]}>

            {props.children}
        </div>
    )
}

export default FormContainer
