const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Travel_db")
.then(() => {
    console.log("mongodb connected");
})
.catch(() => {
    console.log("failed to connect");
})

const User = mongoose.model("User", {
    name: String,
    password: String,
});

const Tour = mongoose.model("Tour", {
    img: String,
    description: String,
});

module.exports = {User, Tour};