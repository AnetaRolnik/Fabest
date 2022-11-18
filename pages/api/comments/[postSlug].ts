import type { NextApiRequest, NextApiResponse } from "next";

import {
  connectDatabase,
  insertDocument,
  getDocuments,
  countDocuments,
} from "../../../helpers/db-util";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const postSlug = req.query.postSlug;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }

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

    try {
      const result = await insertDocument(client, "comments", newComment);
    } catch (error) {
      client.close();
      res.status(500).json({ message: error });
      return;
    }

    res.status(201).json({ message: "OK", comment: newComment });
  }

  if (req.method === "GET") {
    const { limit, offset } = req.query;

    const nrLimit = Number(limit);
    const nrOffset = Number(offset);

    let documents;
    let postsNumber;

    try {
      documents = await getDocuments(
        client,
        "comments",
        { postSlug },
        nrLimit,
        nrOffset,
        { _id: -1 }
      );

      postsNumber = await countDocuments(client, "comments", postSlug);
    } catch (error) {
      client.close();
      res.status(500).json({ message: error });
      return;
    }

    res.status(200).json({ comments: documents, postsNumber: postsNumber });
  }

  client.close();
};

export default handler;
