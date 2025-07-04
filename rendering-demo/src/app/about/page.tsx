import { cookies } from "next/headers";

export default async function AboutPage() {

  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")
  console.log(theme)

  return (
    <>
      <h1>About page</h1>
      <p>{new Date().toLocaleTimeString()}</p>
    </>
  );
}
