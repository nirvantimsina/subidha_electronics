import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.LOCAL_URI || "mongodb://127.0.0.1:27017/subidha-db";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    // connect the client to the server
    await client.connect();
    // send a ping to confirm connection
    await client.db("admin").command({ping: 1 });
    console.log(
        "The database has been pinged. Successful Connection to MongoDB!"
    );
} catch (err) {
    console.error(err);
}

let db = client.db("subidha-db");

export default db;