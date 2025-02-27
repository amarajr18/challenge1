const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend requests

// ✅ Define API route
app.get("/api", (req, res) => {
    res.json({ message: "✅ API is running successfully!" });
});

// ✅ Define the root route (optional)
app.get("/", (req, res) => {
    res.send("Hello, Docker! Backend is running.");
});

// Set the port to 8080 to match Docker
const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

