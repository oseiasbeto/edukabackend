import { MongoEnrollmentsRepository } from "../../../repositories/Implementations/MongoEnrollmentRepository";
import { GetMyEnrollmentsController } from "./GetMyEnrollmentsController";
import { GetMyEnrollmentsUseCase } from "./GetMyEnrollmentsUseCase";

const mongoEnrollmentsRepository = new MongoEnrollmentsRepository()
const getMyEnrollmentsUseCase = new GetMyEnrollmentsUseCase(mongoEnrollmentsRepository)
const getMyEnrollmentsController = new GetMyEnrollmentsController(getMyEnrollmentsUseCase)

export { getMyEnrollmentsController }