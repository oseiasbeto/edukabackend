import mongoose from 'mongoose'

export class MongoDb {
    async connect(): Promise<void> {
        const connection = await mongoose.connect("mongodb+srv://oseiasbetodev:ARICLENES22@cluster0.4raxki7.mongodb.net/edukaafrica?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log(`MongoDB connected: ${connection.connection.host}`)
    }
}