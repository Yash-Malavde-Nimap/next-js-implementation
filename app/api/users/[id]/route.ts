import { users } from "../route";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const user = users.find((item) => item.id === parseInt(id));
  console.log(user);
  return Response.json(user);
}
