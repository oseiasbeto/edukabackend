import { GmailProvider } from "../../../providers/Implementations/GmailProvider";
import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { MongoEnrollmentsRepository } from "../../../repositories/Implementations/MongoEnrollmentRepository";
import { MongoPurchasesRepository } from "../../../repositories/Implementations/MongoPurchasesRepository";
import { MongoUsersRepository } from "../../../repositories/Implementations/MongoUsersRepository";
import { GenerateEnrollmentController } from "./GenerateEnrollmentController";
import { GenerateEnrollmentUseCase } from "./GenerateEnrollmentUseCase";

const mongoUsersRepository = new MongoUsersRepository()
const mongoCoursesRepository = new MongoCourseRepository()
const mongoEnrollmentsRepository = new MongoEnrollmentsRepository()
const mongoPurchasesRepository = new MongoPurchasesRepository()
const gmailProvider = new GmailProvider()

const generateEnrollmentUseCase = new GenerateEnrollmentUseCase(mongoUsersRepository, mongoCoursesRepository, mongoEnrollmentsRepository, mongoPurchasesRepository, gmailProvider)

const generateEnrollmentController = new GenerateEnrollmentController(generateEnrollmentUseCase)

export { generateEnrollmentController }