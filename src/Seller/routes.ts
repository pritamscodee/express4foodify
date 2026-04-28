import { Router } from 'express';
import {
  CreateReq,
  DeleteReq,
  getReq,
  getReqBy_Id,
  updateReq,
} from './controller';
import { authenticateToken } from '../middleware/auth';

export const sr = Router();

sr.get('/get', getReq);
sr.post('/create', authenticateToken, CreateReq);
sr.post('/update', authenticateToken, updateReq);
sr.delete('/del', authenticateToken, DeleteReq);
sr.get('/get/:id', getReqBy_Id);
