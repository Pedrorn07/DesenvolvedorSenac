## CONTEÚDO DA AULA

# Regras de negocio e requisito do sistema
PORQUE NÃO COMEÇAR DIRETO NO CODIGO?
<!-- Cliente pode optar por mudar o foco do programa, sem requisitos claros o desenvolvedor constroi oque acha certo e não oque o cliente precisa, detalhes tecnicos e de negocios cruciais so aparecem quando o codumento e planejado pelo sistema. -->

# Oque são regras de negocio?

Independencia: existem mesmos sem um sistema de software.
Alinhamento: Garante que o software reflita os processos reais.
Foco no negocio: Define o "porque" e o "como" da operação.

<!-- exemplo: cadastro face/insta, 13 anos, ler, publicar, compartilhar, postar, seus e de outros, mandar mensagem, participar de grupos e curtir publicações. -->

# Oque são requisitos funionais (RF)?

Descrevem as funcionalidades, comportamentos e serviços que o sistema deve fornecer aos seus usuarios.

<!-- Exemplo: permitir cadastros, evitar confirmação no email, emitir relatorio mensal e permitir busa de produtos por categoria. -->

# Requisitos não funcionais (RNF)

Como o sistema deve ser: qualidades, restrições e atributos de sistema

Desempenho, segurança e usabilidade

<!-- Exemplo: O tempo de resposta deve ser inferior a 2 segundos, todas as senhas devem ser criptografadas e o acesso exige MFA, o sistema deve ser responsivo e acessível para dispositivos moveis -->

Http não possui muita segurança
SSL usado mais para seguranças de dados de cartão, senha, cpf...

# Estudo de caso: Sistema de bliblioteca

Regra de negocio:
"O usuário não pode retirar livros se tiver multas pendentes."
<!-- Norma organizacional que independente do software -->
Requisito funcional:
"O sistema deve validar o historico do usuario antes de confirmar o emprestimo."
<!-- Ação que o sistema executa para cumprir a regra. -->
Requisito não funcinal:
"A consulta de disponibilidade de livros deve ocorrer em tempo real."
<!-- Atributo de qualidade e desempenho do sistema -->

# Criando o documento "Requisitos.md" , "README.md"
<!-- Padronização: O uso markdown permite uma documentação técnica clara, versionável e de facil leitura para desenvolver e stakelhelders. -->
ESTRUTURA SUGERIDA
1. Introdução e Objetivos do sistema.
2. Lista de Regras de Negocio (RN01, RN02..)
3. Lista de Requisitos Funcionais (RF01, RF02..)
4. Lista de Requisistos Não Funcionais (RNF01..)

# Criando o Protótipo HTML com Boostrap.

VALIDAÇÃO VISUAL:
Permite que o cliente visualize a interface e o fluxo de navegação antes do desenvolvimento da lógica complexa.

RAPIDEZ NO DESENVOLVIMENTO:
Uso de componentes prontos (modais, tablets, formulários para acelerar a criação de mockups funcionais).

FOCO NA UX:
Garantia de responsividade e padrões de usabilidade modernos desde o primeiro dia do projeto.