'use strict';

module.exports = {
    async up(queryInterface, _Sequelize) {
        await queryInterface.sequelize.query(`CREATE TABLE newsletter_modelos (
        id serial not null primary key,
        titulo varchar(255) not null,
        copia varchar(255) not null,
        copiaOculta varchar(255) not null,
        corpo text not null,
        situacao bit not null,
        dataCriacao date not null,
        usuarioCriacao int not null,
        dataUltimaAlteracao date not null,
        usuarioUltimaAlteracao int not null,
        idConfiguracao int not null,
        CONSTRAINT fk_newsletter_modlos_newsletter_configuracao
            FOREIGN KEY(idConfiguracao)
                REFERENCES newsletter_configuracao(id)
    )`);
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.sequelize.query('DROP TABLE newsletter_modelos');
    }
};
