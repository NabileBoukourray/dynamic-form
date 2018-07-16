const path = require("path");
const express = require("express");
const app = express();

app.use("/static/", express.static(path.resolve(__dirname, "public")));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
    res.render("index.html");
});


app.listen("3003", () => {
    console.log("app running at port 3003...");
});