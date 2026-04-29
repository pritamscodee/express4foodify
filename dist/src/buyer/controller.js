import { get_productsFromDb, getallbyid, GetAllCarts, insertInto_Cart, Delete_Cart, } from './service.js';
import { idParamSchema } from '../validators/schemas.js';
import { z } from 'zod';
export async function getall_productstobuyer(req, res) {
    try {
        const get_allProducts = await get_productsFromDb();
        res.json({
            data: get_allProducts,
        });
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('error while getting req by Seller', err?.message);
        }
        else {
            console.error('Unknown Error Happend in req by seller controller');
        }
    }
}
export async function getProductsbyid(req, res) {
    try {
        const { id } = idParamSchema.parse(req.params);
        const getbyid = await getallbyid(id);
        res.json({
            data: getbyid,
        });
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                error: 'Invalid product id',
                details: error.issues,
            });
        }
        res.status(500).json({ error: 'Failed to get product' });
    }
}
export async function createCartReq(req, res) {
    let id;
    try {
        const validatedParams = idParamSchema.parse(req.params);
        id = validatedParams.id;
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                error: 'Invalid product id',
                details: error.issues,
            });
        }
        return res.status(400).json({ error: 'Invalid request parameters' });
    }
    if (!req.user) {
        return res.status(401).json({
            error: 'User not authenticated',
        });
    }
    try {
        const cartInsert = await insertInto_Cart(id, req.user.userId);
        res.json({
            message: 'Successfully added to cart',
            data: cartInsert,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Failed to add to cart' });
    }
}
export async function Getall_Cart(req, res) {
    if (!req.user) {
        return res.status(401).json({
            error: 'User not authenticated',
        });
    }
    try {
        const getallCart = await GetAllCarts(req.user.userId);
        res.json({
            cart_data: getallCart,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(500).json({ error: 'Failed to get cart items' });
    }
}
export async function CartDelReq(req, res) {
    let id;
    try {
        const validatedParams = idParamSchema.parse(req.params);
        id = validatedParams.id;
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                error: 'Invalid cart item id',
                details: error.issues,
            });
        }
        return res.status(400).json({ error: 'Invalid request parameters' });
    }
    if (!req.user) {
        return res.status(401).json({
            error: 'User not authenticated',
        });
    }
    try {
        const result = await Delete_Cart(id, req.user.userId);
        res.json({
            message: 'Cart item deleted successfully',
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(500).json({ error: 'Failed to delete cart item' });
    }
}
