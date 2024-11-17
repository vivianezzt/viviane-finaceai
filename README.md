# Finance-AI

Finance-AI é uma aplicação de gestão financeira completa, desenvolvida para auxiliar no controle de receitas, despesas, investimentos e saldos. A aplicação coleta dados de transações pessoais e fornece uma visão detalhada da saúde financeira do usuário, além de insights gerados com a ajuda do ChatGPT.

## Funcionalidades

- **Gestão de Transações**: Adicione, edite e exclua transações financeiras.
- **Categorias de Gastos**: Organize transações por categorias como Saúde, Educação, Transporte, Alimentação, Habitação, Utilidades, entre outros.
- **Tipos de Transações**: Suporte a diversos tipos, incluindo cartão de crédito, débito, depósitos e investimentos.
- **Gráficos e Relatórios**: Visualize relatórios gráficos das receitas, despesas e saldos, com uma análise clara do fluxo financeiro.
- **Insights com ChatGPT**: Obtenha recomendações e insights personalizados sobre a saúde financeira com integração ao ChatGPT.
- **Datas de Transações**: Registre datas para cada transação, permitindo relatórios e comparativos detalhados.
- **Controle Total sobre o Fluxo de Caixa**: Acompanhe seu saldo e o impacto de cada transação para manter uma visão clara das finanças.

## Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **React** com **TypeScript**
- **Next.js** (v14.2.16)
- **Prisma** para gerenciamento e manipulação de dados
- **PostgreSQL** como banco de dados relacional
- **TailwindCSS** para estilização moderna e responsiva
- **shadcn** para componentes de interface aprimorados
- 
### Figma da Aplicação
<a href="https://www.figma.com/design/ndIZ9nevfZZCMxCL4lZxfQ/FSW-Finance-(LIVE)?node-id=248-2996&node-type=frame&t=z8EdlxPLNkRhHoVf-0">Finance-AI</a>

<img src="/public/finace-tela-login.png">

## Instalação e Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/finance-ai.git
   cd finance-ai
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o banco de dados PostgreSQL no arquivo `.env`.

4. Execute as migrações do Prisma:

   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:

   ```bash
   npm run dev
   ```

## Uso

Após iniciar o servidor, você pode acessar a aplicação em [http://localhost:3000](http://localhost:3000). Navegue pelo painel para gerenciar suas finanças, visualizar relatórios gráficos e acessar os insights do ChatGPT sobre sua situação financeira.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests. Certifique-se de seguir a convenção de commits no formato `<type>(scope): <subject>` para manter a consistência nos commits.

## Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

Este README fornece uma visão geral e orientações básicas para quem deseja usar ou contribuir com o **Finance-AI**.## Finance-ai

Aplicação de Viviane Aguiar - 2024  