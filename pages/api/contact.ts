import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

import connectionString from "../../mongodb-data.json";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (!email || !email.includes("@") || !message || message.trim() === "") {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(connectionString.data);
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
    } catch (error) {
      client.close();
      res.status(500).json({ message: error });
      return;
    }

    client.close();

    res.status(201).json({ message: newMessage });
  }
};

export default handler;
