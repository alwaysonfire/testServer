const express  = require('express');


const testRouter = express.Router();


testRouter.post('/zxc', (req, res) => {
    return 'hello world'
});

module.exports = testRouter;