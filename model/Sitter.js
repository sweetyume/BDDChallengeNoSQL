import mongoose from 'mongoose';
import Space from './space';
import Comment from './comment';
import Rating from './rating';

const Schema = mongoose.Schema;

const newSitter = new Schema({
    username: { type: String, required: true },
    mail: { type: String },
    photo: { type: String },
    spaces: [{ type: Schema.Types.ObjectId, ref: 'Space' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }] ,// ref se réfère à la collection
    ratings: [{ type: Schema.Types.ObjectId, ref: 'Rating' }],
});
module.exports = mongoose.model('Sitter', newSitter);
