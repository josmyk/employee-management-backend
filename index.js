const { response } = require('express');
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = 3000;
mongoose.set('strictQuery', true);
mongoose.connect(
    "mongodb+srv://test_123:12345@cluster0.hvbfz5l.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,

        useUnifiedTopology: true,

    }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", UserSchema);

const employees = [
    {
        id: "1",
        Name: "Ajeesh",
        DOB: "1994-02-24"
    }, {
        id: "2",
        Name: "Abhijith",
        DOB: "1991-09-04"
    }, {
        id: "3",
        Name: "Ammu",
        DOB: "1992-06-27"
    }
]

app.get('/employees', async (req, res) => {
    const user = new User(employees[0])
    try {
        await user.save();
        // response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
    const usersR = await userModel.find({});

    try {
        console.log(usersR)
    } catch (error) {
        response.status(500).send(error);
    }
});
app.post('/add-employee', (req, res) => {
    employees.push(req.body.employee)
    res.send(employees);
});
app.put('/edit-employee', (req, res) => {

});
app.delete('/delete-employee', (req, res) => {

});

app.listen(3000, () => {
    console.log("Server is running at port http://localhost:3000");
});
