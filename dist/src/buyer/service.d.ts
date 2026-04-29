export declare function get_productsFromDb(): Promise<{
    id: number;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    category: string;
}[]>;
export declare function getallbyid(requested_id: number): Promise<{
    id: number;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    category: string;
}[]>;
export declare function insertInto_Cart(id: number, userId: number): Promise<{
    id: number;
    createdAt: Date | null;
    userId: number;
    productId: number;
    quantity: number;
}>;
export declare function GetAllCarts(userId: number): Promise<{
    id: number;
    userId: number;
    productId: number;
    quantity: number;
    createdAt: Date | null;
}[]>;
export declare function Delete_Cart(id: number, userId: number): Promise<import("drizzle-orm/neon-http").NeonHttpQueryResult<never>>;
