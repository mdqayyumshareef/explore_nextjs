import React from 'react'
import Head from 'next/head'
import Header from '../components/header'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Explore Next | Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="container">
                <h1>Contact page</h1>
            </div>
        </>
    )
}
