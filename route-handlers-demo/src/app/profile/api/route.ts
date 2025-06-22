import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeader = new Headers(request.headers)
  const theme = request.cookies.get("theme")

  const headersList = await headers();
  const cookieStore = await cookies()
  cookieStore.set("resultPerPage", "20")

  console.log("Headers form next", headersList.get("host"))
  console.log(requestHeader.get("host"))

  console.log("Cookie from Next", cookieStore.get("theme"))
  console.log(theme);
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    },
  });
}
