import { Purchase } from "../../domain/Purchase"
import PurchaseSchema from "../../infra/database/schemas/PurchaseSchema"
import { PurchasesRepository } from "../PorchasesRepository"

export class MongoPurchasesRepository implements PurchasesRepository {
    async findById(id: string): Promise<any> {
        const purchase = await PurchaseSchema.findOne({
            id
        }).populate("educatorId")
        if (!purchase) {
            throw new Error("purchase not found")
        } else {
            return purchase
        }
    }
    async findOnePurchase(course_id: string, customer_id: string): Promise<any> {
        const purchase = await PurchaseSchema.findOne({
            "course.id": course_id,
            "customer.id": customer_id
        })
            .populate({
                path: "course",
                populate: "educator"
            })
            .populate("customer")
        return purchase
    }
    async findPurchases(page: Number, limit: Number): Promise<any> {
        let purchases = await PurchaseSchema.aggregate([
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
        ])
        purchases = purchases[0]
        purchases.metaData = { ...purchases.metaData[0], count: purchases.data.length }
        return purchases
    }
    async activePurchase(id: string): Promise<any> {
        await PurchaseSchema.findOneAndUpdate({
            id
        }, {
            $set: {
                isPayed: true
            }
        })
    }
    async save(purchase: Purchase): Promise<any> {
        const newPurchase = await PurchaseSchema.create(purchase)
        return newPurchase
    }
}