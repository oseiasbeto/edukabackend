
export interface IMessage {
    from: string,
    to: string,
    subject: string,
    html: string
}

export interface IMailProvider {
    sendMail(message: IMessage): Promise<void>
}