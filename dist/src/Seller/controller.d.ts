import type { Request, Response } from 'express';
export declare function getReq(req: Request, res: Response): Promise<void>;
export declare function getReqBy_Id(req: Request, res: Response): Promise<void>;
export declare function CreateReq(req: Request, res: Response): Promise<{
    id: number;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    category: string;
}[] | undefined>;
export declare function updateReq(req: Request, res: Response): Promise<void>;
export declare function DeleteReq(req: Request, res: Response): Promise<void>;
