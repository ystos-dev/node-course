const mongoose = require("mongoose");

mongoose.connect("mongodb://mongodb/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true
});