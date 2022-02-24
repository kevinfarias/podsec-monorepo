const refrao = nomeDaPessoa => { 
    if (!nomeDaPessoa) {
        throw new Error('É preciso passar um nome!');
    }
    
    return `oooh ${nomeDaPessoa}`;
};

export { refrao };