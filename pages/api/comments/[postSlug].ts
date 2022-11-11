import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import connectionString from "../../../mongodb-data.json";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const postSlug = req.query.postSlug;

  const client = await MongoClient.connect(connectionString.data);

  if (req.method === "POST") {
    const { author, comment } = req.body;

    if (!author || author.trim() === "" || !comment || comment.trim() === "") {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      author,
      comment,
      postSlug,
    };

    const db = client.db();

    await db.collection("comments").insertOne(newComment);

    res.status(201).json({ message: "OK", comment: newComment });
  }

  if (req.method === "GET") {
    const db = client.db();

    const documents = await db
      .collection("comments")
      .find({ postSlug })
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: documents });
  }

  client.close();
};

export default handler;
