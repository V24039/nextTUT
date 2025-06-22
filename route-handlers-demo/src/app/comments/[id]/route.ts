import { comments } from "../data";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const comment = comments.find((value) => value.id.toString() === id);

  return Response.json(comment, {
    status: 200,
  });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const index = comments.findIndex((value) => value.id.toString() === id);
  const deletedComment = comments[index];
  comments.splice(index, 1);

  return Response.json(deletedComment, {
    status: 202,
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex((value) => value.id === parseInt(id));
  comments[index].text = text;

  return Response.json(comments[index]);
}
