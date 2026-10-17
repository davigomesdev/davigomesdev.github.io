# 🚀 Davi Gomes — Portfolio

Portfolio pessoal de **Davi Gomes**, Full Stack Developer focado em performance, sistemas distribuídos e produtos escaláveis.

🔗 **Site ao vivo:** [davigomesdev.github.io](https://davigomesdev.github.io)

📄 **Currículo:** [Download PDF](./static/curriculo-davi-gomes.pdf)

---

## 👨‍💻 Sobre

Desenvolvedor Full Stack com experiência em backend de alta performance, frontend moderno e Web3. Apaixonado por sistemas distribuídos, concorrência e arquiteturas que escalam.

### Principais competências

| Área                | Tecnologias                                        |
| ------------------- | -------------------------------------------------- |
| **Backend**         | Go, Rust, C, C++, Node.js, Java                    |
| **Frontend**        | React, Svelte, TypeScript                          |
| **Bancos de dados** | PostgreSQL, MongoDB, Redis, MySQL                  |
| **Messaging**       | Kafka, NATS, RabbitMQ                              |
| **Infraestrutura**  | Docker, Kubernetes, AWS, Terraform, Datadog, Linux |
| **Web3**            | Solidity, Solana, Web3.js, Ethers.js               |

---

## 🛠️ Stack do Portfolio

Este projeto foi construído com as seguintes tecnologias:

- **[SvelteKit](https://kit.svelte.dev/)** — Framework full-stack (Svelte 5 + Runes)
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Estilização utility-first
- **[shadcn-svelte](https://www.shadcn-svelte.com/)** — Componentes acessíveis e personalizáveis (estilo _vega_)
- **[bits-ui](https://www.bits-ui.com/)** — Primitivos headless para UI
- **[Embla Carousel](https://www.embla-carousel.com/)** — Carrosséis com autoplay
- **[Lucide](https://lucide.dev/)** + **[Iconify](https://iconify.design/)** — Ícones
- **[mode-watcher](https://github.com/sveltethemes/mode-watcher)** — Tema claro/escuro
- **Vite 8** — Build tool e dev server

---

## ✨ Funcionalidades

- Design responsivo e moderno
- Tema claro / escuro (com persistência)
- Seções de projetos, skills, bancos de dados e infraestrutura
- Carrossel de projetos com autoplay
- Modal de detalhes dos projetos
- Download de currículo em PDF
- Componentes UI reutilizáveis baseados em shadcn-svelte
- Animações e microinterações

---

## 📁 Estrutura do Projeto

```bash
.
├── src/
│   ├── lib/
│   │   ├── assets/              # Favicon e assets estáticos do app
│   │   ├── components/
│   │   │   └── ui/              # Componentes shadcn-svelte
│   │   │       ├── avatar/
│   │   │       ├── badge/
│   │   │       ├── button/
│   │   │       ├── card/
│   │   │       ├── carousel/
│   │   │       ├── dialog/
│   │   │       ├── sheet/
│   │   │       ├── tabs/
│   │   │       ├── textarea/
│   │   │       └── typography/
│   │   ├── hooks/               # Hooks reutilizáveis
│   │   └── utils.ts             # Utilitários (cn, etc.)
│   ├── routes/
│   │   ├── +layout.svelte       # Layout global
│   │   ├── +page.svelte         # Página principal (portfolio)
│   │   └── layout.css           # Estilos globais + Tailwind
│   ├── app.d.ts
│   └── app.html
├── static/
│   ├── curriculo-davi-gomes.pdf
│   ├── designer.gif
│   └── projects/                # Imagens/gifs dos projetos
│       ├── liderlocadora/
│       └── monsters/
├── components.json              # Configuração do shadcn-svelte
├── package.json
├── svelte.config.js
├── tsconfig.json
└── vite.config.ts
```
