import { Request, Response } from "npm:express@4.18.2";
import invoiceModel from "./invoice.ts";

const getInvoice = async (req: Request, res: Response) => {
  try {
    // Puedes obtener todos los productos en lugar de uno solo
    const { id } = req.params;
    const invoices = await invoiceModel.findById(id).exec();

    if (!invoices) {
      res.status(404).send("invoice no encontrados");
      return;
    }

    // Devuelve la lista de productos

    res.status(200).send({
      client: invoices.client,
      products: invoices.products,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default getInvoice;
