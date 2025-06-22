export const dynamic = "force-static"

export async function GET() {
  const categories = [
    { id: 1, name: "Item1" },
    { id: 2, name: "Item2" },
    { id: 3, name: "Item3" },
    { id: 4, name: "Item4" },
  ];

  return Response.json(categories)
}
