interface User {
  id: number;
  name: string;
}

interface Params {
  params: {
    id: string;
  };
}

// params : Params
const User = async ({params} : Params) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const user = await res.json();
  console.log(user)

  return (
    <div className="h-screen bg-black flex items-center justify-center space-x-2">
      <h2 className="text-xl text-neutral-400">
        {user.id === 0 ? "" : user.id}
      </h2>

      <p className="text-xl text-neutral-400">{user.name}</p>
    </div>
  );
};

export default User;
