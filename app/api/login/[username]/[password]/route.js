import { createToken } from "@app/auth";
// import connectDb from "@app/connectDb";
// import RegistrationModel from "@app/models/registration";
import { NextResponse } from "next/server";
export async function GET(req, formData) {
  try {
    let username = formData.params.username;
    let password = formData.params.password;
    // let { username, password } = await req.json();

    let userData = { username, password };
    // connectDb();
    // let loginData = await RegistrationModel.findOne({ username: username });
    let loginData = {
      _id: "65faae5dd7c7374f9c385efe",
      username: "abcdef",
      password: "abcdef",
    };
    if (loginData) {
      if (password === loginData.password) {
        let token = createToken(userData);
        return NextResponse.json({ msg: token, userId: loginData._id });
      } else {
        return NextResponse.json({ error: "wrong password" });
      }
    } else {
      return NextResponse.json({ error: "user not found" });
    }
  } catch (err) {
    return NextResponse.json({ error: "user not found" });
  }
}
