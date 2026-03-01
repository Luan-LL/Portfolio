# 📚 Nexaula

> Conectando professores e alunos de forma simples, moderna e acessível.

![Nexaula Banner](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Java](https://img.shields.io/badge/Java-Spring%20Boot-6DB33F?logo=springboot)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styles-06B6D4?logo=tailwindcss)

---

## 💡 Sobre o Projeto

A **Nexaula** é um marketplace de aulas ao vivo que conecta alunos e professores.
Inspirada em plataformas como Uber e iFood, mas voltada 100% para educação.

Alunos buscam professores ou criam pedidos de aula. Professores abrem salas ou respondem pedidos.
Tudo com vídeo chamada, chat e negociação de valores dentro da plataforma.

---

## ✨ Funcionalidades (MVP)

### 👤 Autenticação
- Cadastro de Aluno (e-mail/senha ou Google)
- Cadastro de Professor (e-mail + certificações)
- Login para ambos os perfis
- Autenticação via JWT

### 🎓 Área do Aluno
- Dashboard com salas recomendadas
- Buscar salas por matéria, valor e horário
- Solicitar entrada em uma sala existente
- Criar pedido de aula (matéria + valor + disponibilidade)
- Chat de negociação com o professor

### 👨‍🏫 Área do Professor
- Dashboard com salas abertas e pedidos recebidos
- Criar sala (matéria, vagas, valor, horário)
- Aceitar ou recusar solicitações de alunos
- Candidatar-se a pedidos criados por alunos
- Buscar salas como aluno (professor também pode aprender)
- Gerenciar agenda

### 🔍 Explorar Salas
- Listagem de todas as salas abertas
- Filtros por categoria, tipo, valor e disponibilidade
- Ordenação por relevância, preço, avaliação e número de alunos
- Aba exclusiva para professores: pedidos de alunos que precisam de professor

### 🖥️ Sala de Aula
- Vídeo chamada ao vivo (WebRTC)
- Chamada de voz
- Chat de texto em tempo real

### ⭐ Extras do MVP
- Avaliação após a aula
- Perfil público do professor
- Notificações básicas

---

## 🗺️ Telas do Sistema

| # | Tela | Perfil |
|---|---|---|
| 1 | Landing Page | Público |
| 2 | Login | Todos |
| 3 | Cadastro Aluno | Aluno |
| 4 | Cadastro Professor | Professor |
| 5 | Explorar Salas | Aluno/Professor |
| 6 | Pedidos de Alunos | Professor |
| 7 | Dashboard Aluno | Aluno |
| 8 | Dashboard Professor | Professor |
| 9 | Perfil do Professor | Público/Aluno |
| 10 | Criar Sala | Professor |
| 11 | Chat de Negociação | Aluno/Professor |
| 12 | Sala de Aula (vídeo + chat) | Aluno/Professor |
| 13 | Configurações/Perfil | Todos |

---

## 🛠️ Tecnologias

### Frontend
| Tecnologia | Uso |
|---|---|
| React + Vite | Framework principal |
| Tailwind CSS | Estilização |
| React Router DOM | Navegação entre telas |
| Lucide React | Ícones |
| WebRTC | Vídeo e voz ao vivo |

### Backend
| Tecnologia | Uso |
|---|---|
| Java + Spring Boot | API REST |
| Spring Security + JWT | Autenticação |
| PostgreSQL | Banco de dados |
| WebSocket | Chat em tempo real |

---

## 📁 Estrutura do Projeto

nexaula/
├── public/
├── src/
│ ├── assets/
│ ├── components/ # Componentes reutilizáveis (Navbar, Footer, Button...)
│ ├── pages/ # Telas do app (LandingPage, Login, Dashboard...)
│ ├── contexts/ # Contextos globais (tema, usuário logado)
│ ├── hooks/ # Hooks personalizados
│ ├── services/ # Chamadas à API do backend
│ └── styles/ # CSS global
├── README.md
└── package.json

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js 18+
- npm

### Instalação

``bash
# Clone o repositório
git clone https://github.com/seu-usuario/nexaula.git

# Entre na pasta
cd nexaula

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev

📌 Status do Desenvolvimento
 Landing Page

 Navbar

 Footer

 Seção "Como funciona"

 Login / Cadastro

 Dashboard Aluno

 Dashboard Professor

 Explorar Salas

 Sala de Aula

 Backend (Spring Boot)
 👨‍💻 Autor
Feito por Luan — projeto de portfólio em desenvolvimento.

LinkedIn

GitHub

"A educação é a arma mais poderosa que você pode usar para mudar o mundo." — Nelson Mandela

