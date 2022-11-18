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

export const getDocuments = async (
  client: MongoClient,
  collection: string,
  filter: {},
  limit: number,
  offset: number,
  sort: {}
) => {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .limit(limit)
    .skip(offset)
    .toArray();

  return documents;
};

export const countDocuments = async (
  client: MongoClient,
  collection: string,
  filter: string | string[] | undefined
) => {
  const db = client.db();

  const allDocuments = db.collection(collection);

  const postsNumber = await allDocuments.countDocuments({
    postSlug: filter,
  });

  return postsNumber;
};
