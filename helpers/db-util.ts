import { MongoClient } from "mongodb";

export const connectDatabase = async () => {
  const client = await MongoClient.connect(process.env.DATABASE_URL!);

  return client;
};

export const insertDocument = async (
  client: MongoClient,
  collection: string,
  document: {}
) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
};

export const getAllDocuments = async (
  client: MongoClient,
  collection: string,
  filter: {},
  sort: {}
) => {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
};
