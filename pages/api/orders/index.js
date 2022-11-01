import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const { method } = req;

  dbConnect();

  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler;
