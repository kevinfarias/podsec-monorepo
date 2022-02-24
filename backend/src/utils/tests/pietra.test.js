import { refrao } from '../pietra';

describe('Testando refrao', () => {
    it('Testando retorno ok', () => {
        const retornoRefrao = refrao('pietra');

        expect(retornoRefrao).toBe('oooh pietra');
    });

    it('Testando retorno erro - parametros invalidos', () => {
        const retornoRefrao = () => refrao(null);

        expect(retornoRefrao).toThrow('É preciso passar um nome!');
    });
});