# Diário de Bordo - Desenvolvedor de Sistemas

## 📚 Conteúdo da Segunda Aula

Esta seção é dedicada ao registro das atividades práticas da nossa segunda aula, focada na preparação do ambiente de desenvolvimento e no primeiro contato com os comandos essenciais de terminal (CLI) e controle de versão.

---

### ⚙️ Instalação e Configuração de Ferramentas
Foi realizada a apresentação e orientação sobre as principais ferramentas necessárias para o decorrer do curso:
* **GitHub / Git:** Configuração inicial para controle de versão e envio de projetos para a nuvem.
* **Visual Studio Code (VS Code):** Editor de código-fonte padrão adotado na disciplina.
* **Node.js:** Ambiente de execução Javascript runtime instalado no sistema operacional.

> 🛠️ **Atividade Prática:** Realizamos uma simulação guiada passo a passo do processo completo de instalação do **VS Code**, configurando os parâmetros ideais de desenvolvimento.

---

### 🖥️ Utilização do Git & Comandos de Terminal (Prompt/Bash)
Aprendemos e praticamos os comandos essenciais de navegação por linha de comando no terminal e a integração direta com o GitHub:

#### 📂 Fluxo do Git
* `git clone <url-do-repositorio>`: Comando utilizado para baixar/copiar um repositório remoto do GitHub para a máquina local.

#### 🗂️ Comandos de Navegação e Sistema (CLI) "GIT BASH"
* `code .`: Atalho executado no terminal para abrir a pasta atual diretamente no VS Code.
* `ls`: Lista todos os arquivos e pastas contidos no diretório atual (no Windows, equivalente ao comando `dir`).
* `cd <nome-da-pasta>`: Entra em uma pasta específica.
* `cd ..`: Retorna um nível na árvore de diretórios (volta para a pasta anterior).
* `clear`: Limpa toda a tela do terminal para organizar a visualização (no Prompt do Windows, utiliza-se `cls`).
* `cd C:` ou `cd D:`: Comandos de alternância para navegar entre diferentes unidades de disco/armazenamento do computador.

---

### 🚀 Próximos Passos
Com o ambiente configurado e os comandos básicos assimilados, estamos prontos para iniciar a criação dos primeiros scripts e aplicações práticas utilizando o Node.js.

# UTILIZAÇÃO DO GIT

## 1. CONECTAR USUÁRIO
COMANDOS:
 Git config --global user.name "nomedeusuariodosistema"
 Git config --global user.email "emaildousuariodogit"

 <!--  Estes comandos usa-se somente uma vez ou quand necessitar de uma nova identificação -->

 <!-- É importante na primeira vez que o github esteja logado, pois o sistema vai precisar dar permissão -->

## PARA ENVIAR PARA O REPOSITÓRIO

DIGITE:
git add .
<!-- prepara os arquivos para envio -->
"git commit -m "nome para rotulação"
<!-- criar chave de identifição -->
git push

<!-- envia os arquivos para o repositório -->

ESTES COMANDOS SERÃO SEMPRE EXECUTADOS. 
SERÁ UMA ROTINA A SER EXECUTADA SEMPRE PARA ATUALIZAÇÃO DOS SEUS PROJETOS.

## PARA BAIXAR ATUALIZAÇÕES DO REPOSITÓRIO

git pull
<!-- baixar as atualizações do repositório -->

Exemplo de caso:
Pedro desenvolve seus projetos no trabalaho. Ele executa os comandos -" Git add ,. Git commit -m "nome"  e Git push.
No final de semana, em casa pedro, clona seu projeto para seu computador pessoal. Realiza algumas alterações no projeto e atualiza no repositório repetindo novamente os comandos: Git aa ., Git commit -m "nome" e Git push.
Na segunda-feira ao chegar no trabalho, pedro abre o terminal e aplica o comando: Git pull, para atualizar no trabalho os arquivos que ele alterou no final de semana.