const mongoose = require('mongoose')

const AssestSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    AssestTitle: { type: String, required: true },
    AssestTotalPrice: { type: Number, required: true },
    AssestBuyPrice: { type: Number, required: true },
}, { timestamps: true })
mongoose.models = {}
            
export default mongoose.model.Assest || mongoose.model("Assests", AssestSchema);