const {Schema, model} = require('mongoose');
const keySchema = new Schema({
    key: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    }
});

const Keys = model("Key", keySchema);
module.exports = Keys;
