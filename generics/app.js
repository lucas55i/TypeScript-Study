"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
//Models
class UserModel {
}
class MessageModel {
}
//Repostories
class RepositoryBase {
    constructor(db, collectionName) {
        this.collection = db.collection(collectionName);
    }
    async loadById(id) {
        const entity = await this.collection.findOne({ _id: id });
        return entity;
    }
    async loadAll() {
        const list = await this.collection.find().toArray();
        return list;
    }
}
class UserRepository extends RepositoryBase {
}
class MessageModelRepository extends RepositoryBase {
}
class LoginController {
    async login() {
        const client = await mongodb_1.MongoClient.connect('mongodb://localhost:27017/dbManguinho');
        const repo = new UserRepository(client.db(), 'users');
        const user = await repo.loadById('5');
        user.name;
    }
}
