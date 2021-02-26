const mongoose = require('mongoose');


// Tollman Skiffs
const TolmanSkiffSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: [ true, "You must have an owner name" ],
        minlength: [ 3, "Your owner name must be at least 3 characters long" ],
    },
    builderName:{
        type: String,
        required: [ true, "You must have a builder name" ],
        minlength: [ 3, "Your builder name must be at least 3 characters long" ],
    },
// modelName:
//     Standard(default)
//     Wide Body
//     Jumbo
//     Flat Bottom
    modelName:{
        type: String,
        required: [ true, "You must have a builder name" ],
        enum: [ 'Standard', 'Wide Body', 'Jumbo', 'Flat Bottom' ],
    },
// startDate:
//     No later than today
//     No later than 1990
    startDate: {
        type: Date,
        required: [ true, "You must include a start date" ],
        min: [ '1990-01-01', "Sorry, you can't build a skiff before the plans were created - please try again!  :) "],
        max: [ new Date(), "You can't say you're starting in the future" ],
    },
// finishDate:
//     No later than today
    finishDate: {
        type: Date,
        // required: [ true, "You must include a start date" ], << this is technically a work in progress
        // ^ you dont need this: but if you do include this make sure that it matches the min and max dates, and that its a valid date
        min: [ '1990-01-01', "Sorry, you can't build a skiff before the plans were created - please try again!  :) "],
        max: [ new Date(), "You can't say you're starting in the future" ],
    },
// buildComplete:
//     default: false
    buildComplete: {
        type: Boolean,
        default: false,
    },
// stockLength:
//     min: 15
//     max: 30
    stockLength: {
        type: Number,
        // required: [ true, "Your skiff must have a stock length"],
        min: [ 15, "Minimum length of a Tolman Skiff must be at least 15 feet" ],
        max: [ 30, "Maximum length of a Tolman Skiff is 30 feet on this site" ],
    },
// customLength:
//     min:15
//     max:30
    customLength: {
        type: Number,
        required: [ true, "Your skiff must have a stock length"],
        min: [ 15, "Minimum custom length of a Tolman Skiff must be at least 15 feet" ],
        max: [ 30, "Maximum custom length of a Tolman Skiff is 30 feet on this site" ],
    },
// pictureUrl: string
//     optional
    pictureUrl: {
        type: String,
    },

    description: {
        type: String,
    },


}, { timestamps: true })

// collection names are all lowercase and plural based on this string 'Skiff'
module.exports = mongoose.model('Skiff', TolmanSkiffSchema);