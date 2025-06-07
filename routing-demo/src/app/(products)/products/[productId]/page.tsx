import { Metadata } from "next"

type Props = {
    params: Promise<{ productId: number }>
}

// cannot use both meta data and generateMetadata at once
// cannot be used with client components
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId
    return {
        title: `Product ${id}`
    }
}

export default async function ProductDetails({ params }: Props) {
    const { productId } = await params
    return (
        <>
            <h2>Product details</h2>
            <h2>Product id {productId}</h2>
        </>
    )
}