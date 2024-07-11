const mongoose = require("mongoose");
const User = require("./Schemas/User");

mongoose.connect(
    "mongodb+srv://prakhar:IXUr1S2b9FTEXdZc@cluster0.mmehvfp.mongodb.net/learn"
  );

const main = async () => {
  const user = new User({
    name: "prakhar",
    age: 22,
    email: "prakhar@gmail.com",
  });

  await user.save();
  console.log("User Saved");
};
main()