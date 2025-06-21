import Link from "next/link"

export default function Products() {
    return (
        <>
            <h1>
                Product list
            </h1>
            <h2><Link href="/products/1">Product 1</Link></h2>
            <h2><Link href="/products/2">Product 2</Link></h2>
            <h2><Link href="/products/3" replace>Product 3 (Replace the whole page nav history instead of appending to it)</Link></h2>
        </>
    )
}