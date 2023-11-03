import { Request, Response } from "npm:express@4.18.2";
import productModel from "./products.ts";

const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      res.status(400).send("Name and price are required");
      return;
    }

    const alreadyExists = await productModel.findOne({ name }).exec();
    if (alreadyExists) {
      res.status(400).send("product already exists");
      return;
    }

    const newProduct = new productModel({ name, price });
    await newProduct.save();

    res.status(200).send({
      name: newProduct.name,
      price: newProduct.price,
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default addProduct;
