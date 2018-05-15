
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const newSpace = new Schema({
    id: { type: Schema.Types.ObjectId},
    name: { type: String, required: true },
    photos: [{ type: String }],
    description: { type: String },
    address: { type: String }
});

module.exports = mongoose.model('Space', newSpace);