import mongoose from 'mongoose';
import Sitter from './Sitter';
import Animal from './Animal';

const Schema = mongoose.Schema;

const newReview = new Schema({
    text: { type: String },
    animals: [{ type: Schema.Types.ObjectId, ref: 'Animal' }] ,// ref se réfère à la collection
    sitters: [{ type: Schema.Types.ObjectId, ref: 'Sitter' }] // ref se réfère à la collection

});
module.exports = mongoose.model('Owner', newOwner);
