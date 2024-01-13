
import Portfolio from "../../../models/Portfolio";
import connectDB from "../../../utils/mongoose";
import { NextResponse } from "next/server";
var CryptoJS = require("crypto-js");

export async function POST(req, res) {
    try {
        const body = await req.json();
        const { pid } = body;

        await connectDB();
        const portfoliodata = await Portfolio.findOne({ _id: pid });
        const { PortfolioPrice } = portfoliodata;

        // Sample PortfolioPrice data
        // let PortfolioPrice = [
        //     {
        //         "date": "2024-02-13T03:52:24.704Z",
        //         "Price": 290
        //     },
        //     {
        //         "date": "2024-01-13T03:52:24.704Z",
        //         "Price": 280
        //     },
        //     {
        //         "date": "2024-01-12T03:52:24.704Z",
        //         "Price": 240
        //     },
        //     {
        //         "date": "2024-01-12T03:52:24.704Z",
        //         "Price": 220
        //     },
        //     {
        //         "date": "2024-01-12T03:52:24.704Z",
        //         "Price": 200
        //     },
        //     {
        //         "date": "2024-01-10T03:52:24.704Z",
        //         "Price": 200
        //     },
        //     {
        //         "date": "2024-01-05T03:52:24.704Z",
        //         "Price": 220
        //     },
        //     {
        //         "date": "2024-01-09T03:52:24.704Z",
        //         "Price": 230
        //     }
        // ];

        const CurrYear = [];
        const oldestDate = PortfolioPrice.reduce((oldest, current) => {
            const currentDateObj = new Date(current.date);
            return oldest < currentDateObj ? oldest : currentDateObj;
        }, new Date());

        // Find the newest date
        const newestDate = PortfolioPrice.reduce((newest, current) => {
            const currentDateObj = new Date(current.date);
            return newest > currentDateObj ? newest : currentDateObj;
        }, new Date());

        console.log("Oldest Date:", oldestDate.toISOString());
        console.log("Newest Date:", newestDate.toISOString());

        let oldDate = new Date(oldestDate);
        let currentDate = new Date();

        while (oldDate <= newestDate) {
            CurrYear.push({ date: oldDate.toISOString(), price: 0 });
            oldDate.setDate(oldDate.getDate() + 1);
        }
        PortfolioPrice.sort((a, b) => new Date(a.date) - new Date(b.date));
        let prevPrice;
        let j = 0;
        let newArray = []
        console.log(PortfolioPrice);
        for (let i = 0; i < CurrYear.length; i++) {
            const lastIndex = PortfolioPrice.map(item => item.date).lastIndexOf(CurrYear[i].date);
            console.log(lastIndex, CurrYear[i].date);
            if (lastIndex == -1) {
                newArray.push({ date: CurrYear[i].date, price: prevPrice })
            }
            else {
                prevPrice = PortfolioPrice[lastIndex].Price
                newArray.push({ date: CurrYear[i].date, price: PortfolioPrice[lastIndex].Price });
                j++;
                console.log(PortfolioPrice[lastIndex].Price, j);
            }
        }


        return NextResponse.json({ status: 200, currentYear: newArray });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: 500, error: "Internal Server Error" });
    }
}
