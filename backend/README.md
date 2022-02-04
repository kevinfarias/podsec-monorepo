# BACKEND TeInforma Tech

## TODO: Fluxo criação migrations
Documentar processo de criação de migrations

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