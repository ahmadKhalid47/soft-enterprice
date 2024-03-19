import { createToken } from "@app/auth";
import connectDb from "@app/connectDb";
import { NextResponse } from "next/server";
import RegistrationModel from "@app/models/registration";
export async function POST(req) {
  let { username, password } = await req.json();
  let userData = { username, password };
  connectDb();
  let loginData = await RegistrationModel.findOne({ username: username });
  if (loginData) {
    if (password === loginData.password) {
      createToken(userData);
      return NextResponse.json({ msg: createToken(userData) });
    } else {
      return NextResponse.json({ error: "wrong password" });
    }
  } else {
    return NextResponse.json({ error: "user not found" });
  }
}
