import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { logger } from '../config/logger';

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {

  logger.error(
    { 
      err: error, 
      path: req.path, 
      method: req.method,
      body: req.body 
    }, 
    'Erro detectado na requisição'
  );

  if (error instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation error.',
      issues: error.format(),
    });
  }

  if (error.message === 'ValidationError') {
    return res.status(400).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    message: 'Internal server error.',
  });
}