const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crudDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


app.post("/create", async (req, res) => {
try {
    console.log("BODY:", req.body); // debug
    const user = new User(req.body);
    const saved = await user.save();
    res.json(saved);
} catch (e) {
    res.status(500).json({ error: e.message });
}
});

app.get("/users", async (req, res) => {
const data = await User.find();
res.json(data);
});

app.listen(3000, () => console.log("Server running on port 3000"));