export const users = [
  { id: 1, name: "Yash" },
  { id: 2, name: "Aiden" },
  { id: 3, name: "Ethan" },
  { id: 4, name: "Olivia" },
  { id: 5, name: "Mia" },
  { id: 6, name: "Lucas" },
  { id: 7, name: "Charlotte" },
  { id: 8, name: "Amelia" },
  { id: 9, name: "Liam" },
  { id: 10, name: "Emma" },
  { id: 11, name: "James" },
  { id: 12, name: "Isabella" },
  { id: 13, name: "Benjamin" },
  { id: 14, name: "Sophia" },
  { id: 15, name: "Jacob" },
  { id: 16, name: "Mason" },
  { id: 17, name: "Ava" },
  { id: 18, name: "William" },
  { id: 19, name: "Harper" },
  { id: 20, name: "Zoe" },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(request: Request) {
  const user = await request.json();

  const newUser = {
    id: users.length + 1,
    name: user.name,
  };

  users.push(newUser);

  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
