module.exports = {
    async up (queryInterface) {
        await queryInterface.sequelize.query(`CREATE TABLE teste (
        id serial not null primary key,
        name varchar(100)
     )`);
    },

    async down (queryInterface) {
        await queryInterface.sequelize.query('DROP TABLE teste;');
    }
};