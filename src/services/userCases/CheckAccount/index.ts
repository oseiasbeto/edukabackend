import { MongoUsersRepository } from "../../../repositories/Implementations/MongoUsersRepository";
import { CheckAccountUseCase } from "./CheckAccounUseCase";
import { CheckAccountController } from "./CheckAccountControler";

const mongoUsersRepository = new MongoUsersRepository()
const checkAccountUseCase = new CheckAccountUseCase(mongoUsersRepository)
const checkAccountController = new CheckAccountController(checkAccountUseCase)

export { checkAccountController }