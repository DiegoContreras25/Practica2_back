import { Request, Response } from "npm:express@4.18.2";
import productsModel from "./products.ts";

const deleteProducts = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const products = await productsModel.findByIdAndDelete({ id }).exec();
    if (!products) {
      res.status(404).send("producto not found");
      return;
    }
    res.status(200).send("producto deleted");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteProducts;
