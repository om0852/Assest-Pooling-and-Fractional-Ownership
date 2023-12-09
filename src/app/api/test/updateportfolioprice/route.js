// import User from "../../../models/User";
import Portfolio from "../../../../models/Portfolio";
import Assests from "../../../../models/Assests";
import connectDB from "../../../../utils/mongoose";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        // console.log("allportflop")
        await connectDB();
        const portfoliodata = await Portfolio.find();
        for (let i = 0; i < portfoliodata.length; i++) {
            const Assestdata = await Assests.find({ AssestId: portfoliodata[i]._id });
            if (Assestdata != []) {
                for (let j = 0; j < Assestdata.length; j++) {
                    let profit = portfoliodata[i].Price - Assestdata[j].AssestBuyPrice;
                    console.log(profit);
                    Assestdata[j].Profit.push({ Profit: profit, date: new Date() })
                    console.log(Assestdata[j].Profit)
                    const updateAssest = await Assests.updateOne({ _id: Assestdata[j]._id }, { Profit: Assestdata[j].Profit });
                }
            }

        }
        // console.log(portfoliodata);
        return NextResponse.json({ status: 200, error: portfoliodata });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: 300, error: "check internet connection" });
    }
}
