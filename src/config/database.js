import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function database() {
  if (!client.isConnected()) await client.connect();
  return client.db(process.env.MONGO_DB);
}
