import axios from 'axios'
import Head from 'next/head'
import React from 'react'
import Header from '../../components/header'

export async function getServerSideProps(context) {
    const { slug } = context.query;
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
