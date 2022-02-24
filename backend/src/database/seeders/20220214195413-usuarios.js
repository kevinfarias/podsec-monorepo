'use strict';

const db = require('../../models/index.js');

module.exports = {
    async up(queryInterface, _Sequelize) {
        const rawQuery = 'select pa.* from usuarios pa';
        const typeSelect = { type: _Sequelize.QueryTypes.SELECT };
        const rowsInDatabase = 
            await queryInterface.sequelize.query(rawQuery, typeSelect);

        if (!rowsInDatabase.length) {
            const hashedPassword = db.Usuarios.generatePassword('admin');
            
            await queryInterface.bulkInsert('usuarios', [
                {
                    nomecompleto: 'Administrador',
                    usuario: 'admin',
                    senha: hashedPassword,
                    email: 'administrador@teinformatech.com',
                    situacao: '1',
                    datacriacao: new Date(Date.now()).toISOString(),
                    recebernewsletter: '0',
                    nivelacesso: 1
                }
            ]);
        }
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.bulkDelete('usuarios', null, {});
    }
};