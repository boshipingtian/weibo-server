import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
module.exports = async (req: VercelRequest, res: VercelResponse) => {
  const { code } = req.query;

  const APP_KEY = "238819347";
  const APP_SECRET = "c21ff0824ac9f2b5320cc512faf9d586";
  const REDIRECT_URI = "https://weibo-server.vercel.app/api/weibo-success";

  console.log(code);
  axios.get(`https://api.weibo.com/oauth2/access_token?client_id=${APP_KEY}&client_secret=${APP_SECRET}&grant_type=authorization_code&redirect_uri=${REDIRECT_URI}&code=${code}`)
    .then((data) => {
        res.status(200).json(data.data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
