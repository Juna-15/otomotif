const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: { 
        type: Number,
        required: true
    },
    engineSize: {
        type: Number,
        required: true
    },
    horsepower: {
        type: Number,
        required: true
    },
    mileage: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    status: {
        type: String,
        required: true,
        enum: ['Available', 'Pending', 'Sold']
    },
    type: {
        type: String,
        required: false,
        enum: ['sedan', 'suv', 'hatchback', 'sport']
    },
    description: {
        type: String,
        required: false
    },
    postedDays: {
        type: Number,
        required: false,
        min: 0
    }
}, {
    timestamps: true
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;