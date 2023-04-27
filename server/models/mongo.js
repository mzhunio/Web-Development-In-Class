const { MongoClient, ObjectId  } = require('mongodb');

const url = "mongodb+srv://chopify:123password@cluster0.8rysnbi.mongodb.net/?retryWrites=true&w=majority";;
const DB_Name = process.env.MONGO_DB_NAME ?? 'chopify';

const client = new MongoClient(url);

async function connect() {
    const db = await client.connect();
    return db.db(DB_Name);
}

module.exports = {
    connect, ObjectId, DB_Name
}