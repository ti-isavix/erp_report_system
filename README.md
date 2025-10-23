# erp_report_system

Sistema de Relatórios ERP (erp_report_system)

Este é o Monorepo para o novo Sistema de Relatórios ERP. Ele contém o serviço de backend (API) e o portal de frontend (UI).

Estrutura de Diretórios

* `/backend`: Contém a aplicação Python (FastAPI) que lida com a lógica de negócio, enriquecimento de dados e comunicação com a API do ERP.

* `/frontend`: Contém a aplicação React (Vite) que serve como interface do usuário (UI).

* `/docker-compose.yml`: Orquestra a execução dos serviços de backend e frontend em um ambiente de desenvolvimento ou produção.

* `/Jenkinsfile`: Define o pipeline de CI/CD para testes e implantação automatizados.

* `/.env.example`: Ficheiro de exemplo para as variáveis de ambiente necessárias.

Como Executar (Ambiente On-Premise)

1. Copie o ficheiro de ambiente:

~~~bash
cp .env.example .env
~~~


2. Preencha as variáveis no ficheiro .env com as credenciais reais do ERP.

Construa e execute os containers:

docker-compose up --build -d


Aceda à aplicação:

O portal (frontend) estará disponível em: http://localhost

A API (backend) estará disponível em: http://localhost/api (via proxy do Nginx)
