'use strict';

module.exports = {
    async up(queryInterface, _Sequelize) {
        await queryInterface.bulkInsert('niveis_acesso',
            [
                { descricao: 'administrador' },
                { descricao: 'criador-de-conteudo' },
                { descricao: 'consumidor' }
            ], {});
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.bulkDelete('niveis_acesso', null, {});
    }
};
