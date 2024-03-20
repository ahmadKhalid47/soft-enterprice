import mongoose from "mongoose";
const TokenSchema = mongoose.Schema({
  token: { type: String, required: true },
  userId: { type: String, required: false },
});
const TokenModel =
  mongoose.models.token || mongoose.model("token", TokenSchema);

export default TokenModel;
