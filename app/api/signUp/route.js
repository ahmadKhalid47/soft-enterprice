import connectDb from "@app/registration/connectDb";
import { NextResponse } from "next/server";
import RegistrationModel from "@app/models/registration";
import { createToken } from "@app/registration/auth";
export async function POST(req) {
  let { username, password } = await req.json();
  let userData = {
    username,
    password,
  };
  connectDb();
  let signUpData = await RegistrationModel.findOne({ username: username });
  if (!signUpData) {
    let storedSignUpData = await RegistrationModel({
      username: username,
      password: password,
    }).save();
    let token = createToken(userData);
    return NextResponse.json({ msg: token, userId: storedSignUpData._id });
  } else {
    return NextResponse.json({ error: "you already have account" });
  }
}
