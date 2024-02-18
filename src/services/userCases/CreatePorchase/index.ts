import { GmailProvider } from "../../../providers/Implementations/GmailProvider";
import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { MongoEnrollmentsRepository } from "../../../repositories/Implementations/MongoEnrollmentRepository";
import { MongoPurchasesRepository } from "../../../repositories/Implementations/MongoPurchasesRepository";
import { MongoUsersRepository } from "../../../repositories/Implementations/MongoUsersRepository";
import { CreatePurchaseController } from "./CreatePorchaseController";
import { CreatePurchaseUseCase } from "./CreatePorchaseUseCase";

const mongoCoursesRepository = new MongoCourseRepository()
const mongoPurchasesRepository = new MongoPurchasesRepository()
const mongoUsersRepository = new MongoUsersRepository()
const mongoEnrollmentsRepository = new MongoEnrollmentsRepository()
const gmailProvider = new GmailProvider()

const createPurchaseUseCase = new CreatePurchaseUseCase(mongoUsersRepository, mongoCoursesRepository, mongoPurchasesRepository, mongoEnrollmentsRepository, gmailProvider)
const createPurchaseController = new CreatePurchaseController(createPurchaseUseCase)

export { createPurchaseController }