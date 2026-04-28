import type { Request, Response } from 'express';
import express, { urlencoded } from 'express';
import cors from 'cors';
import { sr } from './Seller/routes';
import { br } from './buyer/routes';
import { authRouter } from './auth/routes';

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://your-frontend-url.netlify.app'] 
      : ['http://localhost:5173'],
    credentials: true,
  })
);

app.use('/auth', authRouter);
app.use('/seller', sr);
app.use('/buyer', br);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Server is running',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
