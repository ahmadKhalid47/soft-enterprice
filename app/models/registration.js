import mongoose from "mongoose";

const RegistrationSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});
const RegistrationModel =
  mongoose.models.Registration ||
  mongoose.model("Registration", RegistrationSchema);

export default RegistrationModel;
