const express  = require('express');


const testRouter = express.Router();


testRouter.post('/ip', (req, res) => {
    return 'hello world'
});

module.exports = testRouter;