"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userFindByIdController = void 0;
const MongoUsersRepository_1 = require("../../../repositories/Implementations/MongoUsersRepository");
const UserFindByIdController_1 = require("./UserFindByIdController");
const UserFindByIdUseCase_1 = require("./UserFindByIdUseCase");
const mongoUsersRepository = new MongoUsersRepository_1.MongoUsersRepository();
const userFindByIdUseCase = new UserFindByIdUseCase_1.UserFindByIdUseCase(mongoUsersRepository);
const userFindByIdController = new UserFindByIdController_1.UserFindByIdController(userFindByIdUseCase);
exports.userFindByIdController = userFindByIdController;
