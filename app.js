// Import the HTTP module
const http = require('http');

// Define hostname and port
const hostname = '0.0.0.0';
const port = 3000;

// Create HTML welcome page
const welcomePage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Aeliya</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .container {
            text-align: center;
            background: white;
            padding: 50px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            max-width: 600px;
        }
        h1 { color: #333; font-size: 2.5em; margin-bottom: 20px; }
        p { color: #666; font-size: 1.1em; line-height: 1.6; }
        .info { background: #f0f0f0; padding: 20px; border-radius: 5px; margin-top: 30px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Aeliya Website</h1>
        <p>Hello! Welcome to our simple Node.js project.</p>
        <p>This is a basic web server created with Node.js.</p>
        <div class="info">
            <p><strong>Project:</strong> 7yaNodeProject1</p>
            <p><strong>Server:</strong> Running on port 3000</p>
            <p><strong>Status:</strong> Running Successfully</p>
        </div>
    </div>
</body>
</html>
`;

// Create the server
const server = http.createServer((req, res) => {
    // Set response headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    // Send the welcome page
    res.end(welcomePage);
});

// Start listening on the port
server.listen(port, hostname, () => {
    console.log(`\nServer running at http://${hostname}:${port}/`);
    console.log('Press Ctrl+C to stop the server\n');
});

// Handle errors
server.on('error', (err) => {
    console.error('Server error:', err);
});