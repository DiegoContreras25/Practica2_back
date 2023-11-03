import { Request, Response } from "npm:express@4.18.2";
import productsModel from "./products.ts";

const getProducts = async (req: Request, res: Response) => {
  try {
    // Puedes obtener todos los productos en lugar de uno solo
    const products = await productsModel.find().exec();

    if (!products || products.length === 0) {
      res.status(404).send("Productos no encontrados");
      return;
    }

    // Devuelve la lista de productos
    const productData = products.map((product) => ({
      name: product.name,
      price: product.price,
    }));

    res.status(200).json(productData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default getProducts;
