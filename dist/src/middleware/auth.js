import { verifyToken, extractTokenFromHeader } from '../utils/jwt.js';
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = extractTokenFromHeader(authHeader);
    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }
    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(403).json({ error: 'Invalid or expired token' });
    }
};
export const optionalAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = extractTokenFromHeader(authHeader);
    if (token) {
        try {
            const decoded = verifyToken(token);
            req.user = decoded;
        }
        catch (error) { }
    }
    next();
};
