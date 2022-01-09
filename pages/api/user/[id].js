import dbConnect from "../../../utils/dbConnection";
import user from "../../../models/user";

dbConnect();

// eslint-disable-next-line
export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const getUser = await user.findById({ id });

        if (!getUser) {
          res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: getUser });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;

    case "PUT":
      try {
        const updateUser = await user.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!updateUser) {
          res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: updateUser });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deleteUser = await user.findByIdAndDelete({ id: id });

        if (!deleteUser) {
          res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }

    default:
      res.status(400).json({ success: false });
      break;
  }
};
