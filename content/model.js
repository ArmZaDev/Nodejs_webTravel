const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://takoyaki:Takoyaki_00123@cluster0.gb4yjy7.mongodb.net/?retryWrites=true&w=majority")
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