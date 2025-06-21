'use client'
import Link from "next/link"

export default function Home() {

    return (
        <>
            <h1>Welcome Home</h1>
            <div style={{
                display: "flex",
                gap: "10px"
            }}>
                <Link href="/register">Auth</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/articles">Articles</Link>
                <Link href="/articles/breaking-news-123?lang=en">Articles English</Link>
                <Link href="/articles/breaking-news-123?lang=fr">Articles French</Link>
                <Link href="/products">Products</Link>
            </div>
            <button onClick={() => {
                throw new Error("Error from main page")
            }}>
                Simulate Error
            </button>
        </>
    )
}