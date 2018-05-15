import mongoose from 'mongoose';
import Owner from './owner';
import Comment from './comment';
import Rating from './rating';

const Schema = mongoose.Schema;

const newAnimal = new Schema({
    name: { type: String, required: true },
    photos: [{ type: String }],
    description: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'Owner' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], // ref se réfère à la collection
    ratings: [{ type: Schema.Types.ObjectId, ref: 'Rating' }]
});
module.exports = mongoose.model('Animal', newAnimal);
