# TeInformaTech MONOREPO

Neste repositório, conterá todo os softwares necessários para rodar o projeto "TeInforma Tech".  

## 1. Guia de pastas
  
Documentações gerais ficam na pasta: `docs/`  
  
Código backend fica na pasta: `backend/`
  
Código frontend fica na pasta: `frontend/`

## 2. Colocando a rodar
  
*Obs: todos comandos abaixos devem ser rodados nesta pasta raiz*
1. Rodar o comando: `npm run install` (instala as dependências do monorepo)
2. Rodar o comando: `npm run prepare` (instalar o husky localmente)
3. Com o Docker instalado, o projeto deve ser rodado com o seguinte comando: `docker-compose up --build`


## 3. Implementando Code Pattern com ESLint && Prettier
Para integrar o ESLint ao Visual Studio Code, você precisará instalar a extensão ESLint para o Visual Studio Code. Navegue de volta para o Visual Studio Code e pesquise ESLint na guia Extensões. Clique em Instalar depois de localizar a extensão:  
![Instalando extensão no VSCode](https://assets.digitalocean.com/articles/linting-and-formatting-with-eslint-in-vs-code/2.png)
  
Verifique o funcionamento forçando um erro de código: exemplo, declarar uma variável em `./backend/src/app.js` como var e verifique se o vscode acusa erro.  
Tente salvar, o comportamento esperado é que o VSCode corrija o erro para você.  
  


## 4. Padrão do git flow:
Use como base o [git flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html).  
Usaremos o seguinte padrão:  
- funcionalidade: feature/
- bugfix: bugfix/
- branch de desenvolvimento/homologação: development
- branch de produção: master

## 5. Fluxo de trabalho:
1. De um checkout na branch development e atualize a mesma:  `git checkout development && git pull`
2. Na sequência, crie uma nova feature usando:  `git flow feature start meu-desenvolvimento-de-funcionalidade`
3. Após finalizar o desenvolvimento, commite usando os comandos padrão git:  `git add . && git commit -m "finalizando desenvolvimento da funcionalidade x" && git push`
4. Acesse o github e crie um novo pull request, marcando Kevin ou Tassio como revisores.
5. Se a pull request for recusada, corrija os apontamentos e suba novamente usando o passo 3, avisando o revisor que uma nova versão foi subida.
6. Se a pull request for aceita, finalize sua branch usando o comando:  `git flow feature finish meu-desenvolvimento-de-funcionalidade && git push`

## 6. Extra: Git alias recomendado
1. Editar o arquivo .gitconfig com o comando: `nano ~/.gitconfig`
2. Colar o seguinte conteúdo:
```
[user]
        email = $MEUEMAIL ----- ALTERAR
        name = $MEUNOME ----- ALTERAR
[core]
        filemode = false
[merge]
        tool = code
[alias]
        s = !git status -s
        c = !git add . && git commit -m
        amend = !git add . && git commit --amend --no-edit
        l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s %C(cyan)[%cn] %C(green)%cr'
        sync = !"for b in $(git for-each-ref refs/heads --format='%(refname)') ; do git checkout ${b#refs/heads/} ; git pull --ff-only ; done"
```
  
Breve explicação dos atalhos git:
1. s = `git s` = Mostra o status dos arquivos à serem commitados de forma resumida
2. c = `git c "finalizando desenvolvimento da funcionalidade x"` = abstrai de rodar vários comandos para realizar um simples commit (abstrai o uso de git add . && git commit -m)
3. amend = `git amend` = merga novo conteúdo no commit anterior, preservando a mensagem
4. l = `git l` = mostra um log formatado
5. sync = `git sync` = atualiza todas as branches de uma só vez, sem precisar ficar realizando git pull em cada