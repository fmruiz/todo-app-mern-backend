const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const { off } = require("../models/User");

exports.createUser = async (request, response) => {
  // verify errors
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return response.status(400).json({ errors: errors.array() });

  // extract email and password
  const { email, password } = request.body;

  try {
    let user = await User.findOne({ email });

    if (user) return response.status(400).json({ msg: "This user exist" });

    // create user
    user = new User(request.body);

    // password hash
    const salt = await bcryptjs.genSaltSync(10);
    user.password = await bcryptjs.hash(password, salt);

    // save new user
    await user.save();

    response.json({ msg: "User create" });
  } catch (error) {
    console.log(error);
    response.status(400).send("Error!!!");
  }
};
