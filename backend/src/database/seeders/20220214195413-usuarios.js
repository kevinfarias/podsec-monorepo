'use strict';

module.exports = {
    async up(queryInterface, _Sequelize) {
        await queryInterface.bulkInsert('usuarios', [{
            nomeCompleto: 'Administrador',
            usuario: 'administrador',
            senha: 'tR@.d#ar',
            email: 'administradro@teinformatech.com',
            situacao: 1,
            dataCriacao: new Date(),
            receberNewsletter: 0,
            nivelAcesso: 1

        }], {});
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.bulkDelete('usuarios', null, {});
    }
};
