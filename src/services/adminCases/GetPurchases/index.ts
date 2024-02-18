import { MongoPurchasesRepository } from "../../../repositories/Implementations/MongoPurchasesRepository";
import { GetPurchasesController } from "./GetPurchasesController";
import { GetPurchasesUseCase } from "./GetPurchasesUseCase";

const mongoPurchasesRepository = new MongoPurchasesRepository()
const getPurchasesUseCase = new GetPurchasesUseCase(mongoPurchasesRepository)
const getPurchasesController = new GetPurchasesController(getPurchasesUseCase)

export { getPurchasesController }