export default async function ProductDetails({ params }: {
    params: Promise<{ productId: number }>
}) {
    const { productId } = await params
    return (
        <>
            <h2>Product details</h2>
            <h2>Product id {productId}</h2>
        </>
    )
}