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

let Tour = mongoose.model("Tour", {
    image: String,
    name: String,
    description: String,
});

async function getAll() {
    return Tour.find({  });
}

async function get(_id) {
    return Tour.findOne({ _id });
}

module.exports = {User, Tour, getAll, get};