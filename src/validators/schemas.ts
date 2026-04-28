import { z } from 'zod';

export const userSchema = z.object({
  id: z.number().int().positive().optional(),
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(255, 'Password must be less than 255 characters'),
  role: z.enum(['user', 'seller', 'admin']).default('user'),
  createdAt: z.date().optional(),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const productSchema = z.object({
  id: z.number().int().positive().optional(),
  name: z
    .string()
    .min(1, 'Product name is required')
    .max(100, 'Name must be less than 100 characters'),
  imageUrl: z
    .string()
    .url('Invalid image URL')
    .max(500, 'Image URL must be less than 500 characters'),
  price: z
    .number()
    .positive('Price must be positive')
    .max(99999999.99, 'Price is too large'),
  description: z
    .string()
    .min(1, 'Description is required')
    .max(800, 'Description must be less than 800 characters'),
  category: z.string().min(1, 'Category is required'),
  stock: z.number().int().min(0, 'Stock must be non-negative').default(0),
  sellerId: z.number().int().positive('Seller ID must be positive'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const createProductSchema = productSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
export const updateProductSchema = productSchema
  .partial()
  .omit({ id: true, createdAt: true, updatedAt: true });

export const cartSchema = z.object({
  id: z.number().int().positive().optional(),
  userId: z.number().int().positive('User ID must be positive'),
  productId: z.number().int().positive('Product ID must be positive'),
  quantity: z.number().int().min(1, 'Quantity must be at least 1').default(1),
  createdAt: z.date().optional(),
});

export const addToCartSchema = cartSchema.omit({ id: true, createdAt: true });

export const orderSchema = z.object({
  id: z.number().int().positive().optional(),
  userId: z.number().int().positive('User ID must be positive'),
  totalAmount: z
    .number()
    .positive('Total amount must be positive')
    .max(99999999.99, 'Total amount is too large'),
  status: z
    .enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled'])
    .default('pending'),
  shippingAddress: z.string().min(1, 'Shipping address is required'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const createOrderSchema = orderSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const orderItemSchema = z.object({
  id: z.number().int().positive().optional(),
  orderId: z.number().int().positive('Order ID must be positive'),
  productId: z.number().int().positive('Product ID must be positive'),
  quantity: z.number().int().min(1, 'Quantity must be at least 1'),
  price: z
    .number()
    .positive('Price must be positive')
    .max(99999999.99, 'Price is too large'),
});

export const employeeSchema = z.object({
  id: z.number().int().positive().optional(),
  sellerId: z.number().int().positive('Seller ID must be positive'),
  email: z
    .string()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  role: z
    .string()
    .min(1, 'Role is required')
    .max(50, 'Role must be less than 50 characters')
    .default('employee'),
  permissions: z
    .string()
    .min(1, 'Permissions are required')
    .default('read,write'),
  createdAt: z.date().optional(),
});

export const createEmployeeSchema = employeeSchema.omit({
  id: true,
  createdAt: true,
});

export const idParamSchema = z.object({
  id: z.string().regex(/^\d+$/, 'ID must be a valid number').transform(Number),
});

export const successResponseSchema = z.object({
  message: z.string(),
  data: z.any().optional(),
});

export const errorResponseSchema = z.object({
  error: z.string(),
});

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
