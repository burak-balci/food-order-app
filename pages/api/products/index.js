import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler;
