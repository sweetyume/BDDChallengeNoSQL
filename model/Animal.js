import mongoose from 'mongoose';
import Owner from './Owner';

const Schema = mongoose.Schema;

const newAnimal = new Schema({
    name: { type: String, required: true },
    photo: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], // ref se réfère à la collection
    owner: [{ type: Schema.Types.ObjectId, ref: 'Owner' }] // ref se réfère à la collection

});
module.exports = mongoose.model('Animal', newAnimal);
