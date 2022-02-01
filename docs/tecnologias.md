# GUIA DE TECNOLOGIAS À SEREM UTILIZADAS NO PROJETO

a) Backend: Express + Sequelize:
Manter MV - 
    Model -> Representação das tabelas do banco de dados

    /* models/Pessoa.js */
    const p = new Pessoa();
    p.setNome('Kevin');
    p.setSobrenome('Farias');
    p.save();

    Repository -> 
    /* repositories/pessoaRepository.js */
    class pessoaRepository {
        async buscarPorProfissao(idprofissao) {
            const sql = "select pa.* from pessoa pa join profissao p on pa.idprofissao = p.idprofissao where pa.idprofissao = :idprofissao";
            return await DB.raw(sql, { idprofissao });
        }
    }

    Router (express) -> /cadastros -> routes/cadastros.js
                        /inicio -> routes/inicio.js


    Controller -> Controlador, ele liga as camadas da Model, Repository com a Rota:
        /* controllers/pessoaController.js */
        class pessoaController {
            async inicio(idprofissao) {
                const pessoaRepository = new pessoaRepository();
                const dados = await pessoaRepository.buscarPorProfissao(idprofissao);

                
            }

            async inserir(dados = {}) {
                const pessoa = new Pessoa(dados);
                pessoa.save();

                return true;
            }
        }

    Migrations -> Onde a estrutura de banco funciona
    Sempre que criar alteração no banco, criar migration
    migrations/
        -> criar_tabela_pessoa.js
        -> criar_tabela_profissao.js

    comando: npm run migrate

b) Frontend: react native - nos da um poder de criar app mobile facilmente - com ContextAPI

c) Infra: Docker && Docker-compose

d) Repositório: Github

e) Pipeline CI/CD: Github Actions

f) Organização dos Repos: Git Flow usando a estrategia de branches do github
[CHEATSHEET DO GITFLOW](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html)

g) Organização das tarefas: Monday

h) Organização do chat: Discord

i) Banco de dados: PostgreSQL

j) Infra: Azure Kubernetes (preço baixo com o poder do kubernetes)

k) Testes unitarios/integracao: Jest
60% coverage

/* arquivo: utils/soma.js */
soma(a, b) {
    return a + b;
}

/* arquivo: utils/tests/soma.js */
describe('Testando a função de soma', () => {
    it('Somando 1 + 2, precisa resultar em 3', () => {
        const sum = soma(1, 2);
        expect(sum).toBe(3);
    })
})

l) Testes end to end: Cypress

m) Design pattern: ESLint + Prettier

n) Padrao de arquitetura: Monolito MVC, usando CleanCode 
(numa versao 2 podemos quebrar em um monolito)

Obs: Se quiserem podemos aplicar TDD, so preciso estudar um pouco antes pra passar pra vocês

Monorepo:
1. Frontend
2. Backend