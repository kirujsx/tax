const http = require('http');
const nodemailer = require('nodemailer');
const url = require('url');
const querystring = require('querystring');

// ... rest of your server code
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const formData = querystring.parse(body);
            const email = formData.email;
            const name = formData.name;
            const message = formData.message;

            // Set up the email transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'kirubel910@gmail.com', // Your Gmail address
                    pass: 'Puppy$123' // Your Gmail password or app password
                }
            });

            // Set up the email details
            // Set up the email details
            const mailOptions = {
                from: email, // This is the sender's email (from the form)
                to: 'kirubel910@gmail.com', // This is the recipient's email
                subject: `New Message from ${name}`,
                text: `You have a new message from ${name} (${email}): \n\n${message}`
            };
            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Failed to send email');
                } else {
                    console.log('Email sent: ' + info.response);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Email sent successfully');
                }
            });
        });
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});