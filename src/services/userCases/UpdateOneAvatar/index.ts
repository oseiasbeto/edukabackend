import { MongoUsersRepository } from "../../../repositories/Implementations/MongoUsersRepository";
import { UpdateOneAvatarController } from "./UpdateOneAvatarController";
import { UpdateOneAvatarUseCase } from "./UpdateOneAvatarUseCase";

const mongoUsersRepository = new MongoUsersRepository()
const updateOneAvatarUseCase = new UpdateOneAvatarUseCase(mongoUsersRepository)
const updateOneAvatarController = new UpdateOneAvatarController(updateOneAvatarUseCase)

export { updateOneAvatarController }