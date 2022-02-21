'use strict';

module.exports = {
    async up(queryInterface, _Sequelize) {
        const rawQuery = 'select pa.* from situacoes pa';
        const typeSelect = { type: _Sequelize.QueryTypes.SELECT };
        const rowsInDatabase = 
            await queryInterface.sequelize.query(rawQuery, typeSelect);

        if (rowsInDatabase.length === 0) { 
            await queryInterface.bulkInsert('situacoes', [
                { descricao: 'criado' },
                { descricao: 'publicado' },
                { descricao: 'deletado' }
            ], {});
        }
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.bulkDelete('situacoes', null, {});
    }
};
