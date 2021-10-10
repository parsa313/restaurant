import React from 'react'
import styles from './shopicon.module.css'

function Shopicon() {
    return (
        <div className={styles.iconcontainer}>
            <i class={`fas fa-shopping-cart fa-lg ${styles.icon}`}></i>
            <span className={styles.number}>2</span>
        </div>
    )
}

export default Shopicon