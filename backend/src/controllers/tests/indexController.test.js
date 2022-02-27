import { mockRequest, mockResponse } from '../../utils/mockTest';

import { homePage } from '../indexController';

describe('Testando indexController', () => {
    test('retornar 200 com o texto: hello world', async () => {
        const req = mockRequest();

        /*
        Caso fosse necessário mudar a request: 
        req.params.id = 1;
        */
        const res = mockResponse();

        await homePage(req, res);

        /* 
            Como estamos usando mock, devemos usar a função "toBeCalledWith".
            Em outros cenários onde não serão usado mock, devemos usar somente: "toBe"
        */
        expect(res.status).toBeCalledWith(200);
        expect(res.send).toBeCalledWith('hello world');
    });
});