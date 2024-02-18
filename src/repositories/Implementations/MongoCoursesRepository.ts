import { Course } from "../../domain/Course";
import CourseSchema from "../../infra/database/schemas/CourseSchema";
import ModuleSchema from "../../infra/database/schemas/ModuleSchema";
import UserSchema from "../../infra/database/schemas/UserSchema";
import { CoursesRepository } from "../CoursesRepository";

export class MongoCourseRepository implements CoursesRepository {
    async findById(id: string): Promise<any> {
        const course = await CourseSchema.findOne({
            _id: id
        }).populate("educator")
        return course
    }
    async findBySecondId(id: string): Promise<any> {
        const course = await CourseSchema.findOne({
            id: id
        }).populate("educator")
        return course
    }
    async findByUser(user_id: string, page: Number, limit: Number): Promise<any> {
        const educator = await UserSchema.findOne({
            _id: user_id
        })
        let courses = await CourseSchema.aggregate([
            {
                $match: {
                    educator: educator._id
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
                                from: 'users',
                                localField: 'educator',
                                foreignField: '_id',
                                as: 'createdBy'
                            }
                        },
                        {
                            $unwind: '$createdBy'
                        }
                    ]
                }
            }
        ])
        courses = courses[0]
        courses.metaData = { ...courses.metaData[0], count: courses.data.length }
        return courses
    }
    async addNewStudent(course_id: string, student_id: string): Promise<any> {
        const course = await CourseSchema.findOne({
            _id: course_id
        })
        await course.updateOne({
            $push: {
                students: student_id
            }
        })
    }
    async deleteOne(id: string): Promise<void> {
        await CourseSchema.deleteOne({
            _id: id
        })
    }
    async updateOne(data: Course): Promise<void> {
        console.log(data.emailSupport)
        await CourseSchema.updateOne({
            _id: data._id
        }, {
            $set: {
                title: data.title,
                idioma: data.idioma,
                category: data.category,
                emailSupport: data.emailSupport,
                description: data.description,
            }
        })
    }
    async save(course: Course): Promise<any> {
        const newCourse = await CourseSchema.create(course)
        return newCourse
    }
    async sendToAdmin(id: string): Promise<any> {
        const query = await CourseSchema.findByIdAndUpdate(id, {
            $set: {
                isPushed: true,
                role: "p"
            }
        })
        return query
    }
    async getCoursesPushed(page: Number, limit: Number): Promise<any> {
        let courses = await CourseSchema.aggregate([
            {
                $match: {
                    $and: [
                        {
                            isPushed: true
                        },
                        {
                            role: "p"
                        }
                    ]
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
                                from: 'users',
                                localField: 'educator',
                                foreignField: '_id',
                                as: 'createdBy'
                            }
                        },
                        {
                            $unwind: '$createdBy'
                        }
                    ]
                }
            }
        ])
        courses = courses[0]
        courses.metaData = { ...courses.metaData[0], count: courses.data.length }
        return courses
    }
    async getCoursesActive(page: Number, limit: Number, format: String): Promise<any> {
        let courses = await CourseSchema.aggregate([
            {
                $match: {
                    $and: [
                        {
                            isPushed: true
                        },
                        {
                            role: "a"
                        },
                        {
                            format: format
                        }
                    ]
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
                                from: 'users',
                                localField: 'educator',
                                foreignField: '_id',
                                as: 'createdBy'
                            }
                        },
                        {
                            $unwind: '$createdBy'
                        }
                    ]
                }
            }
        ])
        courses = courses[0]
        courses.metaData = { ...courses.metaData[0], count: courses.data.length }
        return courses
    }
    async getCoursesPurchased(page: Number, limit: Number, id: string): Promise<any> {
        let courses = await CourseSchema.aggregate([
            {
                $match: {
                    $and: [
                        {
                            isPushed: true
                        },
                        {
                            role: "a"
                        },
                        {
                            students: id
                        }
                    ]
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
                                from: 'users',
                                localField: 'educator',
                                foreignField: '_id',
                                as: 'createdBy'
                            }
                        },
                        {
                            $unwind: '$createdBy'
                        }
                    ]
                }
            }
        ])
        courses = courses[0]
        courses.metaData = { ...courses.metaData[0], count: courses.data.length }
        return courses
    }
    async searcCourses(page: Number, limit: Number, keywords: string): Promise<any> {
        let courses = await CourseSchema.aggregate([
            {
                $match: {
                    $and: [
                        {
                            isPushed: true
                        },
                        {
                            role: "a"
                        },
                        {
                            tags: { $regex: keywords, $options: 'i' }
                        }
                    ]
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
                                from: 'users',
                                localField: 'educator',
                                foreignField: '_id',
                                as: 'createdBy'
                            }
                        },
                        {
                            $unwind: '$createdBy'
                        }
                    ]
                }
            }
        ])
        courses = courses[0]
        courses.metaData = { ...courses.metaData[0], count: courses.data.length }
        return courses
    }
    async activeCourse(id: string): Promise<any> {
        await CourseSchema.findOneAndUpdate({
            _id: id
        }, {
            $set: {
                role: "a",
                isPushed: true
            }
        })
    }
    async classRoom(course_id: string): Promise<any> {
        const course = await CourseSchema.findOne({
            _id: course_id
        }).populate("educator")
        const modules = await ModuleSchema.find({
            courseId: course._id,
            isActive: true
        }).populate("lessons")
        const results = {
            course,
            modules
        }
        return results
    }
}