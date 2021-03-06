import Head from 'next/head'
import Header from '../components/header'

export default function Home() {
    return (
        <>
            <Head>
                <title>Explore Next</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="container">
                <h1>Welcome to home page</h1>
            </div>
        </>
    )
}
