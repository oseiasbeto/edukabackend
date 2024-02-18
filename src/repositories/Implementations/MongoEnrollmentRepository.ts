import EnrollmentSchema from "../../infra/database/schemas/EnrollmentSchema";
import UserSchema from "../../infra/database/schemas/UserSchema";
import { EnrollmentsRepository } from "../EnrollmentsRepository";

export class MongoEnrollmentsRepository implements EnrollmentsRepository {
    async findByEnrollment(course_id: string, student_id: string): Promise<any> {
        const enrollment = await EnrollmentSchema.findOne({
            course: course_id,
            student: student_id
        })
        return enrollment
    }
    async findByEnrollmentsByStudentId(id: string, page: Number, limit: Number): Promise<any> {
        const student = await UserSchema.findOne({
            _id: id
        })
        let enrollments = await EnrollmentSchema.aggregate([
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
        ])
        enrollments = enrollments[0]
        enrollments.metaData = { ...enrollments.metaData[0], count: enrollments.data.length }
        return enrollments
    }
    async generate(student: string, course: string, purchase: string): Promise<void> {
        await EnrollmentSchema.create({
            student,
            course,
            purchase
        })
    }
}