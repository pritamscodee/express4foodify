import type { Request, Response } from 'express';
import {
  create_productsINDb,
  Delete_ProductsINDb,
  get_productsFromDb,
  GetBy_idFrom_DB,
  update_ProductsINDb,
} from './service.js';
import {
  idParamSchema,
  createProductSchema,
  updateProductSchema,
} from '../validators/schemas.js';
import { z } from 'zod';

export async function getReq(req: Request, res: Response) {
  try {
    const get_allProducts = await get_productsFromDb();

    res.json({
      data: get_allProducts,
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error('error while getting req by Seller', err?.message);
    } else {
      console.error('Unknown Error Happend in req by seller controller');
    }
  }
}

export async function getReqBy_Id(req: Request, res: Response) {
  const id = Number(req.params.id);
  const getbyid = await GetBy_idFrom_DB(id);

  res.json({
    data: getbyid,
  });
}

export async function CreateReq(req: Request, res: Response) {
  try {
    const created_products = await create_productsINDb(req.body);

    res.json({
      data: created_products,
    });

    return created_products;
  } catch (error) {
    console.log('Error while creating products request -- > ', error);
  }
}

export async function updateReq(req: Request, res: Response) {
  const updatedProducts = await update_ProductsINDb(req.body);

  res.json({
    data: updatedProducts,
  });
}

export async function DeleteReq(req: Request, res: Response) {
  const deletedProducts = await Delete_ProductsINDb(req.body);
  res.json({
    data: deletedProducts,
  });
}
