import { Collection, Db, MongoClient } from 'mongodb'

//Models
class UserModel {
    id: string;
    name: string;
}


class MessageModel {
    id: string;
    text: string;
}


//Repostories
class RepositoryBase<T> {
    readonly collection: Collection


    constructor(db: Db, collectionName: string) {
        this.collection = db.collection(collectionName)
    }

    async loadById(id: string): Promise<T> {
        const entity = await this.collection.findOne({ _id: id })
        return entity
    }
    async loadAll(): Promise<T[]> {
        const list = await this.collection.find().toArray()
        return list
    }
}


class UserRepository extends RepositoryBase<UserModel> {

}
class MessageModelRepository extends RepositoryBase<UserModel>{ }


class LoginController {
    async login() {
        const client = await MongoClient.connect('mongodb://localhost:27017/dbManguinho')
        const repo = new UserRepository(client.db(), 'users')
        const user = await repo.loadById('5')
        user.name

    }
}