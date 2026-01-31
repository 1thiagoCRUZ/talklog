# Talkog

O **Talkog** é uma plataforma criada para acabar com o famigerado **context switching**. Em vez de usar várias ferramentas para planejar, reunir e anotar, o Talkog centraliza tudo em um único fluxo:

> **Uma call gera um resumo → partes do resumo podem virar uma nota → a nota pode virar uma task.**

![Logo do Talkog](/assets/talklog.png)



## 🛠️ Tech Stack

### Backend

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge\&logo=nestjs\&logoColor=white)

* **NestJS** — Arquitetura modular

### Database & Auth

![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge\&logo=supabase\&logoColor=white)

* **Supabase (PostgreSQL)** — Autenticação e banco de dados

### Real-time (Em Planejamento)

![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=for-the-badge\&logo=socket.io\&logoColor=white)
![WebRTC](https://img.shields.io/badge/WebRTC-333333?style=for-the-badge\&logo=webrtc\&logoColor=white)

* **WebSockets / WebRTC** — Comunicação em tempo real e video calls integradas à plataforma.

---

## 📂 Estrutura do Projeto

O backend segue uma organização baseada em **módulos** e **padrões de projeto**, garantindo escalabilidade e fácil manutenção.

```txt
src/
 ├── database/        # Configurações de conexão e persistência
 ├── modules/         # Domínios da aplicação
 │   ├── controllers/ # Rotas e pontos de entrada da API
 │   ├── services/    # Regras de negócio
 │   ├── repositories/# Abstração de acesso ao banco
 │   ├── entities/    # Modelos e entidades
 │   └── dtos/        # Validação e transporte de dados
 │
 │   Módulos ativos:
 │   - user.module
 │   - task.module
 │   - note.module
 │
 └── utils/           # Helpers e funções utilitárias
```

---

## 🚀 Como Rodar o Projeto

### 1️⃣ Clone o repositório e instale as dependências

```bash
git clone https://github.com/1thiagoCRUZ/talkog.git
cd talkog
npm install
```

### 2️⃣ Configure o Supabase

Crie um projeto no **Supabase** e adicione as variáveis de ambiente no arquivo `.env`:

```env
SUPABASE_URL=seu_projeto_url
SUPABASE_KEY=sua_anon_key
DATABASE_URL=sua_connection_string_postgre
```

### 3️⃣ Inicie o ambiente de desenvolvimento

```bash
npm run start:dev
```

---

## 🗺️ Roadmap de Evolução

* [x] Estrutura base com **NestJS** e **Supabase**
* [x] Módulos de **Usuários**, **Tasks** e **Notas**
* [ ] Implementação de **WebRTC** para Video Calls
* [ ] **IA Summarizer** — Geração automática de atas e resumos de reuniões

---

## 🤝 Contribuição

Contribuições são muito bem-vindas! 🚀 O Talkog está em constante evolução e qualquer ajuda — seja código, ideias ou feedback — faz diferença.

### Como contribuir

1. Faça um fork do repositório

2. Crie uma branch para sua feature ou correção:
```bash
git checkout -b feature/minha-feature
```
3. Faça suas alterações seguindo os padrões do projeto

4. Commit suas mudanças com uma mensagem clara:
```bash
git commit -m "feat: adiciona nova funcionalidade"
```

5. Envie para o seu fork:
```bash
git push origin feature/minha-feature
```

6. Abra um Pull Request explicando o que foi feito e por quê


#### Se tiver dúvidas, ideias ou sugestões, fique à vontade para abrir uma issue. 💬

#### Toda contribuição conta — desde pequenos ajustes até grandes funcionalidades.

## 💡 Visão

O Talkog nasce com um objetivo: **transformar reuniões em ações reais**, sem ruído, sem retrabalho

> Reuniões que não viram tarefas são só conversas. O Talkog garante que nada se perca no caminho.
