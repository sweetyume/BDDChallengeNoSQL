import mongoose from 'mongoose';
import Comment from './Comment';
const Schema = mongoose.Schema;

const newSitter = new Schema({
    username: { type: String, required: true },
    mail: { type: String },
    photo: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }] // ref se réfère à la collection

});
module.exports = mongoose.model('Sitter', newSitter);
