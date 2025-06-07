export default async function Docs({ params }: {
    params: Promise<{ slug: string[] }> // name should match folder name
}) {

    //docs/[..slug] => /docs gives not found error
    //docs/[[..slug]] => /docs can be accessed

    const { slug } = await params // array represents the route paths

    // example docs/feature1/concept1 => ["feature1", "feature2"]

    if (slug?.length === 2) {
        return (
            <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>
        )
    }

    return (
        <h1>
            Document folder for /docs only
        </h1>
    )
}