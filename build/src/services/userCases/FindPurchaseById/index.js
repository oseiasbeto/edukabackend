"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPurchaseByIdController = void 0;
const MongoPurchasesRepository_1 = require("../../../repositories/Implementations/MongoPurchasesRepository");
const FindPurchaseByIdUseCase_1 = require("./FindPurchaseByIdUseCase");
const FindPurchaseController_1 = require("./FindPurchaseController");
const mongoPurchasesRepository = new MongoPurchasesRepository_1.MongoPurchasesRepository();
const findPurchaseByIdUseCase = new FindPurchaseByIdUseCase_1.FindPurchaseByIdUseCase(mongoPurchasesRepository);
const findPurchaseByIdController = new FindPurchaseController_1.FindPurchaseByIdController(findPurchaseByIdUseCase);
exports.findPurchaseByIdController = findPurchaseByIdController;
