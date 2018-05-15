import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const newComment = new Schema({
    // id: { type: Schema.Types.ObjectId },
    text: { type: String }
});
module.exports = mongoose.model('Comment', newComment);
