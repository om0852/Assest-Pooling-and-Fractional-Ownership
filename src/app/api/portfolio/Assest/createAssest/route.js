import Portfolio from "../../../../../models/Portfolio";
import User from "../../../../../models/User";

import connectDB from "../../../../../utils/mongoose";

import { NextResponse } from "next/server";
var CryptoJS = require("crypto-js");

export async function POST(req, res) {
  try {
    const body = await req.json();
    console.log(body)
    const {AssestTitle,email,PortfolioName,AssestType,AssestTokens,AssestDescription,AssestPrice}=body;
    await connectDB();
    const data = {AssestTitle,email,PortfolioName,AssestType,AssestTokens,AssestDescription,AssestPrice,Date:new Date()};
    const userdata = await User.findOne({email:email});
    const portfoliodata = await Portfolio.findOne({PortfolioName:PortfolioName,userId:userdata._id});
    portfoliodata.Assests.push(data);
    const portfoliodataupdate = await Portfolio.updateOne({PortfolioName:PortfolioName,userId:userdata._id},{Assests:portfoliodata.Assests});

console.log("assest added successfully");
    return NextResponse.json({ status: 200 }, { error: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 300 }, { error: "error in addproduct" });
  }
}
