const express = require("express");
const bodyParser = require("body-parser");
const { sendEmail } = require("./emailService");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).send("Email is required!");

  try {
    await sendEmail(
      email,
      "EduSafe 360 Subscription",
      "✅ You are now subscribed to disaster alerts!"
    );
    res.send("Subscription successful! Check your email.");
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
