import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
module.exports = async (req: VercelRequest, res: VercelResponse) => {
  const { code } = req.query;

  const APP_KEY = "238819347";
  const APP_SECRET = "f3123c83a224da30f935225bce5738f9";
  const REDIRECT_URI = "http://weibo-server.vercel.app/api/weibo-success";

  console.log(code);
  axios.get(`https://api.weibo.com/oauth2/access_token?client_id=${APP_KEY}&client_secret=${APP_SECRET}&grant_type=authorization_code&redirect_uri=${REDIRECT_URI}&code=${code}`)
    .then((data) => {
        res.status(200).json(data.data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
