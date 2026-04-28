import type { Request, Response } from 'express';
import { registerUser, loginUser } from './service';
import { userSchema, loginSchema } from '../validators/schemas';

export async function register(req: Request, res: Response) {
  try {
    const validatedData = userSchema.parse(req.body);
    const result = await registerUser(validatedData);

    let navigationUrl = '/buyer/foods';
    if (result.user.role === 'seller') {
      navigationUrl = '/seller/dashboard';
    }

    res.status(201).json({
      message: 'User registered successfully',
      data: {
        ...result,
        navigationUrl,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'User already exists') {
        return res.status(409).json({ error: error.message });
      }
      if (error.name === 'ZodError') {
        return res
          .status(400)
          .json({ error: 'Validation failed', details: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
    res.status(500).json({ error: 'Unknown error occurred' });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const validatedData = loginSchema.parse(req.body);
    const result = await loginUser(validatedData);

    res.json({
      message: 'Login successful',
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'Invalid credentials') {
        return res.status(401).json({ error: error.message });
      }
      if (error.name === 'ZodError') {
        return res
          .status(400)
          .json({ error: 'Validation failed', details: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
    res.status(500).json({ error: 'Unknown error occurred' });
  }
}
