import { Router } from 'express';
import { createCartReq, Getall_Cart, getall_productstobuyer, getProductsbyid, CartDelReq, } from './controller.js';
import { authenticateToken } from '../middleware/auth.js';
export const br = Router();
br.get('/get', getall_productstobuyer);
br.get('/get/cart', authenticateToken, Getall_Cart);
br.get('/get/:id', getProductsbyid);
br.post('/post/cart/:id', authenticateToken, createCartReq);
br.delete('/del/cart/:id', authenticateToken, CartDelReq);
