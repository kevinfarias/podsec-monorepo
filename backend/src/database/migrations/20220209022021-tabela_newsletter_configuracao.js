'use strict';

module.exports = {
    async up(queryInterface, _Sequelize) {
        await queryInterface.sequelize.query(`CREATE TABLE newsletter_configuracao (
        id serial not null primary key,
        descricao varchar(255) not null,
        diasEnvio text[] not null,
        horaEnvio smallint not null,
        minutosEnvio smallint not null,
        dataCriacao date not null,
        usuarioCriacao int not null,
        dataUltimaAlteracao date not null,
        usuarioUltimaAlteracao int not null
    )`);
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.sequelize.query('DROP TABLE newsletter_configuracao');
    }
};
