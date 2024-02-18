import { GmailProvider } from "../../../providers/Implementations/GmailProvider";
import { MongoUsersRepository } from "../../../repositories/Implementations/MongoUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mongoUsersRepository = new MongoUsersRepository()
const gmailProvider = new GmailProvider()
const createUserUseCase = new CreateUserUseCase(mongoUsersRepository, gmailProvider)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }