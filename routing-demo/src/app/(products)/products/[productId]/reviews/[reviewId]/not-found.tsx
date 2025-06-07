'use client'

import { usePathname } from "next/navigation"

export default function ReviewNotFound() { // does not accept props

    const pathName = usePathname() // as props are not accepted this can used to get the url
    const productId = pathName.split('/')[2]
    const reviewId = pathName.split('/')[4]

    return (
        <h1>
            Not found page specifically for review {reviewId} of product {productId}
        </h1>
    )
}