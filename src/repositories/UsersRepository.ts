import { User } from "../domain/User"

export interface UsersRepository {
    findByEmail(email: string): Promise<any>
    findById(_id: string): Promise<any>
    findByEmailConfirmToken(token: string): Promise<any>
    findByPasswordResetToken(token: string): Promise<any>
    updateOne(user: User): Promise<any>
    checkAccount(user: User): Promise<void>
    setPasswordResetToken(user: User, token: string, timeExpires: Date): Promise<void>
    setNewPassword(user: User, password: string): Promise<void>
    setMoneyUser(user: User, ammount: Number): Promise<void>
    save(user: User): Promise<void>
}