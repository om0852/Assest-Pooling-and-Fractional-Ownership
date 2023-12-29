import Assests from "../../../../../models/Assests";
import SellAssest from "../../../../../models/SellAssest";
import connectDB from "../../../../../utils/mongoose";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const body = await req.json();
        // console.log(body);
        const { id, price } = body;
        // console.log(price)
        await connectDB();
        const AssestData = await Assests.findOne({ _id: id });
        const deleteAssestdata = await Assests.deleteOne({ _id: id });
        const data = await SellAssest.create({
            AssestId: AssestData.AssestId,
            UserId: AssestData.AssestId,
            AssestTitle: AssestData.AssestTitle,
            AssestTotalPrice: AssestData.AssestTotalPrice,
            OrginalBuyPrice: AssestData.OrginalBuyPrice,
            SellPrice: price,
            AssestBuyPrice: AssestData.AssestBuyPrice,
            PercentageOwn: AssestData.PercentageOwn,
            Transactionid: AssestData.Transactionid,
            Transactionamount: AssestData.Transactionamount,
        })
        return NextResponse.json({ status: 200, error: data });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: 300, error: error.message });
    }
}
