const Task = require('../models/task');

const task_index = (req, res) => {
    Task.find().sort({ createdAt: -1 })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(500).send(err)
            console.log(err);
        });
}

const task_details = (req, res) => {
    const id = req.params.id;
    Task.findById(id).sort({ createdAt: -1 })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(500).send(err)
            console.log(err);
        });
}

const task_create_post = (req, res) => {
    const task = new Task(req.body);
    task.save()
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
            console.log(err);
        });
}

const task_delete = (req, res) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.status(500).send(err)
            console.log(err);
        });
}

module.exports = {
    task_index,
    task_details,
    task_create_post,
    task_delete
}