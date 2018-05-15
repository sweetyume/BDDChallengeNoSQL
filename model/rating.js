import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const newRating = new Schema({
    id: { type: Schema.Types.ObjectId },
    text: { type: String }
});
module.exports = mongoose.model('Rating', newRating);
