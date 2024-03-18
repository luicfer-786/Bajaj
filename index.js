const express = require("express");
const app = express();

app.use(express.json());

app.post("/a", (req,res)=>{
  console.log("hello")
  res.json({me: "yes"})
})

app.get("/", (req,res)=>{
  res.send({Messa: "helo"})
})

app.post("/bfhl", (req, res) => {
  // const { array } = req.body;
  const array = ["a", "1", "334", "4", "R"]
  if (!Array.isArray(array)) {
    return res
      .status(400)
      .json({ error: "Invalid input. Please provide an array." });
  }

  const evenNumbers = array.filter((num) => num % 2 === 0);
  const oddNumbers = array.filter((num) => num % 2 !== 0);
  const alphabets = array.filter(
    (char) => typeof char === "string" && /^[a-z]$/i.test(char)
  );

  const userId = `${req.body.full_name}_${req.body.dob.replace(/-/g, "")}`;

  res.json({
    is_success: true,
    user_id: userId,
    roll_number: req.body.roll_number,
    email: req.body.email,
    even_numbers: evenNumbers,
    odd_numbers: oddNumbers,
    alphabets: alphabets.map((char) => char.toUpperCase()),
  });
});

console.log(userId)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
