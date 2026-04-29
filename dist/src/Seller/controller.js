import { create_productsINDb, Delete_ProductsINDb, get_productsFromDb, GetBy_idFrom_DB, update_ProductsINDb, } from './service.js';
export async function getReq(req, res) {
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
export async function getReqBy_Id(req, res) {
    const id = Number(req.params.id);
    const getbyid = await GetBy_idFrom_DB(id);
    res.json({
        data: getbyid,
    });
}
export async function CreateReq(req, res) {
    try {
        const created_products = await create_productsINDb(req.body);
        res.json({
            data: created_products,
        });
        return created_products;
    }
    catch (error) {
        console.log('Error while creating products request -- > ', error);
    }
}
export async function updateReq(req, res) {
    const updatedProducts = await update_ProductsINDb(req.body);
    res.json({
        data: updatedProducts,
    });
}
export async function DeleteReq(req, res) {
    const deletedProducts = await Delete_ProductsINDb(req.body);
    res.json({
        data: deletedProducts,
    });
}
