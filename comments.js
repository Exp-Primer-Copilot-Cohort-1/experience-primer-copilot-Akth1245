//Create web server
// 1. Import Express
const express = require('express');
const { check, validationResult } = require('express-validator');
// 2. Create an Express application
const app = express();

// 3. Define the port
const port = 3000;

// 4. Define the routes
// 4.1 Home page
app.get('/', (req, res) => {
    res.send('Hello world');
});

// 4.2 Comments page
app.get('/comments', (req, res) => {
    res.send('Comments page');
});

// 4.3 Comments page
app.get('/comments/:id', (req, res) => {
    res.send(`Comments page for id ${req.params.id}`);
});

// 4.4 Comments page
app.get('/comments/:id/edit', (req, res) => {
    res.send(`Comments page for id ${req.params.id} for edit`);
});

// 4.5 Comments page
app.get('/comments/new', (req, res) => {
    res.send(`Comments page for new comment`);
});

// 4.6 Comments page
app.post('/comments', [
    check('email').isEmail().withMessage('Please enter a valid email address'),
    check('name').isLength({ min: 3 }).withMessage('Please enter a name with min 3 characters'),
    check('comment').isLength({ min: 5 }).withMessage('Please enter a comment with min 5 characters'),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send(errors.array());
    }
    res.send('Comments page for new comment');
});

// 5. Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});