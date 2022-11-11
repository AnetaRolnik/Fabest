import type { NextApiRequest, NextApiResponse } from "next";

import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
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
    let documents;

    try {
      documents = await getAllDocuments(
        client,
        "comments",
        { postSlug },
        { _id: -1 }
      );
    } catch (error) {
      client.close();
      res.status(500).json({ message: error });
      return;
    }

    res.status(200).json({ comments: documents });
  }

  client.close();
};

export default handler;
