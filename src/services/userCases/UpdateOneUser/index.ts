import { MongoUsersRepository } from "../../../repositories/Implementations/MongoUsersRepository";
import { UpadateOneUserController } from "./UpadateOneUserController";
import { UpdateOneUserUseCase } from "./UpdateOneUserUseCase";

const mongoUsersRepository = new MongoUsersRepository()
const updateOneUserUseCase = new UpdateOneUserUseCase(mongoUsersRepository)
const updateOneUserController = new UpadateOneUserController(updateOneUserUseCase)

export { updateOneUserController }