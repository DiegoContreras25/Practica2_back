import { Request, Response } from "npm:express@4.18.2";
import clientModel from "./client.ts";

const getClients = async (req: Request, res: Response) => {
  try {
    // Puedes obtener todos los productos en lugar de uno solo
    const clients = await clientModel.find().exec();

    if (!clients || clients.length === 0) {
      res.status(404).send("Productos no encontrados");
      return;
    }

    // Devuelve la lista de productos
    const clientData = clients.map((client) => ({
      name: client.name,
      cif: client.cif,
    }));

    res.status(200).json(clientData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default getClients;
