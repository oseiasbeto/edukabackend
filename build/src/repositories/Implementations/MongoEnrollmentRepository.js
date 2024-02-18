"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoEnrollmentsRepository = void 0;
const EnrollmentSchema_1 = __importDefault(require("../../infra/database/schemas/EnrollmentSchema"));
const UserSchema_1 = __importDefault(require("../../infra/database/schemas/UserSchema"));
class MongoEnrollmentsRepository {
    async findByEnrollment(course_id, student_id) {
        const enrollment = await EnrollmentSchema_1.default.findOne({
            course: course_id,
            student: student_id
        });
        return enrollment;
    }
    async findByEnrollmentsByStudentId(id, page, limit) {
        const student = await UserSchema_1.default.findOne({
            _id: id
        });
        let enrollments = await EnrollmentSchema_1.default.aggregate([
            {
                $match: {
                    student: student._id
                }
            },
            { $sort: { createdAt: -1 } },
            {
                $facet: {
                    metaData: [
                        {
                            $count: 'totalDocuments'
                        },
                        {
                            $addFields: {
                                currentPage: Number(page),
                                totalPages: { $ceil: { $divide: ["$totalDocuments", Number(limit)] } }
                            }
                        }
                    ],
                    data: [
                        {
                            $skip: (Number(page) - 1) * Number(limit)
                        },
                        {
                            $limit: Number(limit)
                        },
                        {
                            $lookup: {
                                from: 'courses',
                                localField: 'course',
                                foreignField: '_id',
                                as: 'cours'
                            }
                        },
                        {
                            $unwind: '$cours'
                        }
                    ]
                }
            }
        ]);
        enrollments = enrollments[0];
        enrollments.metaData = Object.assign(Object.assign({}, enrollments.metaData[0]), { count: enrollments.data.length });
        return enrollments;
    }
    async generate(student, course, purchase) {
        await EnrollmentSchema_1.default.create({
            student,
            course,
            purchase
        });
    }
}
exports.MongoEnrollmentsRepository = MongoEnrollmentsRepository;
