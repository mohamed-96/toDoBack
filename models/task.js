const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    pos: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: false,
    }
}, { timestamps: true });

const Task = mongoose.model('task', taskSchema);
module.exports = Task;