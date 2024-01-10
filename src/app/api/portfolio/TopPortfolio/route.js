import User from "../../../../models/User";
import Portfolio from "../../../../models/Portfolio"
import connectDB from "../../../../utils/mongoose";
import { NextResponse } from "next/server";
export async function POST(req, res) {
    try {
      const body = await req.json();
      await connectDB();
  
      const topPortfolios = await Portfolio.find().sort({ BuyCount: -1 }).limit(3); // Limit the results to the top three
  
      return NextResponse.json({ status: 200, error: topPortfolios });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ status: 300, error: "check internet connection" });
    }
}