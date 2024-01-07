import User from "../../../models/User";
import connectDB from "../../../utils/mongoose";
import { NextResponse } from "next/server";
var CryptoJS = require("crypto-js");

export async function POST(req, res) {
    try {
        const body = await req.json();
        const { email } = body;
        await connectDB();
        const userdetails = await User.findOne({ email: email });
        return NextResponse.json({ status: 200, error: userdetails });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: 300 }, { error: "check internet connection" });
    }
}
