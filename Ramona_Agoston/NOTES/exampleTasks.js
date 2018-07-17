let Task = require('../models/task');

//Returns info from a file when it is imported
module.exports = {
    index: (req, res) => {
        Task.find({}, (err, tasks) => {
            if (err) {
                return res.status(400).json(err.errors);
            }
            return res.status(201).json(tasks);
        });
    },

    create: (req, res) => {
        const task = new Task(req.body);

        Task.save( (err) => {
            if (err) {
                // flash('errors', err);
                return res.status(400).json(err.message);
            }
            return res.status(201).json(task);
        });
    },

    show: (req, res) => {
        Task.findOne({_id: req.params.id}, (err, task) => {
            if (err) {
                return res.status(400).json(err.errors);
            }
            return res.status(201).json(task);
        });
    },

    update: (req, res) => {
        Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, task) => {
            if (err) {
                return res.status(400).json(err.errors);
            }
            return res.status(201).json(task);
        });
    },

    destroy: (req, res) => {
        Task.remove({_id: req.params.id}, (err, task) => {
            if (err) {
                return res.status(400).json(err.errors);
            }
            return res.json("Task Removed Successfully");
        });
    },
}
// (400)----set status code for user error
// (210)-----set status code "The request has been fulfilled and has resulted in one or more new resources being created."
