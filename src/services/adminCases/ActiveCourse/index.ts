import { GmailProvider } from "../../../providers/Implementations/GmailProvider";
import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { MongoUsersRepository } from "../../../repositories/Implementations/MongoUsersRepository";
import { ActivePurchaseController } from "./ActiveCourseController";
import { ActivePurchaseUseCase } from "./ActiveCourseUseCase";

const mongoUsersRepository = new MongoUsersRepository()
const mongoCoursesRepository = new MongoCourseRepository()
const gmailProvider = new GmailProvider()

const activeCourseUseCase = new ActivePurchaseUseCase(mongoUsersRepository, mongoCoursesRepository, gmailProvider)

const activeCourseController = new ActivePurchaseController(activeCourseUseCase)

export { activeCourseController }