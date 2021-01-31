const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: String,
    description: String
});

const testData = mongoose.model("testing", testSchema);

module.exports = testData;