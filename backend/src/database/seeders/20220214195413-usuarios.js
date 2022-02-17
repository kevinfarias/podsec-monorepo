'use strict';

module.exports = {
    async up(queryInterface, _Sequelize) {
        await queryInterface.sequelize.query(`INSERT INTO usuarios 
            (nomeCompleto,usuario,senha,email,situacao,dataCriacao,receberNewsletter,nivelAcesso) 
            VALUES ('Administrador','administrador','tR@.d#ar','administrador@teinformatech.com', 
            '1', '2022-02-17 22:12:09.361 +00:00' ,'0','1')
            `);
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.bulkDelete('usuarios', null, {});
    }
};
