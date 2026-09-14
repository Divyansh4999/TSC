const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the root directory
// In a real production app, you might want to move HTML/CSS/JS to a 'public' or 'src' folder
app.use(express.static(__dirname));

// Example API Route (for future custom backend logic)
app.get('/api/status', (req, res) => {
    res.json({ status: 'success', message: 'The Soft Column backend is running.' });
});

// Fallback to index.html for any unmatched routes (useful if you ever add client-side routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
