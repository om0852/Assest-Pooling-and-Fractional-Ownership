const mongoose = require('mongoose')

const AssestSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    AssestTitle: { type: String, required: true },

    AssestType: { type: String, required: true },
    AssestTokens: { type: String, required: true },
    AssestDescription:{type:String,required:true},
    AssestPrice: { type: Number, required: true },
    Date: { type: Date, required: true }

}, { timestamps: true })
mongoose.models = {}

export default mongoose.model.Assest || mongoose.model("Assest", AssestSchema);