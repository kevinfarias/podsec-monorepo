import soma from '../soma';

describe('Testando função de soma', () => {
    it('2 + 3 = deve retornar 5', () => {
        const resultado = soma(2, 3);

        expect(resultado).toBe(5);
    });

    it('teste + 3 = deve retornar erro', () => {
        const resultado = () => soma('teste', 3);

        expect(resultado).toThrow(Error('Parâmetros inválidos'));
    });
});