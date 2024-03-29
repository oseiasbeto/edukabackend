"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordController = void 0;
const MongoUsersRepository_1 = require("../../../repositories/Implementations/MongoUsersRepository");
const ResetPasswordController_1 = require("./ResetPasswordController");
const ResetPasswordUseCase_1 = require("./ResetPasswordUseCase");
const mongoUsersRepository = new MongoUsersRepository_1.MongoUsersRepository();
const resetPasswordUseCase = new ResetPasswordUseCase_1.ResetPasswordUseCase(mongoUsersRepository);
const resetPasswordController = new ResetPasswordController_1.ResetPasswordController(resetPasswordUseCase);
exports.resetPasswordController = resetPasswordController;
