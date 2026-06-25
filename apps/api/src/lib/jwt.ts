import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error('CONFIG ERROR: JWT_SECRET environment variable is missing.');
}

const secret = JWT_SECRET as string;

export function generateToken(payload: object) {
  return jwt.sign(payload, secret, { expiresIn: '1d' });
}

export function verifyToken(token: string) {
  return jwt.verify(token, secret);
}