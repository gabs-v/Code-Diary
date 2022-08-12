const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: [true,"Name is required" ], 
        minLength: [2, "must be at least 2 characters"]
    },
    description: {
        type: String,
        required: [true,"Description is required" ], 
        minLength: [2, "must be at least 2 characters"]
    },

    hardship: {
        type: String,
        required: [false],
        minLength: [2, "must be at least 2 characters"]
    },

    solution: {
        type: String,
        required: [false],
        minLength: [2, "must be at least 2 characters"]
    }

}, {timestamps: true},)

const Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry