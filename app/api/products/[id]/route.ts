import { redirect } from "next/navigation";
import { products } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const product = products.find((item) => item.id === parseInt(id));
  if (!products.map((item) => item.id).includes(parseInt(id))) {
    redirect("/api/products");
  }
  return Response.json(product);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const body = await request.json();

  const productToChange = products.find((item) => item.id === parseInt(id));
  const index = products.findIndex((item) => item.id === parseInt(id));

  const newProduct = { ...productToChange, ...body };

  // console.log(newProduct);

  // products.map((product) =>
  //   product.id === parseInt(id) ? { ...product, body } : product
  // );

  products[index] = newProduct;

  return Response.json(newProduct);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  // const body = await request.json();

  // const productToDelete = products.find(
  //   (product) => product.id === parseInt(id)
  // );

  products.filter((item) => item.id !== parseInt(id));

  return Response.json({ message: "Data Deleted Successfully" });
}
