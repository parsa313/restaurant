import React from 'react'
import styles from './button.module.css'
function Button(props) {
    return (
        <button onClick={props.onClick} className={`${styles.button} ${props.className}`} data-dismiss={props.dataDismiss || null}>

            {props.children}

        </button>
    )
}

export default Button
