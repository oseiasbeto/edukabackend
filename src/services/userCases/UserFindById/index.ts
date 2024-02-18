import { MongoUsersRepository } from "../../../repositories/Implementations/MongoUsersRepository";
import { UserFindByIdController } from "./UserFindByIdController";
import { UserFindByIdUseCase } from "./UserFindByIdUseCase";

const mongoUsersRepository = new MongoUsersRepository()
const userFindByIdUseCase = new UserFindByIdUseCase(mongoUsersRepository)
const userFindByIdController = new UserFindByIdController(userFindByIdUseCase)

export { userFindByIdController }