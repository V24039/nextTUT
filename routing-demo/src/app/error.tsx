'use client'

export default function PageError({error}:{error:Error}) {
    return (
        <h1>
            {error.message}
        </h1>
    )
}