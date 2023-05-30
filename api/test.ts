import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
module.exports = async (req: VercelRequest, res: VercelResponse) => {
  const { code } = req.query;
  console.log(code);
  
  axios
    .get("http://v3.wufazhuce.com:8000/api/channel/one/0/0")
    .then((data) => {
        res.status(200).json(data.data.data.weather);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
