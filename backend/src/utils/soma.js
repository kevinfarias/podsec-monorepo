const soma = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Parâmetros inválidos');
    }

    return a + b;
};

export default soma;