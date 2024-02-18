"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userCases_routes_1 = __importDefault(require("./services/userCases/userCases.routes"));
const adminCases_routes_1 = __importDefault(require("./services/adminCases/adminCases.routes"));
const educatorCases_routes_1 = __importDefault(require("./services/educatorCases/educatorCases.routes"));
const router = express_1.Router();
exports.router = router;
router.use(userCases_routes_1.default);
router.use(educatorCases_routes_1.default);
router.use(adminCases_routes_1.default);
