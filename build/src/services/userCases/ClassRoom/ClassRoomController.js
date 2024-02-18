"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRoomController = void 0;
class ClassRoomController {
    constructor(classRoomUseCase) {
        this.classRoomUseCase = classRoomUseCase;
    }
    async handle(request, response) {
        const { course_id } = request.params;
        const { user } = request;
        try {
            const classRoom = await this.classRoomUseCase.execute({
                courseId: course_id,
                studentId: user._id
            });
            return response.status(200).json({
                classRoom
            });
        }
        catch (err) {
            return response.status(401).json({
                message: err.message
            });
        }
    }
}
exports.ClassRoomController = ClassRoomController;
