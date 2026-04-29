import { db } from '../db/db.js';
import { products } from '../db/schema.js';
import { eq } from 'drizzle-orm';
export async function get_productsFromDb() {
    return await db.select().from(products);
}
export async function create_productsINDb(data) {
    const Req_products = await db.insert(products).values(data).returning();
    return Req_products;
}
export async function update_ProductsINDb(data) {
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
export async function Delete_ProductsINDb(data) {
    const pid = data.id;
    const deleted_products = await db
        .delete(products)
        .where(eq(products.id, pid));
    return deleted_products;
}
export async function GetBy_idFrom_DB(requested_id) {
    return await db.select().from(products).where(eq(products.id, requested_id));
}
