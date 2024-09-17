import { NextFunction, Request, Response } from "express";

export const rolesMiddleware = (roles: string[]) => (req: Request, res: Response, next: NextFunction) => {
    const role = req.query.role?.toString() || req.user?.role;
    return roles.includes(role) ? next() : res.sendStatus(403);
};
