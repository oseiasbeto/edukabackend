import { IMailProvider, IMessage } from "../IMailProvider";

export class GmailProvider implements IMailProvider {
    async sendMail(message: IMessage): Promise<void> {
        console.log(message)
    }
}