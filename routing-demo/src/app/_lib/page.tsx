export default function PrivateRoute() {
    return (
        <>
            <h1>
                This cannot accessed from routes as adding an underscore before the folder make it private and not accessible
            </h1>
            <ul>
                Ways to make folder or file private and not accessible form routing
                <li>
                    Having folder outside app folder
                </li>
                <li>
                    Folders with no page.tsx
                </li>
                <li>
                    Appending underscore at start of the folder to make it private
                </li>
            </ul>
            <h2>
                can be used for writing utils file or common components
            </h2>
        </>
    )
}