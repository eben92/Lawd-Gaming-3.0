import dbConnect from "../../../utils/dbConnection";
import user from "../../../models/user";

dbConnect();

// eslint-disable-next-line
export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const getUser = await user.find({});
        res.status(200).json({ succes: true, data: getUser });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
      break;

    case "POST":
      try {
        const postUser = await user.create(req.body);

        res.status(201).json({ succes: true, data: postUser });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
      break;

    default:
      res.status(400).json({ succes: false });
      break;
  }
};
