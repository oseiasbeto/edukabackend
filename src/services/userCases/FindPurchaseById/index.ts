import { MongoPurchasesRepository } from "../../../repositories/Implementations/MongoPurchasesRepository";
import { FindPurchaseByIdUseCase } from "./FindPurchaseByIdUseCase";
import { FindPurchaseByIdController } from "./FindPurchaseController";

const mongoPurchasesRepository = new MongoPurchasesRepository()
const findPurchaseByIdUseCase = new FindPurchaseByIdUseCase(mongoPurchasesRepository)
const findPurchaseByIdController = new FindPurchaseByIdController(findPurchaseByIdUseCase)

export { findPurchaseByIdController }