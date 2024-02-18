import { GmailProvider } from "../../../providers/Implementations/GmailProvider";
import { MongoUsersRepository } from "../../../repositories/Implementations/MongoUsersRepository";
import { ForgotPasswordController } from "./ForgotPasswordController";
import { ForgotPasswordUseCase } from "./ForgotPasswordUseCase";

const mongoUsersRepository = new MongoUsersRepository()
const gmailProvider = new GmailProvider()

const forgotPasswordUseCase = new ForgotPasswordUseCase(mongoUsersRepository, gmailProvider)

const forgotPasswordController = new ForgotPasswordController(forgotPasswordUseCase)
export { forgotPasswordController }