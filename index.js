const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/interactions", (req, res) => {
  const interaction = req.body;

  if (interaction.type === 1) {
    return res.json({ type: 1 });
  }

  return res.json({
    type: 4,
    data: {
      content: "Fox Bot läuft."
    }
  });
});

app.get("/", (req, res) => {
  res.send("Server läuft.");
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
