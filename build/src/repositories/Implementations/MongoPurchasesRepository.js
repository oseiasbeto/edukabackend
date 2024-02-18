"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoPurchasesRepository = void 0;
const PurchaseSchema_1 = __importDefault(require("../../infra/database/schemas/PurchaseSchema"));
class MongoPurchasesRepository {
    async findById(id) {
        const purchase = await PurchaseSchema_1.default.findOne({
            id
        }).populate("educatorId");
        if (!purchase) {
            throw new Error("purchase not found");
        }
        else {
            return purchase;
        }
    }
    async findOnePurchase(course_id, customer_id) {
        const purchase = await PurchaseSchema_1.default.findOne({
            "course.id": course_id,
            "customer.id": customer_id
        })
            .populate({
            path: "course",
            populate: "educator"
        })
            .populate("customer");
        return purchase;
    }
    async findPurchases(page, limit) {
        let purchases = await PurchaseSchema_1.default.aggregate([
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
                                localField: 'course.educator',
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
        purchases = purchases[0];
        purchases.metaData = Object.assign(Object.assign({}, purchases.metaData[0]), { count: purchases.data.length });
        return purchases;
    }
    async activePurchase(id) {
        await PurchaseSchema_1.default.findOneAndUpdate({
            id
        }, {
            $set: {
                isPayed: true
            }
        });
    }
    async save(purchase) {
        const newPurchase = await PurchaseSchema_1.default.create(purchase);
        return newPurchase;
    }
}
exports.MongoPurchasesRepository = MongoPurchasesRepository;
