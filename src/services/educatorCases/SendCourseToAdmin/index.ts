import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { SendCourseToAdminController } from "./SendCourseToAdminController";
import { SendCourseToAminUseCase } from "./SendCourseToAdminUseCase";

const mongoCourseRepository = new MongoCourseRepository()
const sendCourseToAdminUseCase = new SendCourseToAminUseCase(mongoCourseRepository)
const sendCourseToAdminController = new SendCourseToAdminController(sendCourseToAdminUseCase)

export { sendCourseToAdminController }