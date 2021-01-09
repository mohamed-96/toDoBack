const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = 'mongodb+srv://mohamed:marketing123456@cluster0.y8ox8.mongodb.net/marketing?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(3000);
        console.log("listening to port 3000");
    })
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));

// routes
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).send('404 not found');
});