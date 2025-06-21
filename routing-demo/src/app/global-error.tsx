"use client"

export default function ErrorBoundary() {
    // global-error is the last line of defence. This will handle errors occuring in layout.tsx aswell
    // error.tsx does not handle error.tsx file as the layout is Hierarchly higher then error.tsx
    return (
        <html>
            <body>
                <h1>Replaces the whole HTML component</h1>
            </body>
        </html>
    )
}