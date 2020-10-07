import React from 'react'
import Head from 'next/head'
import Header from '../components/header'

export default function About() {
    return (
        <>
            <Head>
                <title>Explore Next | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="container">
                <h1>About page</h1>
            </div>
        </>
    )
}
