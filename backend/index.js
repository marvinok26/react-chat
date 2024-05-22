const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// const CHAT_ENGINE_PROJECT_ID = "c10f9a25-9e05-42d3-bcb0-dbfaaeb58974";
// const CHAT_ENGINE_PRIVATE_KEY = "138ff924-2289-4f89-bb12-dcb374fe834d";

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username},
      { headers: { "Private-Key": "138ff924-2289-4f89-bb12-dcb374fe834d" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
