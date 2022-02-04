import { StatusCodes } from 'http-status-codes';

const homePage = (_req, res) => res.status(StatusCodes.OK).send('hello world');


export { homePage };