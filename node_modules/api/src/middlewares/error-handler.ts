import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {

  if (error instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation error.',
      issues: error.format(),
    });
  }

  if (error instanceof Error) {
    return res.status(400).json({ 
      message: error.message 
    });
  }

  return res.status(500).json({ 
    message: 'Internal server error.' 
  });
}