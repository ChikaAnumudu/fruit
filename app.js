const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
// Schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please a name is required!"]
    } ,
    // name: String,
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

//( MODEL
//  colllection. mongo will remove the capital ans then pluralized the fruit that we specified in here into a collection of fruits. Note: it make use of lodash to achieve that.)
const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit ({
    name: "apple",
    rating: 7,
    review: "I lobve apple"
});


Fruit.updateOne({name: 'apple'},{ $set: { name: 'foo' } });
// fruit.save();


