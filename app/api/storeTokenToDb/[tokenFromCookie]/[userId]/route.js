import connectDb from "@app/connectDb";
import TokenModel from "@app/models/token";
import { NextResponse } from "next/server";

export async function POST(req, formData) {
  let tokenFromCookie = formData.params.tokenFromCookie;
  let userId = formData.params.userId;
  console.log(tokenFromCookie, userId);
//   let { tokenFromCookie, userId } = await req.json();
  connectDb();
  let tokenAlreadyAvaible = await TokenModel.findOne({
    token: tokenFromCookie,
  });
  if (userId) {
    await TokenModel({
      token: tokenFromCookie,
      userId: userId,
    }).save();
  } else {
    await TokenModel.updateOne(
      { userId: tokenAlreadyAvaible.userId },
      { $set: { token: tokenFromCookie } }
    );
  }
  return NextResponse.json({ msg: "posted token" });
}
