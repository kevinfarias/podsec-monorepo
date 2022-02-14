'use strict';

module.exports = {
    async up(queryInterface, _Sequelize) {
        await queryInterface.bulkInsert('situacoes', [
            { descricao: 'criado' },
            { descricao: 'publicado' },
            { descricao: 'deletado' }
        ], {});
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.bulkDelete('situacoes', null, {});
    }
};
