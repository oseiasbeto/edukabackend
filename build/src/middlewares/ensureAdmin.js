"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAdmin = void 0;
function ensureAdmin(request, response, next) {
    console.log(request.user.role);
    if (request.user.role != 'admin') {
        return response.status(403).json();
    }
    else
        return next();
}
exports.ensureAdmin = ensureAdmin;
