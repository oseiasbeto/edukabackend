import { MongoUsersRepository } from "../../../repositories/Implementations/MongoUsersRepository";
import { LoadSessionController } from "./LoadSessionController";
import { LoadSessionUseCase } from "./LoadSessionUseCase";

const mongoUsersRepository = new MongoUsersRepository()
const loadSessionUseCase = new LoadSessionUseCase(mongoUsersRepository)
const loadSessionController = new LoadSessionController(loadSessionUseCase)

export { loadSessionController }