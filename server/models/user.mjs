import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  id: { type: String}
})

export default mongoose.model("User", userSchema)