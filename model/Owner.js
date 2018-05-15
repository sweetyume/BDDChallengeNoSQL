import mongoose from 'mongoose';
import Comment from './comment';
import Animal from './animal';

const Schema = mongoose.Schema;

const newOwner = new Schema({
    username: { type: String, required: true },
    mail: { type: String },
    photo: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], // ref se réfère à la collection
    animals: [{ type: Schema.Types.ObjectId, ref: 'Animal' }] 
});
module.exports = mongoose.model('Owner', newOwner);
