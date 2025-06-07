import React from "react";

export default function ProductLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            {children}
            <h2>Featured products (from layout file only for product page)</h2>
        </>
    )
}