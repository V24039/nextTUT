'use client'

import { usePathname } from "next/navigation"

export default function Notfound1234() { // does not accept props
    const pathName = usePathname() // as props are not accepted this can used to get the url

    return (
        <>
            <h1>
                Page to handle not found routes
            </h1>
            <h2>
                Pathname: {pathName}
            </h2>
        </>
    )
}