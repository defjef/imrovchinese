const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname));

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server running on port', port);
});
