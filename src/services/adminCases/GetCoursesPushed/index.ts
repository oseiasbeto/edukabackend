import { MongoCourseRepository } from "../../../repositories/Implementations/MongoCoursesRepository";
import { GetCoursesPushedController } from "./GetCoursePushedController";
import { GetCoursesPushedUseCase } from "./GetCoursePushedUseCase";

const mongoCourseRepository = new MongoCourseRepository()
const getCoursesPushedUseCase = new GetCoursesPushedUseCase(mongoCourseRepository)
const getCoursePushedController = new GetCoursesPushedController(getCoursesPushedUseCase)

export { getCoursePushedController }