const express = require("express");
const { verifyKey } = require("discord-interactions");

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_KEY = process.env.DISCORD_PUBLIC_KEY;

app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString("utf8");
    },
  })
);

app.post("/interactions", (req, res) => {
  const signature = req.get("X-Signature-Ed25519");
  const timestamp = req.get("X-Signature-Timestamp");

  if (!signature || !timestamp) {
    return res.status(401).send("Fehlende Discord-Signatur");
  }

  const isValidRequest = verifyKey(
    req.rawBody,
    signature,
    timestamp,
    PUBLIC_KEY
  );

  if (!isValidRequest) {
    return res.status(401).send("Ungültige Anfrage-Signatur");
  }

  const interaction = req.body;

  if (interaction.type === 1) {
    return res.json({ type: 1 });
  }

  return res.json({
    type: 4,
    data: {
      content: "Fox Bot läuft erfolgreich über Interactions."
    }
  });
});

app.get("/", (req, res) => {
  res.send("Fox Bot Server läuft.");
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
