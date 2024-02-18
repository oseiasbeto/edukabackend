import { Purchase } from "../domain/Purchase";

export interface PurchasesRepository {
    findById(id: string): Promise<any>
    findOnePurchase(course_id: string, customer_id: string): Promise<any>
    findPurchases(page: Number, limit: Number): Promise<any>
    activePurchase(id: string): Promise<any>
    save(purchase: Purchase): Promise<any>
}