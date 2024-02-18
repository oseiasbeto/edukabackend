"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoCourseRepository = void 0;
const CourseSchema_1 = __importDefault(require("../../infra/database/schemas/CourseSchema"));
const ModuleSchema_1 = __importDefault(require("../../infra/database/schemas/ModuleSchema"));
const UserSchema_1 = __importDefault(require("../../infra/database/schemas/UserSchema"));
class MongoCourseRepository {
    async findById(id) {
        const course = await CourseSchema_1.default.findOne({
            _id: id
        }).populate("educator");
        return course;
    }
    async findBySecondId(id) {
        const course = await CourseSchema_1.default.findOne({
            id: id
        }).populate("educator");
        return course;
    }
    async findByUser(user_id, page, limit) {
        const educator = await UserSchema_1.default.findOne({
            _id: user_id
        });
        let courses = await CourseSchema_1.default.aggregate([
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
        ]);
        courses = courses[0];
        courses.metaData = Object.assign(Object.assign({}, courses.metaData[0]), { count: courses.data.length });
        return courses;
    }
    async addNewStudent(course_id, student_id) {
        const course = await CourseSchema_1.default.findOne({
            _id: course_id
        });
        await course.updateOne({
            $push: {
                students: student_id
            }
        });
    }
    async deleteOne(id) {
        await CourseSchema_1.default.deleteOne({
            _id: id
        });
    }
    async updateOne(data) {
        console.log(data.emailSupport);
        await CourseSchema_1.default.updateOne({
            _id: data._id
        }, {
            $set: {
                title: data.title,
                idioma: data.idioma,
                category: data.category,
                emailSupport: data.emailSupport,
                description: data.description,
            }
        });
    }
    async save(course) {
        const newCourse = await CourseSchema_1.default.create(course);
        return newCourse;
    }
    async sendToAdmin(id) {
        const query = await CourseSchema_1.default.findByIdAndUpdate(id, {
            $set: {
                isPushed: true,
                role: "p"
            }
        });
        return query;
    }
    async getCoursesPushed(page, limit) {
        let courses = await CourseSchema_1.default.aggregate([
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
        ]);
        courses = courses[0];
        courses.metaData = Object.assign(Object.assign({}, courses.metaData[0]), { count: courses.data.length });
        return courses;
    }
    async getCoursesActive(page, limit, format) {
        let courses = await CourseSchema_1.default.aggregate([
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
        ]);
        courses = courses[0];
        courses.metaData = Object.assign(Object.assign({}, courses.metaData[0]), { count: courses.data.length });
        return courses;
    }
    async getCoursesPurchased(page, limit, id) {
        let courses = await CourseSchema_1.default.aggregate([
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
        ]);
        courses = courses[0];
        courses.metaData = Object.assign(Object.assign({}, courses.metaData[0]), { count: courses.data.length });
        return courses;
    }
    async searcCourses(page, limit, keywords) {
        let courses = await CourseSchema_1.default.aggregate([
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
        ]);
        courses = courses[0];
        courses.metaData = Object.assign(Object.assign({}, courses.metaData[0]), { count: courses.data.length });
        return courses;
    }
    async activeCourse(id) {
        await CourseSchema_1.default.findOneAndUpdate({
            _id: id
        }, {
            $set: {
                role: "a",
                isPushed: true
            }
        });
    }
    async classRoom(course_id) {
        const course = await CourseSchema_1.default.findOne({
            _id: course_id
        }).populate("educator");
        const modules = await ModuleSchema_1.default.find({
            courseId: course._id,
            isActive: true
        }).populate("lessons");
        const results = {
            course,
            modules
        };
        return results;
    }
}
exports.MongoCourseRepository = MongoCourseRepository;
