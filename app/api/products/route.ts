import { NextRequest } from "next/server";
import { products } from "./data";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers)
  // const theme = request.cookies.get("theme")

  // console.log(theme)
  // console.log(requestHeaders.get('Authorization'))

  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredProducts = query
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      )
    : products;
  return Response.json(
    filteredProducts
    //   ,{
    //   headers:{
    //     "Set-Cookie":"theme=dark"
    //   }
    // }
  );
}

export async function POST(request: Request) {
  const data = await request.json();
  products.push(data);
  return new Response(JSON.stringify(data), {
    status: 201,
  });
}
