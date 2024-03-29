"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classRoomController = void 0;
const MongoCoursesRepository_1 = require("../../../repositories/Implementations/MongoCoursesRepository");
const MongoEnrollmentRepository_1 = require("../../../repositories/Implementations/MongoEnrollmentRepository");
const ClassRoomController_1 = require("./ClassRoomController");
const ClassRoomUseCase_1 = require("./ClassRoomUseCase");
const mongoCoursesRepository = new MongoCoursesRepository_1.MongoCourseRepository();
const mongoEnrollmentsRepository = new MongoEnrollmentRepository_1.MongoEnrollmentsRepository();
const classRoomUseCase = new ClassRoomUseCase_1.ClassRoomUseCase(mongoCoursesRepository, mongoEnrollmentsRepository);
const classRoomController = new ClassRoomController_1.ClassRoomController(classRoomUseCase);
exports.classRoomController = classRoomController;
