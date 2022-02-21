'use strict';

module.exports = {
    async up(queryInterface, _Sequelize) {
        const rawQuery = 'select * from niveis_acesso';
        const typeSelect = { type: _Sequelize.QueryTypes.SELECT };
        const rowsInDatabase = await queryInterface.sequelize.query(rawQuery, typeSelect);

        if (rowsInDatabase.length === 0) {
            await queryInterface.bulkInsert('niveis_acesso',
                [
                    { descricao: 'administrador' },
                    { descricao: 'criador-de-conteudo' },
                    { descricao: 'consumidor' }
                ], {});
        }
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.bulkDelete('niveis_acesso', null, {});
    }
};
