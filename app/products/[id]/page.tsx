interface Params {
  params: {
    id: string;
  };
}

// interface Product {
//   id: number;
//   name: string;
//   category: string;
// }

const Product = async ({ params }: Params) => {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await res.json();

  console.log(product)
  return (
    <div className="h-screen bg-black text-white flex justify-center items-center">
      <div className="flex flex-col justify-center space-y-4">
        <h2 className="text-3xl">Product : {product.id}</h2>
        <p className="text-xl text-neutral-400">Name : {product.name}</p>
        <p className="text-xl text-neutral-400">
          Category : {product.category}
        </p>
        <p className="text-xl text-neutral-400">Opened At : {new Date().toLocaleTimeString()}</p>

      </div>
    </div>
  );
};

export default Product;
