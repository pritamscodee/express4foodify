import { z } from 'zod';
export declare const userSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodDefault<z.ZodEnum<{
        user: "user";
        seller: "seller";
        admin: "admin";
    }>>;
    createdAt: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const productSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    imageUrl: z.ZodString;
    price: z.ZodNumber;
    description: z.ZodString;
    category: z.ZodString;
    stock: z.ZodDefault<z.ZodNumber>;
    sellerId: z.ZodNumber;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const createProductSchema: z.ZodObject<{
    name: z.ZodString;
    imageUrl: z.ZodString;
    price: z.ZodNumber;
    description: z.ZodString;
    category: z.ZodString;
    stock: z.ZodDefault<z.ZodNumber>;
    sellerId: z.ZodNumber;
}, z.core.$strip>;
export declare const updateProductSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    stock: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    sellerId: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const cartSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    userId: z.ZodNumber;
    productId: z.ZodNumber;
    quantity: z.ZodDefault<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const addToCartSchema: z.ZodObject<{
    userId: z.ZodNumber;
    productId: z.ZodNumber;
    quantity: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export declare const orderSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    userId: z.ZodNumber;
    totalAmount: z.ZodNumber;
    status: z.ZodDefault<z.ZodEnum<{
        pending: "pending";
        processing: "processing";
        shipped: "shipped";
        delivered: "delivered";
        cancelled: "cancelled";
    }>>;
    shippingAddress: z.ZodString;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const createOrderSchema: z.ZodObject<{
    userId: z.ZodNumber;
    totalAmount: z.ZodNumber;
    status: z.ZodDefault<z.ZodEnum<{
        pending: "pending";
        processing: "processing";
        shipped: "shipped";
        delivered: "delivered";
        cancelled: "cancelled";
    }>>;
    shippingAddress: z.ZodString;
}, z.core.$strip>;
export declare const orderItemSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    orderId: z.ZodNumber;
    productId: z.ZodNumber;
    quantity: z.ZodNumber;
    price: z.ZodNumber;
}, z.core.$strip>;
export declare const employeeSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    sellerId: z.ZodNumber;
    email: z.ZodString;
    name: z.ZodString;
    role: z.ZodDefault<z.ZodString>;
    permissions: z.ZodDefault<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const createEmployeeSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    role: z.ZodDefault<z.ZodString>;
    sellerId: z.ZodNumber;
    permissions: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
export declare const idParamSchema: z.ZodObject<{
    id: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
}, z.core.$strip>;
export declare const successResponseSchema: z.ZodObject<{
    message: z.ZodString;
    data: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const errorResponseSchema: z.ZodObject<{
    error: z.ZodString;
}, z.core.$strip>;
export type User = z.infer<typeof userSchema>;
export type Login = z.infer<typeof loginSchema>;
export type Product = z.infer<typeof productSchema>;
export type CreateProduct = z.infer<typeof createProductSchema>;
export type UpdateProduct = z.infer<typeof updateProductSchema>;
export type Cart = z.infer<typeof cartSchema>;
export type AddToCart = z.infer<typeof addToCartSchema>;
export type Order = z.infer<typeof orderSchema>;
export type CreateOrder = z.infer<typeof createOrderSchema>;
export type OrderItem = z.infer<typeof orderItemSchema>;
export type Employee = z.infer<typeof employeeSchema>;
export type CreateEmployee = z.infer<typeof createEmployeeSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
