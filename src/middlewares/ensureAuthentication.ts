import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

export function ensureAuthentication(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).send({
            message: "Token is missing"
        })
    }
    const [schema, token] = authHeader.split(" ");
    if (!/^Bearer$/i.test(schema)) {
        return response.status(401).send({ message: "Token incorrect" }
        )
    }
    verify(token, "eduka@upunty.com", (err, decoded) => {
        if (err) return response.status(401).send({ message: "Token invalid" })
        request.user = decoded
        return next()
    })
}