import express from 'express';


const testRouter = express.Router();

const secretKey = process.env.JWT_SECRET!;

testRouter.post('/ip', (req, res) => {
    return 'hello world'
});

export default testRouter;