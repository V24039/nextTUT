//cannot use both meta data and generateMetadata at once
export const metadata = {
    title: 'Profile pages',
    description: 'Generated by Next.js',
}

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <header style={{
                backgroundColor: "yellow",
                padding: "1rem"
            }}>
                <p>
                    Profile layout
                </p>
            </header>
            <body>{children}</body>
            <footer style={{
                backgroundColor: "ghostWhite",
                padding: "1rem"
            }}>
                <p>
                    Footer
                </p>
            </footer>
        </html>
    )
}
