'use strict';

module.exports = {
    async up(queryInterface, _Sequelize) {
        await queryInterface.sequelize.query(`CREATE TABLE newsletter_inscricoes (
        email varchar(255) not null primary key,
        dataCriacao date not null
    )`);
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.sequelize.query('DROP TABLE newsletter_inscricoes');
    }
};
