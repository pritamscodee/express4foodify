import type { Request, Response } from 'express';
import { db } from '../db/db';
import { products } from '../db/schema';
import { eq } from 'drizzle-orm';

interface NewProducts {
  id: number;
  name: string;
  price: string;
  description: string;
  category: string;
  imageUrl: string;
}

export async function get_productsFromDb() {
  return await db.select().from(products);
}

export async function create_productsINDb(data: NewProducts) {
  const Req_products = await db.insert(products).values(data).returning();

  return Req_products;
}

export async function update_ProductsINDb(data: NewProducts) {
  if (!data.id) {
    throw new Error('Product id is required for update');
  }
  const updated_Products = await db
    .update(products)
    .set({
      name: data.name,
      price: data.price,
      category: data.category,
      description: data.description,
      imageUrl: data.imageUrl,
    })
    .where(eq(products.id, data.id))
    .returning();

  return updated_Products;
}

export async function Delete_ProductsINDb(data: NewProducts) {
  const pid = data.id;
  const deleted_products = await db
    .delete(products)
    .where(eq(products.id, pid));

  return deleted_products;
}

export async function GetBy_idFrom_DB(requested_id: number) {
  return await db.select().from(products).where(eq(products.id, requested_id));
}
