import { Request, Response } from "npm:express@4.18.2";
import invoiceModel from "./invoice.ts";

const addInvoice = async (req: Request, res: Response) => {
  try {
    const { client, products } = req.body;
    if (!client || !products) {
      res.status(400).send("client y product are required");
      return;
    }

    const alreadyExists = await invoiceModel.findOne({ client }).exec();
    if (alreadyExists) {
      res.status(400).send("invoice already exists");
      return;
    }

    const newInvoice = new invoiceModel({ client, products });
    await newInvoice.save();

    res.status(200).send({
      client: newInvoice.client,
      products: newInvoice.products,
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addInvoice;
