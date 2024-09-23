const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let StudentSchema = new Schema({
    rollNo: { type: Number, required: true },
    firstName: { type: String },
    lastName: { type: String },
    fatherName: { type: String },
    aadharCardNo: { type: Number },
    mobileNo: { type: Number },
});
module.exports = mongoose.model("Student", StudentSchema);
