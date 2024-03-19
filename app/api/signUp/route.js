import connectDb from "@app/connectDb";
import { NextResponse } from "next/server";
import RegistrationModel from "@app/models/registration";
import { createToken } from "@app/auth";
export async function POST(req) {
  let { username, password } = await req.json();
  let userData = {
    username,
    password,
  };
  connectDb();
  let signUpData = await RegistrationModel.findOne({ username: username });
  if (!signUpData) {
    await RegistrationModel({
      username: username,
      password: password,
    }).save();
    // createToken(userData);
    return NextResponse.json({ msg: createToken(userData) });
  } else {
    return NextResponse.json({ error: "you already have account" });
  }
}
