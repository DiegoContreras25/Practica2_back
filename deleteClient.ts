import { Request, Response } from "npm:express@4.18.2";
import clientModel from "./client.ts";

const deleteClient = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const client = await clientModel.findOneAndDelete({ name }).exec();
    if (!client) {
      res.status(404).send("client not found");
      return;
    }
    res.status(200).send("client deleted");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteClient;
