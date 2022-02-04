# BACKEND TeInforma Tech

## 1. Fluxo criação migrations
1. Criar migration: `npx sequelize migration:create --name nome-da-migration`
2. Exemplo de código de migration:
```
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
```
3. Rodar migration (no nivel raiz do monorepo): `docker-compose exec backend npm run db:migrate`

## 2. Fluxo criação testes unitários/integração:
1. Para cada arquivo criado, na mesma estrutura deve existir uma pasta chamada `tests`
2. O arquivo deve se chamar `{nomeDoArquivo}.test.js`. Exemplos:
    - `src/controllers/indexController.js` -> `src/controllers/tests/indexController.test.js`
    - `src/utils/soma.js` -> `src/utils/tests/soma.test.js`
3. Os testes podem ser rodados via `npm run test`.
4. Os testes automaticamente rodam sempre que é enviado um novo commit. Se os testes não passarem, não é possível commitar (se não passar no ESLint, também não).