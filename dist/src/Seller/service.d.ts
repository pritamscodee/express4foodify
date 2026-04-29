interface NewProducts {
    id: number;
    name: string;
    price: string;
    description: string;
    category: string;
    imageUrl: string;
}
export declare function get_productsFromDb(): Promise<{
    id: number;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    category: string;
}[]>;
export declare function create_productsINDb(data: NewProducts): Promise<{
    id: number;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    category: string;
}[]>;
export declare function update_ProductsINDb(data: NewProducts): Promise<{
    id: number;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    category: string;
}[]>;
export declare function Delete_ProductsINDb(data: NewProducts): Promise<import("drizzle-orm/neon-http").NeonHttpQueryResult<never>>;
export declare function GetBy_idFrom_DB(requested_id: number): Promise<{
    id: number;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    category: string;
}[]>;
export {};
