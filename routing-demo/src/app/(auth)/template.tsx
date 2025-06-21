"use client"

import { useState } from "react"

export default function AuthTemplate({
    children,
}: {
    children: React.ReactNode
}) {
    const [tempState, setTempState] = useState("")// UI state re-renders for each page change

    return (
        <>
            <label htmlFor="template">Template</label>
            <input id="template" type="text" onChange={(e) => setTempState(e.target.value)} value={tempState}/>
            {children}
        </>
    )
}