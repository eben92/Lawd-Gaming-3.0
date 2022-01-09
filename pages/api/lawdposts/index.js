import dbConnect from "../../../utils/dbConnection";
import LawdPost from "../../../models/LawdPost";

dbConnect();

//eslint-disable-next-line
export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const allPost = await LawdPost.find({});

        res.status(200).json({ success: true, data: allPost });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;

    case "POST":
      try {
        const allPost = await LawdPost.create(req.body);

        res.status(201).json({ success: true, data: allPost });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
