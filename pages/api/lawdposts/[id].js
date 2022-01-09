import dbConnect from "../../../utils/dbConnection";
import LawdPost from "../../../models/LawdPost";

dbConnect();

//eslint-disable-next-line
export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const post = await LawdPost.findById(id);

        if (!post) {
          res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const updatedPost = await LawdPost.findByIdAndUpdate({
          new: true,
          runValidator: true,
        });

        if (!updatedPost) {
          res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: updatedPost });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;

    case "DELETE":
      try {
        const deletedPost = await LawdPost.deleteOne({ id: id });

        if (!deletedPost) {
          res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
