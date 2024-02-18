import { MongoUsersRepository } from "../../../repositories/Implementations/MongoUsersRepository";
import { ResetPasswordController } from "./ResetPasswordController";
import { ResetPasswordUseCase } from "./ResetPasswordUseCase";

const mongoUsersRepository = new MongoUsersRepository()
const resetPasswordUseCase = new ResetPasswordUseCase(mongoUsersRepository)
const resetPasswordController = new ResetPasswordController(resetPasswordUseCase)

export { resetPasswordController }