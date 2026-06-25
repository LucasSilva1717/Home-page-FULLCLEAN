import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../lib/jwt';
import { logger } from '../config/logger';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verifyToken(token) as { id: string };
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    logger.warn({ path: req.path }, 'Tentativa de acesso com token inválido');
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}