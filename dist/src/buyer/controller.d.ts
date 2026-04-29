import type { Request, Response } from 'express';
import { AuthenticatedRequest } from '../middleware/auth.js';
export declare function getall_productstobuyer(req: Request, res: Response): Promise<void>;
export declare function getProductsbyid(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function createCartReq(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function Getall_Cart(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function CartDelReq(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
