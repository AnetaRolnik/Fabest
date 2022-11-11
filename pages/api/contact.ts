import type { NextApiRequest, NextApiResponse } from "next";

import { connectDatabase, insertDocument } from "../../helpers/db-util";

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
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }

    try {
      const result = await insertDocument(client, "messages", newMessage);
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
