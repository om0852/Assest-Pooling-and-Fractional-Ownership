import { NextResponse } from "next/server";
import Assests from "../../../models/Assests";
import connectDB from "../../../utils/mongoose";

export async function POST(request,res) {
    try {
        const body = await request.json();
        const { userId, AssestTokens, AssestTitle, AssestPrice, AssestDescription, Date, AssestType } = body;
        const newAssest = {
            userId,
            AssestTitle,
            AssestType,
            AssestTokens,
            AssestDescription,
            AssestPrice,
            Date,
        };

        console.log(newAssest);

        await connectDB();

        // Use the create method on the Assest model to insert the new document
        await Assests.create(newAssest);

        return NextResponse.json({
            message: "Data inserted successfully",
        }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}

export async function GET(request) {
    await connectDB();
    return NextResponse.json({ message: "done" });
}
