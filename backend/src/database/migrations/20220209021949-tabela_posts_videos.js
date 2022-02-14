'use strict';

module.exports = {
    async up(queryInterface, _Sequelize) {
        await queryInterface.sequelize.query(`CREATE TABLE posts_videos (
        id int not null primary key,
        titulo varchar(255) not null,
        assunto text not null,
        url varchar(255) not null,
        tags text[] not null,
        dataCriacao date not null,
        usuarioCriacao int not null,
        dataUltimaAlteracao date not null,
        usuarioUltimaAlteracao int not null,
        situacao int not null,
        CONSTRAINT fk_posts_video_situacoes
            FOREIGN KEY(situacao)
                REFERENCES situacoes(id)
    )`);
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.sequelize.query('DROP TABLE posts_videos');
    }
};
