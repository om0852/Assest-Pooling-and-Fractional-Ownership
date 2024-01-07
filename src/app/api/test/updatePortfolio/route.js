// import User from "../../../models/User";
import Portfolio from "../../../../models/Portfolio";
import Assests from "../../../../models/Assests";
import connectDB from "../../../../utils/mongoose";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        // console.log("allportflop")
        const body = await req.json();
        let total = 0;
        const { updatedprice, id } = body;
        await connectDB();
        const portfoliodata = await Portfolio.findOne({ _id: id });
        for (let i = 0; i < portfoliodata.Assests.length; i++) {
            portfoliodata.Assests[i].Assest_Price = (updatedprice[i]);
            total += updatedprice[i] * portfoliodata.Assests[i].Assest_Quantity;
            console.log(portfoliodata.Assests[i].Assest_Price);
        }
        portfoliodata.PortfolioPrice.push({ Price: total, date: new Date() });
        const updatePotfolio = await Portfolio.updateOne({ _id: portfoliodata._id }, { Price: total, PortfolioPrice: portfoliodata.PortfolioPrice, Assests: portfoliodata.Assests });
        // console.log(updatePotfolio);
        // console.log(portfoliodata.PortfolioPrice[portfoliodata.PortfolioPrice.length - 2].Price, total)
        if (portfoliodata.PortfolioPrice[portfoliodata.PortfolioPrice.length - 2].Price != total) {
            let diff = parseFloat(total) - parseFloat(portfoliodata.PortfolioPrice[portfoliodata.PortfolioPrice.length - 2].Price)
            console.log(diff)
            const Assestdata = await Assests.find({ AssestId: portfoliodata._id });
            if (Assestdata != []) {
                for (let j = 0; j < Assestdata.length; j++) {
                    let gainamount = ((diff / 100) * parseFloat(Assestdata[j].PercentageOwn));
                    // console.log(gainamount);
                    let buyamount = parseFloat(Assestdata[j].AssestBuyPrice) + gainamount;
                    // console.log(buyamount)
                    let remainingamount = ((diff / 100) * portfoliodata.PercentageRemaining);
                    console.log(diff, remainingamount, buyamount)

                    const updatePotfolio = await Portfolio.updateOne({ _id: portfoliodata._id }, { RemainingPrice: parseFloat(portfoliodata.RemainingPrice) + remainingamount });

                    let profit = parseFloat(portfoliodata.Price) - parseFloat(Assestdata[j].OrginalBuyPrice);
                    console.log(parseFloat(portfoliodata.Price), profit, parseFloat(Assestdata[j].OrginalBuyPrice))
                    const updateAssest = await Assests.updateOne({ _id: Assestdata[j]._id }, { Profit: profit, AssestBuyPrice: buyamount, AssestTotalPrice: portfoliodata.Price });

                }
            }
        }
        else {
            console.log("no update")
        }


        // console.log(portfoliodata);
        return NextResponse.json({ status: 200, error: portfoliodata });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: 300, error: "check internet connection" });
    }
}
