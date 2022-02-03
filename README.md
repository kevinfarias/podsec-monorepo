# MONOREPO PODSEC

Neste repositório, conterá todo os softwares necessários para rodar o projeto "PodSec (temp)".  
  
Documentações gerais ficam na pasta: `docs/`  
  
Código backend fica na pasta: `backend/`
  
Código frontend fica na pasta: `frontend/`
  
O projeto pode ser rodado simplesmente com o Docker instalado com o seguinte comando (nesta pasta): `docker-compose up --build`

## 1. Implementando Code Pattern com ESLint && Prettier
Para integrar o ESLint ao Visual Studio Code, você precisará instalar a extensão ESLint para o Visual Studio Code. Navegue de volta para o Visual Studio Code e pesquise ESLint na guia Extensões. Clique em Instalar depois de localizar a extensão:  
![Instalando extensão no VSCode](https://assets.digitalocean.com/articles/linting-and-formatting-with-eslint-in-vs-code/2.png)
  
Verifique o funcionamento forçando um erro de código: exemplo, declarar uma variável em `./backend/src/app.js` como var e verifique se o vscode acusa erro.  
Tente salvar, o comportamento esperado é que o VSCode corrija o erro para você.  
  


## 2. Padrão do git flow:
Use como base o [git flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html).  
Usaremos o seguinte padrão:  
- funcionalidade: feature/
- bugfix: bugfix/
- branch de desenvolvimento/homologação: development
- branch de produção: master

## 3. Fluxo de trabalho:
1. De um checkout na branch development e atualize a mesma:  `git checkout development && git pull`
2. Na sequência, crie uma nova feature usando:  `git flow feature start meu-desenvolvimento-de-funcionalidade`
3. Após finalizar o desenvolvimento, commite usando os comandos padrão git:  `git add . && git commit -m "finalizando desenvolvimento da funcionalidade x" && git push`
4. Acesse o github e crie um novo pull request, marcando Kevin ou Tassio como revisores.
5. Se a pull request for recusada, corrija os apontamentos e suba novamente usando o passo 3, avisando o revisor que uma nova versão foi subida.
6. Se a pull request for aceita, finalize sua branch usando o comando:  `git flow feature finish meu-desenvolvimento-de-funcionalidade && git push`