import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const comment = query
    ? comments.find((value) => value.text.includes(query))
    : comments;

  return Response.json(comment);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newComment = {
    id: comments.length + 1,
    ...body,
  };
  comments.push(newComment);
  return Response.json(newComment, { status: 201 });
}

// export async function DELETE(req: Request) {
//     const
// }
