import dbConnect from "../../../../utils/dbConnection";
import user from "../../../../models/user";
import validator from "../../../../utils/valid";
import bcrypt from "bcrypt";

dbConnect();

// eslint-disable-next-line
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, cf_password } = req.body;

    const errMsg = validator(name, email, password, cf_password);
    if (errMsg) return res.status(400).json({ err: errMsg });

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new user({
      name,
      email,
      password: passwordHash,
      cf_password,
    });

    console.log(newUser);
    res.status(201).json({ msg: "success!" });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
