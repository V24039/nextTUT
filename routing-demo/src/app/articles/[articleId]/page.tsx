"use client"
import Link from "next/link";
import { use } from "react";

// use client does not allow use of async
// export default async function NewsArticle({ params, searchParams }: {
export default function NewsArticle({ params, searchParams }: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang: string }>
}) {

    // cannot use await in client
    const { articleId } = use(params);
    const { lang = "en" } = use(searchParams);

    return (
        <div>
            <h1>News article {articleId}</h1>
            <p>Reading in language {lang}</p>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            </div>
        </div>
    )
}