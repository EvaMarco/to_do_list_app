import React from 'react';
import styles from "./header.module.css"
const Header = () => {
    return (
        <header className={styles.HeaderComponent}>
            <h1 className={styles.HeaderTitle}>To Do List</h1>
        </header>
    );
}

export default Header;