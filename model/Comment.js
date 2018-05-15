import mongoose from 'mongoose';
import Sitter from './Sitter';
import Owner from './Owner';

const Schema = mongoose.Schema;

const newComment = new Schema({
    text: { type: String },
    postedBy: {type: Schema.Types.ObjectId, ref: 'Sitter'},
    postedBy: {type: Schema.Types.ObjectId, ref: 'Owner'}
});
module.exports = mongoose.model('Comment', newComment);
