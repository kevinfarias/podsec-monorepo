'use strict';

module.exports = {
    async up(queryInterface, _Sequelize) {
        await queryInterface.sequelize.query(`CREATE TABLE usuarios (
        id serial not null primary key,
        nomeCompleto varchar(255) not null,
        usuario  varchar(255) not null,
        senha  varchar(255) not null,
        email  varchar(255) not null,
        situacao  bit not null,
        dataCriacao Date not null,
        receberNewsletter bit not null,
        nivelAcesso int not null,
        CONSTRAINT fk_usuarios_nivelAcesso
            FOREIGN KEY(nivelAcesso) 
                REFERENCES niveis_acesso(id)
)`);
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.sequelize.query('DROP TABLE usuarios');
    }
};