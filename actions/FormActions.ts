"use server";
import { revalidatePath } from "next/cache";

export async function addProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const category = formData.get("category") as string;

  if (name !== "" || category !== "") {
    const payload = {
      id: Math.floor(Math.random() * 100000),
      name,
      category,
    };

    await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    revalidatePath("/products");
  }
}

// export async function deleteProduct(id:number) {
//   console.log(id);
// }
