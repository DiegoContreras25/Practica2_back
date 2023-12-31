import { Request, Response } from "npm:express@4.18.2";
import clientModel from "./client.ts";

const addClient = async (req: Request, res: Response) => {
  try {
    const { name, cif } = req.body;
    if (!name || !cif) {
      res.status(400).send("Name and cif are required");
      return;
    }

    const alreadyExists = await clientModel.findOne({ name }).exec();
    if (alreadyExists) {
      res.status(400).send("client already exists");
      return;
    }

    const newClient = new clientModel({ name, cif });
    await newClient.save();

    res.status(200).send({
      name: newClient.name,
      cif: newClient.cif,
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addClient;
