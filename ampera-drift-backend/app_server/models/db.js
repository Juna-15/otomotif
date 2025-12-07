let mongoose = require("mongoose");
let dbURI = "mongodb://localhost:27017/OTOMOTIF";
mongoose.connect(dbURI,{

});

mongoose.connection.on("connected", () => {
    console.log("Connected To MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("Connection Error: " + error);
});

mongoose.connection.on("disconected", () => {
    console.log("Disconnected From MongoDB");
});

require("./user");
require("./car");