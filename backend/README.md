# BACKEND TeInforma Tech

## Fluxo criação migrations
1. Criar migration: `npx sequelize migration:create --name nome-da-migration`
    - Exemplo de código de migration:
```
'use strict';

module.exports = {

  up: (queryInterface, Sequelize, migration) => {
     return queryInterface.sequelize.query('CREATE TABLE pietra (...)');
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.sequelize.query('DROP TABLE pietra;');
  }

};
```
2. Rodar migration (no nivel raiz do monorepo): `docker-compose exec backend npm run db:migrate`

## Fluxo criação testes unitários/integração:
1. Para cada arquivo criado, na mesma estrutura deve existir uma pasta chamada `tests`
2. O arquivo deve se chamar `{nomeDoArquivo}.test.js`. Exemplos:
    - `src/controllers/indexController.js` -> `src/controllers/tests/indexController.test.js`
    - `src/utils/soma.js` -> `src/utils/tests/soma.test.js`
3. Os testes podem ser rodados via `npm run test`.
4. Os testes automaticamente rodam sempre que é enviado um novo commit. Se os testes não passarem, não é possível commitar (se não passar no ESLint, também não).