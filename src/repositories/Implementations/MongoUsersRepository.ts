import { User } from "../../domain/User";
import UserSchema from "../../infra/database/schemas/UserSchema";

import { UsersRepository } from "../UsersRepository";

export class MongoUsersRepository implements UsersRepository {
    async findByEmail(email: string): Promise<any> {
        const user = await UserSchema.findOne({
            email
        })
            .select("+password +passwordResetExpires +passwordResetToken")
        return user
    }
    async findById(_id: string): Promise<any> {
        const user = await UserSchema.findOne({
            _id
        })
            .select("+password +passwordResetExpires +passwordResetToken")
        return user
    }
    async findByEmailConfirmToken(token: string): Promise<any> {
        const user = await UserSchema.findOne({
            emailConfirmToken: token
        })
        return user
    }
    async findByPasswordResetToken(token: string): Promise<any> {
        const user = await UserSchema.findOne({
            passwordResetToken: token
        }).select("+password +passwordResetExpires +passwordResetToken")
        return user
    }
    async save(user: User): Promise<void> {
        await UserSchema.create(user)
    }
    async checkAccount(user: User): Promise<void> {
        await UserSchema.findByIdAndUpdate(user._id, {
            $set: {
                isChecked: true
            }
        })
    }
    async setPasswordResetToken(user: User, token: string, timeExpires: Date): Promise<void> {
        await UserSchema.findByIdAndUpdate(user._id, {
            $set: {
                passwordResetToken: token,
                passwordResetExpires: timeExpires
            }
        })
    }
    async setNewPassword(user: User, password: string): Promise<void> {
        await UserSchema.findByIdAndUpdate(user._id, {
            $set: {
                password
            }
        })
    }
    async setMoneyUser(user: User, ammount: Number): Promise<void> {
        await UserSchema.findOneAndUpdate({
            _id: user._id
        }, {
            $set: {
                balance: (Number(user.balance) + Number(ammount))
            }
        })
    }
    async updateOne(data: User): Promise<void> {
        await UserSchema.updateOne({
            _id: data._id
        }, {
            $set: {
                avatar: data.avatar,
                username: data.username,
                social: data.social,
                description: data.description
            }
        })
    }
}