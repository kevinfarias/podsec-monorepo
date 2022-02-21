'use strict';

module.exports = {
    async up(queryInterface, _Sequelize) {
        const rawQuery = 'select * from usuarios';
        const typeSelect = { type: _Sequelize.QueryTypes.SELECT };
        const rowsInDatabase = await queryInterface.sequelize.query(rawQuery, typeSelect);

        if (rowsInDatabase.length === 0) {
            require('dotenv/config');

            const bcrypt = require('bcrypt');
            const salt = process.env.BCRYPT_SALT;
            const numberOfRounds = 15;
            const password = `pswd${salt}`;
            const hashedPassword = bcrypt.hashSync(password, numberOfRounds);

            await queryInterface.bulkInsert('usuarios', [
                {
                    nomecompleto: 'Administrador',
                    usuario: 'administrador',
                    senha: hashedPassword,
                    email: 'administrador@teinformatech.com',
                    situacao: 1,
                    datacriacao: new Date(Date.now()).toISOString(),
                    recebernewsletter: 0,
                    nivelacesso: 1
                }
            ]);
        }
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.bulkDelete('usuarios', null, {});
    }
};