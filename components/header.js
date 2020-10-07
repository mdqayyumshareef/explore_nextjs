import React from 'react'
import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
            <nav>
                <Link href="/posts">
                    <a className={styles.navLink}>Posts</a>
                </Link>
                <Link href="/about">
                    <a className={styles.navLink}>About</a>
                </Link>
                <Link href="/contact">
                    <a className={styles.navLink}>Contact</a>
                </Link>
            </nav>
        </header>
    )
}
