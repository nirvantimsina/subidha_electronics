import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.LOCAL_URI || "";
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

let db = client.db("products");

export default db;