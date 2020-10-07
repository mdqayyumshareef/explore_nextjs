import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../components/header'
import axios from 'axios'

export async function getServerSideProps(router) {
    const { slug } = router.query;
    const id = slug.split('-').pop();
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = result.data;
    return { props: { post: data } }
}

export default function PostDetails({ post }) {

    return (
        <>
            <Head>
                <title>Explore Next</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="container">
                <h1 style={{
                    marginBottom: '1rem'
                }}>
                    {post?.title}
                </h1>
                <p>
                    {post?.body}
                </p>
            </div>
        </>
    )
}
