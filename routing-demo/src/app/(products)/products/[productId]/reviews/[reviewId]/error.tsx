'use client'

import { useRouter } from "next/navigation"
import { startTransition } from "react"

// child error boundary is show when present and takes precedence over parent error boundary
export default function ReviewErrorBoundary({ error, reset }:
    { error: Error, reset: () => void }
) {
    const router = useRouter()
    const reload = () => {
        startTransition(()=>{
            window.alert("This wont work bcoz the id is from the params, usefull when error is occured to due a API call")
            router.refresh()
            reset()
        })
    }
    return (
        <>
            <h1>Review Error boundary to handle any errors thrown</h1>
            <h2>{error?.message}</h2>
            <button onClick={reload}>Try again using reset from reset prop passed</button>
        </>
    )
}