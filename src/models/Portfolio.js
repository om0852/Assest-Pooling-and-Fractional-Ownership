const mongoose = require('mongoose')

const PortfolioSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    PortfolioName: { type: String, required: true },
    Price: { type: String, required: true },
    Assests: { type: Array }
}, { timestamps: true })
mongoose.models = {};
export default mongoose.model.Portfolio || mongoose.model("Portfolio", PortfolioSchema);
