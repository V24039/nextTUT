import { notFound } from "next/navigation"

export default async function ProductReview({ params }: {
    params: Promise<{ productId: string, reviewId: number }>
}) {

    const { productId, reviewId } = await params
    
    if (reviewId > 1000) {
        notFound() // function to route to not found page
    }
    
    return (
        <h2>Review {reviewId} for product {productId} </h2>
    )
}