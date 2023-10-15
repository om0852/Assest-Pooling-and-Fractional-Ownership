import Admin from "../../../models/Admin";
import connectDB from "../../../utils/mongoose";
import { NextResponse } from "next/server";
var CryptoJS = require("crypto-js");

export async function POST(req, res) {
  try {
    const body = await req.json();
    console.log(body)
    const {name,email,password}=body;
    const userdata={name,email,password:CryptoJS.AES.encrypt( password,"secretkey123").toString()}
    await connectDB();
    await Admin.create(userdata);

    return NextResponse.json({ status: 200 }, { error: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 300 }, { error: "error in addproduct" });
  }
}
