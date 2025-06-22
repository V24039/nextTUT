export const dynamic = "force-static" // for caching the data. It only works with get method
export const revalidate = 10 // seconds after which the cache should be revalidated

// caching won't be applied if working with header, cookies
export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString()
  })
}