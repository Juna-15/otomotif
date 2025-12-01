const Car = require("../models/car");


const Index = async (req, res) => {
    try {
        const { type } = req.query;

        let query = {};
        if (type) {

            query.type = type;
        }
        
        const cars = await Car.find(query); 
        
        if (!cars || cars.length === 0) {
            return res.status(404).json({ 
                message: "No cars found",
                data: []
            });
        }
        
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ 
            message: "Error retrieving cars",
            error: error.message 
        });
    }
};

const GetById = async (req, res) => {
    try {
        const { id } = req.params;

        const car = await Car.findOne({ id: id });
        
        if (!car) {
            return res.status(404).json({ 
                message: "Mobil tidak ditemukan",
                id: id
            });
        }
        
        res.status(200).json(car);
    } catch (error) {
        
        res.status(500).json({ 
            message: "Error retrieving car",
            error: error.message 
        });
    }
};

module.exports = { Index, GetById };