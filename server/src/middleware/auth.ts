/**
 * This middleware function verifies the JWT token in the request headers.
 * If the token is valid, it adds the user data to the request object and calls the next middleware.
 * If the token is invalid or missing, it returns an appropriate error response.
 */

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || '') as JwtPayload;
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(403).json({ message: 'Failed to authenticate token' });
  }
};