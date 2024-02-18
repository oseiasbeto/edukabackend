import { NextFunction, Request, Response } from "express";
export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    console.log(request.user.role)
    if (request.user.role != 'admin') {
        return response.status(403).json()
    } else return next()
}