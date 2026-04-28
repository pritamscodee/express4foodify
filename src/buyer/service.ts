import { eq, and } from 'drizzle-orm';
import { db } from '../db/db';
import { Cart, products } from '../db/schema';

export async function get_productsFromDb() {
  return await db.select().from(products);
}

export async function getallbyid(requested_id: number) {
  return await db.select().from(products).where(eq(products.id, requested_id));
}

export async function insertInto_Cart(id: number, userId: number) {
  const get_productbyId = await db
    .select()
    .from(products)
    .where(eq(products.id, id));

  if (get_productbyId.length === 0) {
    throw new Error('Product not found');
  }

  const product = get_productbyId[0];

  const insertedIntoCart = await db
    .insert(Cart)
    .values({
      userId: userId,
      productId: id,
      quantity: 1,
    })
    .returning();

  return insertedIntoCart[0];
}

export async function GetAllCarts(userId: number) {
  return await db.select().from(Cart).where(eq(Cart.userId, userId));
}

export async function Delete_Cart(id: number, userId: number) {
  return await db
    .delete(Cart)
    .where(and(eq(Cart.id, id), eq(Cart.userId, userId)));
}
