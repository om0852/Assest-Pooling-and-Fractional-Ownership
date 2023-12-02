import Portfolio from "../../../../../models/Portfolio";
import User from "../../../../../models/User";
import connectDB from "../../../../../utils/mongoose";
import { NextResponse } from "next/server";
var CryptoJS = require("crypto-js");
export async function POST(req, res) {
  try {
    const body = await req.json();
    console.log(body)
    const {AType,
  Assest_Title,
  Assest_Price,
  Assest_Quantity,
  Assest_Description,
  PortfolioName,
  pid}=body;
    await connectDB();
    const data = {AType,
  Assest_Title,
  Assest_Price,
  Assest_Quantity,
  Assest_Description,
  Date:new Date()
};
    const portfoliodata = await Portfolio.findOne({_id:pid});
    portfoliodata.Assests.push(data);
    const portfoliodataupdate = await Portfolio.updateOne({_id:pid},{Assests:portfoliodata.Assests});
   console.log("assest added successfully");
    return NextResponse.json({ status: 200 }, { error: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 300 }, { error: "error in addproduct" });
  }
}
