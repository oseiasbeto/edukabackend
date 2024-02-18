import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { MongoEnrollmentsRepository } from "../../../repositories/Implementations/MongoEnrollmentRepository";
import { ClassRoomController } from "./ClassRoomController";
import { ClassRoomUseCase } from "./ClassRoomUseCase";

const mongoCoursesRepository = new MongoCourseRepository()
const mongoEnrollmentsRepository = new MongoEnrollmentsRepository()

const classRoomUseCase = new ClassRoomUseCase(mongoCoursesRepository, mongoEnrollmentsRepository)
const classRoomController = new ClassRoomController(classRoomUseCase)

export { classRoomController }