import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Header from '../../components/header'

export async function getServerSideProps() {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = result.data;
    return { props: { data } }
}

export default function Posts({ data }) {
    return (
        <>
            <Head>
                <title>Explore Next | Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="container">
                <h1>Welcome to posts page</h1>
                {data.map((post) =>
                    <Post post={post} key={post.id} />
                )}
            </div>
        </>
    )
}

function Post({ post }) {

    const url = post.title.replace(/\s+/g, '-').toLowerCase();
    const link = `/posts/${url}-${post.id}`;

    return (
        <>
            <Link href="/posts/[slug]" as={link}>
                <a>
                    <div style={{
                        padding: '1.5rem 2rem',
                        border: '0.5px solid gray',
                        margin: '2rem 0 1rem',
                        cursor: 'pointer'
                    }}>
                        <h4 style={{
                            marginBottom: '1rem'
                        }}>
                            {post.title}
                        </h4>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'

                        }}>
                            <span>User Id: {post.userId}</span>
                            <span>Post Id: {post.id}</span>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    );
}
