const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    enterprise: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default:true
    }
}, {
    timestamps: true
});

module.exports = model('Producto', productSchema);