import connectDb from "@app/connectDb";
import TokenModel from "@app/models/token";
import { NextResponse } from "next/server";

export async function POST(req) {
  let { tokenFromCookie, userId } = await req.json();
  connectDb();
  await TokenModel({
    token: tokenFromCookie,
    userId: userId,
  }).save();
  return NextResponse.json({ msg: "posted token" });
}
