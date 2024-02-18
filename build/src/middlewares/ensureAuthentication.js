"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthentication = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthentication(request, response, next) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).send({
            message: "Token is missing"
        });
    }
    const [schema, token] = authHeader.split(" ");
    if (!/^Bearer$/i.test(schema)) {
        return response.status(401).send({ message: "Token incorrect" });
    }
    jsonwebtoken_1.verify(token, "eduka@upunty.com", (err, decoded) => {
        if (err)
            return response.status(401).send({ message: "Token invalid" });
        request.user = decoded;
        return next();
    });
}
exports.ensureAuthentication = ensureAuthentication;
