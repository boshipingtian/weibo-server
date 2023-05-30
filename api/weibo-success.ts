import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
module.exports = async (req: VercelRequest, res: VercelResponse) => {
  const { code } = req.query;
  axios
    .get("")
    .then((res) => {})
    .catch((err) => {
      res.status(400).json(err);
    });
};
