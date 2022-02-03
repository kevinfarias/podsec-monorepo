import { StatusCodes } from 'http-status-codes';

const homePage = (_req, res) => 
    // host do banco: ${process.env.DB_HOST}, usuario: ${process.env.DB_USER}
    res.status(StatusCodes.OK).send('teste');


export { homePage };