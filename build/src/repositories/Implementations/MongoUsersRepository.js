"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUsersRepository = void 0;
const UserSchema_1 = __importDefault(require("../../infra/database/schemas/UserSchema"));
class MongoUsersRepository {
    async findByEmail(email) {
        const user = await UserSchema_1.default.findOne({
            email
        })
            .select("+password +passwordResetExpires +passwordResetToken");
        return user;
    }
    async findById(_id) {
        const user = await UserSchema_1.default.findOne({
            _id
        })
            .select("+password +passwordResetExpires +passwordResetToken");
        return user;
    }
    async findByEmailConfirmToken(token) {
        const user = await UserSchema_1.default.findOne({
            emailConfirmToken: token
        });
        return user;
    }
    async findByPasswordResetToken(token) {
        const user = await UserSchema_1.default.findOne({
            passwordResetToken: token
        }).select("+password +passwordResetExpires +passwordResetToken");
        return user;
    }
    async save(user) {
        await UserSchema_1.default.create(user);
    }
    async checkAccount(user) {
        await UserSchema_1.default.findByIdAndUpdate(user._id, {
            $set: {
                isChecked: true
            }
        });
    }
    async setPasswordResetToken(user, token, timeExpires) {
        await UserSchema_1.default.findByIdAndUpdate(user._id, {
            $set: {
                passwordResetToken: token,
                passwordResetExpires: timeExpires
            }
        });
    }
    async setNewPassword(user, password) {
        await UserSchema_1.default.findByIdAndUpdate(user._id, {
            $set: {
                password
            }
        });
    }
    async setMoneyUser(user, ammount) {
        await UserSchema_1.default.findOneAndUpdate({
            _id: user._id
        }, {
            $set: {
                balance: (Number(user.balance) + Number(ammount))
            }
        });
    }
    async updateOne(data) {
        await UserSchema_1.default.updateOne({
            _id: data._id
        }, {
            $set: {
                avatar: data.avatar,
                username: data.username,
                social: data.social,
                description: data.description
            }
        });
    }
}
exports.MongoUsersRepository = MongoUsersRepository;
