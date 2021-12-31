const User = require("../models/User");

exports.createUser = async (request, response) => {
  try {
    let user;
    // create user
    user = new User(request.body);
    // save new user
    await user.save();
    response.send("User create");
  } catch (error) {
    console.log(error);
    response.status(400).send("Error!!!");
  }
};
