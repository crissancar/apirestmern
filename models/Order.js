const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    products: [{
        product: {
            type: Schema.ObjectId,
            ref: 'Product'
        },
        quantity: Number,
    }],
    amount: {
        type: Number
    }
});

module.exports = mongoose.model('Order', orderSchema);