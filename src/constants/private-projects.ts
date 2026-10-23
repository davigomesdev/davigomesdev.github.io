export type TechItem = { name: string; icon: string };
export type TechGroup = { category: string; items: TechItem[] };

export type PrivateProject = {
	year: string;
	badge: string | null;
	image: string;
	images?: string[];
	title: string;
	description: string;
	summary?: string;
	role?: string;
	metrics?: { value: string; label: string }[];
	highlights?: { title: string; text: string }[];
	stack?: TechGroup[];
	tags: string[];
	links?: { label: string; href: string }[];
};

export const privateProjects: PrivateProject[] = [
	{
		year: '2026',
		badge: null,
		image: '/projects/matchain-rwa/cover.png',
		images: [
			'/projects/matchain-rwa/cover.png',
			'/projects/matchain-rwa/01.png',
			'/projects/matchain-rwa/02.png',
			'/projects/matchain-rwa/03.png',
			'/projects/matchain-rwa/04.png',
			'/projects/matchain-rwa/05.png',
			'/projects/matchain-rwa/06.png',
			'/projects/matchain-rwa/07.png',
			'/projects/matchain-rwa/08.png',
		],
		title: 'Matchain RWA',
		description:
			'Plataforma de tokenização de imóveis (Real World Assets) que permite a investidores comprar frações de empreendimentos on-chain e receber dividendos proporcionais. O backend em Go segue arquitetura em módulos (ofertas, investimentos, ordens de pagamento e depósito, distribuição de dividendos e claims), com KYC de usuários, upload de documentos e imagens dos projetos em S3 e pagamentos via Asaas. Um indexer lê os eventos dos smart contracts e mantém o estado do banco sincronizado com a blockchain, enquanto o Outbox Pattern grava os eventos junto com a transação e os publica no Kafka para garantir consistência entre o banco e os consumidores. Os contratos em Solidity usam um Token-Mãe (ERC-721) por empreendimento, com saldo de frações por token, e a carteira pode ser a MatchID ou uma externa. O frontend em React e TypeScript com wagmi e Viem cobre o fluxo do investidor e o painel administrativo, com internacionalização em português, inglês e chinês, e todas as ações administrativas ficam registradas em um log de auditoria com before/after em JSONB.',
		summary:
			'Plataforma de tokenização imobiliária: investidores compram frações de imóveis on-chain e recebem dividendos, com KYC, pagamentos, indexer de eventos e painel admin.',
		role: 'Full-stack',
		metrics: [
			{ value: 'On-chain', label: 'frações de imóveis via ERC-721' },
			{ value: '3 idiomas', label: 'PT, EN e ZH' },
			{ value: 'Indexer', label: 'banco sincronizado com os contratos' },
		],
		highlights: [
			{
				title: 'Tokenização de imóveis',
				text: 'Token-Mãe (ERC-721) por empreendimento com saldo de frações por token e transferências restritas.',
			},
			{
				title: 'Indexer de eventos on-chain',
				text: 'Leitura dos eventos dos contratos com cursor de blocos processados, mantendo o banco consistente com a blockchain.',
			},
			{
				title: 'Outbox Pattern com Kafka',
				text: 'Eventos gravados junto com a transação e publicados no Kafka, garantindo consistência entre o banco e os consumidores.',
			},
			{
				title: 'Distribuição de dividendos',
				text: 'Fluxo de distribuição e claim para que cada investidor receba proporcional às frações que possui.',
			},
			{
				title: 'KYC e pagamentos',
				text: 'Verificação de documentos do investidor, ordens de pagamento e depósito, com integração ao Asaas.',
			},
			{
				title: 'Carteira dual e i18n',
				text: 'MatchID ou carteira externa via wagmi, com interface traduzida para português, inglês e chinês.',
			},
			{
				title: 'Auditoria e painel admin',
				text: 'Log de auditoria com before/after em JSONB e painel para gerir projetos, documentos, imagens e ofertas.',
			},
		],
		stack: [
			{ category: 'Backend', items: [{ name: 'Go', icon: 'simple-icons:go' }] },
			{ category: 'Dados', items: [{ name: 'PostgreSQL', icon: 'simple-icons:postgresql' }] },
			{ category: 'Mensageria', items: [{ name: 'Kafka', icon: 'simple-icons:apachekafka' }] },
			{ category: 'Blockchain', items: [{ name: 'Solidity', icon: 'simple-icons:solidity' }] },
			{
				category: 'Frontend',
				items: [
					{ name: 'React', icon: 'simple-icons:react' },
					{ name: 'TypeScript', icon: 'simple-icons:typescript' },
				],
			},
			{ category: 'Storage', items: [{ name: 'S3', icon: 'simple-icons:amazons3' }] },
		],
		tags: ['Go', 'PostgreSQL', 'Kafka', 'Solidity', 'React', 'TypeScript', 'Web3'],
	},
	{
		year: '2025',
		badge: null,
		image: '/projects/incapay/cover.png',
		images: [
			'/projects/incapay/cover.png',
			'/projects/incapay/01.png',
			'/projects/incapay/02.png',
			'/projects/incapay/03.png',
			'/projects/incapay/04.png',
			'/projects/incapay/05.png',
			'/projects/incapay/06.png',
			'/projects/incapay/07.png',
			'/projects/incapay/08.png',
		],
		title: 'Incapay',
		description:
			'Plataforma cripto que permite comprar e vender tokens e moedas nativas de blockchains usando Pix, com liquidação on-chain. O backend em NestJS segue arquitetura em camadas por módulo (domain, application, adapters e infrastructure), com Prisma e PostgreSQL. Os pagamentos são processados via SuitPay: a cobrança Pix é gerada na compra e um webhook confirma o pagamento e dispara a transferência dos ativos ao comprador pelos contratos em Solidity (IncaPix); na venda, o valor em reais é enviado por Pix para a chave do usuário. Além de compra e venda por Pix, a plataforma oferece pools de liquidez com swap, uma bridge entre redes (BNB Chain, Match Chain e testnet), um launchpad para lançamentos de tokens com depósito, retirada e compra com token, moeda nativa ou BRL, e preços em tempo real por price feed de cada rede com conversão via AwesomeAPI. O login é por e-mail e senha ou por assinatura de carteira (nonce + verifyMessage com ethers), com refresh token, confirmação de e-mail e recuperação de senha. Há perfis de acesso (admin e cliente), upload de imagens de redes e tokens, soft delete com restauração e notificações das operações em grupos do Telegram.',
		summary: 'Plataforma para comprar e vender cripto via Pix com liquidação on-chain, pools de swap, bridge entre redes e launchpad de tokens.',
		role: 'Backend',
		metrics: [
			{ value: 'Pix → on-chain', label: 'compra e venda de cripto' },
			{ value: '3 redes', label: 'BNB Chain, Match e testnet' },
			{ value: 'Bridge + Swap', label: 'pools de liquidez e launchpad' },
		],
		highlights: [
			{
				title: 'Compra e venda via Pix',
				text: 'Cobrança Pix pela SuitPay, com webhook que confirma o pagamento e libera os ativos on-chain ao comprador.',
			},
			{
				title: 'Contratos e integração Web3',
				text: 'Serviços em ethers para os contratos IncaPix, IncaPad, IncaBridge e Swap (router, factory e pair).',
			},
			{
				title: 'Pools de liquidez e swap',
				text: 'Compra e venda de tokens por pools, com cálculo de preços e conversão entre USD, BRL e moeda da rede.',
			},
			{
				title: 'Bridge entre redes',
				text: 'Transferência de ETH e tokens entre redes, com inicialização e finalização da ponte em cada lado.',
			},
			{
				title: 'Launchpad de tokens',
				text: 'Lançamentos com status (ativo, pausado, finalizado, cancelado), depósito, retirada e compra com token, ETH ou BRL.',
			},
			{
				title: 'Autenticação por carteira',
				text: 'Login por assinatura de mensagem com nonce, além de e-mail e senha, refresh token e recuperação de conta.',
			},
			{
				title: 'Arquitetura limpa e notificações',
				text: 'Módulos em camadas com casos de uso isolados, controle de acesso por perfil e alertas de operações no Telegram.',
			},
		],
		stack: [
			{
				category: 'Backend',
				items: [
					{ name: 'NestJS', icon: 'simple-icons:nestjs' },
					{ name: 'Prisma', icon: 'simple-icons:prisma' },
				],
			},
			{ category: 'Dados', items: [{ name: 'PostgreSQL', icon: 'simple-icons:postgresql' }] },
			{
				category: 'Blockchain',
				items: [
					{ name: 'Solidity', icon: 'simple-icons:solidity' },
					{ name: 'Ethers', icon: 'simple-icons:ethereum' },
				],
			},
			{ category: 'Pagamentos', items: [{ name: 'Pix (SuitPay)', icon: 'lucide:qr-code' }] },
			{ category: 'Notificações', items: [{ name: 'Telegram', icon: 'simple-icons:telegram' }] },
		],
		tags: ['NestJS', 'Prisma', 'PostgreSQL', 'Solidity', 'Ethers', 'Pix', 'Web3'],
	},
	{
		year: '2025',
		badge: null,
		image: '/projects/virginia-arruda/cover.webp',
		images: [
			'/projects/virginia-arruda/cover.webp',
			'/projects/virginia-arruda/01.webp',
			'/projects/virginia-arruda/02.webp',
			'/projects/virginia-arruda/03.webp',
			'/projects/virginia-arruda/04.webp',
		],
		title: 'Virgínia Arruda (App)',
		description:
			'Aplicativo mobile oficial da Bispa Virgínia Arruda, reunindo em um só lugar conteúdo, comunidade e Bíblia. A tela inicial traz um carrossel de destaques, atalhos para as redes sociais e para a loja, e acessos rápidos a pedidos de oração, agenda de eventos, testemunhos e à área de mantenedores. Na área Ouvir, o conteúdo é organizado em seções como Palavra do Dia, Louvores e Palavra Profética, com listas horizontais de vídeos. A Bíblia Sagrada permite navegar por livro, capítulo e versículo, com busca. O Bate-Papo organiza as salas de conversa por cidade e região, com filtro e a bandeira de cada estado. Fui responsável pelo frontend em React Native com Expo e TypeScript, usando TanStack Query para o consumo da API, cache e sincronização dos dados, com navegação por abas e identidade visual própria.',
		summary: 'App mobile da Bispa Virgínia Arruda com conteúdo para ouvir, Bíblia, bate-papo por região, pedidos de oração, eventos e testemunhos.',
		role: 'Frontend',
		metrics: [
			{ value: 'Mobile', label: 'React Native + Expo' },
			{ value: 'Bíblia', label: 'livros, capítulos, versículos e busca' },
			{ value: 'Comunidade', label: 'bate-papo por cidade e região' },
		],
		highlights: [
			{
				title: 'Home com destaques',
				text: 'Carrossel de destaques, atalhos para redes sociais e loja, e cartões para oração, eventos, testemunhos e mantenedores.',
			},
			{
				title: 'Área Ouvir',
				text: 'Conteúdo em seções (Palavra do Dia, Louvores, Palavra Profética) com listas horizontais de vídeos.',
			},
			{
				title: 'Bíblia Sagrada',
				text: 'Navegação por livros, capítulos e versículos, com campo de pesquisa.',
			},
			{
				title: 'Bate-Papo por região',
				text: 'Salas organizadas por cidade e região, com filtro e bandeiras dos estados.',
			},
			{
				title: 'Dados com TanStack Query',
				text: 'Consumo da API com cache, revalidação e estados de carregamento para uma navegação fluida.',
			},
			{
				title: 'Navegação e identidade visual',
				text: 'Barra de abas com ação central em destaque e tema dourado consistente em todas as telas.',
			},
		],
		stack: [
			{
				category: 'Mobile',
				items: [
					{ name: 'React Native', icon: 'simple-icons:react' },
					{ name: 'Expo', icon: 'simple-icons:expo' },
				],
			},
			{ category: 'Linguagem', items: [{ name: 'TypeScript', icon: 'simple-icons:typescript' }] },
			{ category: 'Dados', items: [{ name: 'TanStack Query', icon: 'simple-icons:reactquery' }] },
		],
		tags: ['React Native', 'Expo', 'TypeScript', 'TanStack Query'],
	},
	{
		year: '2021',
		badge: null,
		image: '/projects/etp/cover.png',
		images: ['/projects/etp/cover.png', '/projects/etp/01.png', '/projects/etp/02.png', '/projects/etp/03.png'],
		title: 'ETP (Site Institucional)',
		description:
			'Site institucional da ETP, escola de cursos técnicos com unidades em Pernambuco, pensado para apresentar a escola, os cursos e converter visitantes em alunos. A página inicial traz um banner em carrossel com os diferenciais da escola (foco na prática, agência de empregabilidade e parcelas fixas), cartões de benefícios e a busca de cursos por área, como saúde, industriais e negócios. Uma vitrine de cursos em carrossel apresenta cada formação com descrição resumida e botão de saiba mais, ao lado de indicadores de resultado como número de cursos, alunos e formados. A seção de unidades mostra cada endereço com foto, e o blog reúne as últimas notícias, eventos e visitas técnicas. O site também oferece atalhos para o portal do aluno, acesso ao EAD, área administrativa e teste vocacional, além de um formulário de indicação (indique e ganhe prêmios) em modal, onde o aluno informa seus dados e os amigos indicados, e um botão fixo de contato por WhatsApp. O frontend foi desenvolvido em React com styled-components e o backend em PHP.',
		summary: 'Site institucional da escola de cursos técnicos ETP, com vitrine de cursos, unidades, blog de notícias, programa de indicação e atalhos para portais do aluno.',
		role: 'Full-stack',
		metrics: [
			{ value: 'Institucional', label: 'site da escola de cursos técnicos' },
			{ value: 'Cursos', label: 'vitrine por área de formação' },
			{ value: 'Indicação', label: 'formulário de indique e ganhe' },
		],
		highlights: [
			{
				title: 'Home com banner e diferenciais',
				text: 'Carrossel de destaque com os diferenciais da escola e cartões de benefícios logo na primeira dobra.',
			},
			{
				title: 'Vitrine de cursos',
				text: 'Cursos em carrossel com descrição resumida e acesso rápido ao detalhe, além de busca por área (saúde, industriais, negócios).',
			},
			{
				title: 'Unidades',
				text: 'Seção com foto e endereço de cada unidade da escola.',
			},
			{
				title: 'Blog e notícias',
				text: 'Últimas notícias com categorias como eventos e visitas técnicas, em destaque e lista lateral.',
			},
			{
				title: 'Indique e ganhe prêmios',
				text: 'Modal com formulário de indicação: dados do aluno, unidade e múltiplos amigos indicados.',
			},
			{
				title: 'Portais e contato',
				text: 'Atalhos para portal do aluno, EAD, área administrativa e teste vocacional, com botão fixo de WhatsApp.',
			},
			{
				title: 'Interface com styled-components',
				text: 'Componentes React estilizados com styled-components, mantendo a identidade visual azul e verde da escola em todas as seções.',
			},
		],
		stack: [
			{ category: 'Backend', items: [{ name: 'PHP', icon: 'simple-icons:php' }] },
			{
				category: 'Frontend',
				items: [
					{ name: 'React', icon: 'simple-icons:react' },
					{ name: 'styled-components', icon: 'simple-icons:styledcomponents' },
				],
			},
		],
		tags: ['PHP', 'React', 'styled-components', 'Site Institucional'],
	},

	{
		year: '2025',
		badge: null,
		image: '/projects/monsters/cover.gif',
		title: 'Monsters (NFT Game)',
		description:
			'Jogo NFT multiplayer em tempo real com batalhas por turnos. O backend em Go gerencia milhares de salas simultâneas com um RoomManager concorrente usando sync.RWMutex e um game loop de 250ms por tick, garantindo consistência sem race conditions. Cada sala é uma entidade isolada com lifecycle próprio — waiting, started, finished e expired — processada de forma assíncrona via goroutines. O sistema de WebSocket transmite pacotes tipados para cada jogador individualmente, nunca expondo dados do adversário. Bots jogam com IA baseada em heurísticas de energia e vida, simulando comportamento humano com delay aleatório. Smart contracts em Solidity gerenciam ownership dos monstros NFT on-chain, com o frontend em TypeScript e WebGL renderizando as batalhas em tempo real.',
		summary: 'Jogo NFT multiplayer em tempo real com batalhas por turnos: backend concorrente em Go e ownership dos monstros on-chain via Solidity.',
		role: 'Full-stack',
		metrics: [
			{ value: 'Milhares', label: 'de salas simultâneas' },
			{ value: '250ms', label: 'por tick do game loop' },
			{ value: 'On-chain', label: 'ownership em Solidity' },
		],
		highlights: [
			{
				title: 'Concorrência sem race conditions',
				text: 'RoomManager com sync.RWMutex e game loop de 250ms por tick.',
			},
			{
				title: 'Salas isoladas e assíncronas',
				text: 'Lifecycle próprio (waiting, started, finished, expired) processado via goroutines.',
			},
			{
				title: 'WebSocket com pacotes tipados',
				text: 'Cada jogador recebe só o que pode ver; dados do adversário nunca são expostos.',
			},
			{
				title: 'Bots com IA heurística',
				text: 'Decisões baseadas em energia e vida, com delay aleatório para simular comportamento humano.',
			},
			{
				title: 'Outbox Pattern com Kafka',
				text: 'Eventos gravados junto com a transação e publicados no Kafka, garantindo consistência entre o banco e os consumidores.',
			},
			{
				title: 'Web3 + WebGL',
				text: 'Smart contracts em Solidity para ownership dos NFTs e frontend em TypeScript com WebGL renderizando as batalhas.',
			},
		],
		stack: [
			{ category: 'Backend', items: [{ name: 'Go', icon: 'simple-icons:go' }] },
			{ category: 'Realtime', items: [{ name: 'WebSocket', icon: 'lucide:radio-tower' }] },
			{ category: 'Dados', items: [{ name: 'PostgreSQL', icon: 'simple-icons:postgresql' }] },
			{ category: 'Mensageria', items: [{ name: 'Kafka', icon: 'simple-icons:apachekafka' }] },
			{ category: 'Blockchain', items: [{ name: 'Solidity', icon: 'simple-icons:solidity' }] },
			{
				category: 'Frontend',
				items: [
					{ name: 'TypeScript', icon: 'simple-icons:typescript' },
					{ name: 'WebGL', icon: 'simple-icons:webgl' },
				],
			},
		],
		tags: ['Go', 'PostgreSQL', 'Kafka', 'WebSocket', 'Solidity', 'TypeScript', 'WebGL'],
	},
	{
		year: '2025',
		badge: null,
		image: '/projects/candy-swap/cover.png',
		images: ['/projects/candy-swap/cover.png', '/projects/candy-swap/01.png', '/projects/candy-swap/02.png', '/projects/candy-swap/03.png'],
		title: 'Candy Swap',
		description:
			'Plataforma Web3 de swap de tokens com presale, onde os usuários trocam ativos direto pela carteira usando contratos inteligentes em Solidity. Além da troca on-chain, o presale permite comprar o token via Pix, aproximando quem não tem cripto da compra inicial: o pagamento em reais é confirmado e o token é liberado ao comprador na blockchain.',
		summary: 'Plataforma Web3 de swap de tokens com presale, com contratos em Solidity e compra do token via Pix.',
		role: 'Full-stack',
		metrics: [
			{ value: 'Swap', label: 'troca de tokens on-chain' },
			{ value: 'Presale', label: 'compra do token via Pix' },
			{ value: 'Solidity', label: 'contratos inteligentes' },
		],
		highlights: [
			{
				title: 'Swap on-chain',
				text: 'Troca de tokens pela carteira do usuário, executada por contratos inteligentes em Solidity.',
			},
			{
				title: 'Presale com Pix',
				text: 'Compra do token na pré-venda pagando em reais por Pix, sem precisar ter cripto antes.',
			},
			{
				title: 'Integração Web3',
				text: 'Conexão com carteiras e interação com os contratos direto pela interface.',
			},
		],
		stack: [
			{ category: 'Blockchain', items: [{ name: 'Solidity', icon: 'simple-icons:solidity' }] },
			{ category: 'Pagamentos', items: [{ name: 'Pix', icon: 'lucide:qr-code' }] },
		],
		tags: ['Solidity', 'Web3', 'Swap', 'Presale', 'Pix'],
	},
	{
		year: '2026',
		badge: null,
		image: '/projects/gympfy/cover.png',
		images: ['/projects/gympfy/cover.png', '/projects/gympfy/01.png', '/projects/gympfy/02.png', '/projects/gympfy/03.png'],
		title: 'Gympfy (Presale Solana)',
		description:
			'Presale do token Gympfy ($GYM) na rede Solana, em que os usuários compram o token direto pela carteira durante a pré-venda. O programa on-chain, escrito em Rust, cria o token no padrão Token-2022 com metadata e guarda os fundos e o estoque em um cofre controlado por uma PDA, de modo que nenhuma chave privada tem custódia dos ativos. O preço do token é configurável, e o contrato conta com um sistema de indicação (referral) que vincula compradores a quem os indicou. O frontend em React e TypeScript, estilizado com Tailwind CSS, integra o wallet adapter da Solana para conectar carteiras, consultar o estado da presale e enviar as transações de compra.',
		summary: 'Presale do token $GYM na Solana, com programa em Rust (Token-2022, cofre via PDA, preço configurável e referral) e frontend com conexão de carteira.',
		role: 'Full-stack',
		metrics: [
			{ value: 'Solana', label: 'programa on-chain em Rust' },
			{ value: 'Token-2022', label: 'token com metadata' },
			{ value: 'Referral', label: 'sistema de indicação on-chain' },
		],
		highlights: [
			{
				title: 'Programa em Rust na Solana',
				text: 'Lógica da presale executada on-chain, com compra do token direto pela carteira do usuário.',
			},
			{
				title: 'Token-2022 com metadata',
				text: 'Token criado no padrão Token-2022, com metadata associada ao mint.',
			},
			{
				title: 'Cofre com PDA',
				text: 'Fundos e estoque sob autoridade de uma PDA, sem chave privada com custódia dos ativos.',
			},
			{
				title: 'Preço configurável',
				text: 'Parâmetros de preço da presale ajustáveis pela autoridade do programa.',
			},
			{
				title: 'Sistema de referral',
				text: 'Compradores vinculados a quem os indicou, com a indicação registrada on-chain.',
			},
			{
				title: 'Frontend com wallet adapter',
				text: 'Conexão de carteiras Solana, leitura do estado da presale e envio das transações de compra, com interface em Tailwind CSS.',
			},
		],
		stack: [
			{
				category: 'Blockchain',
				items: [
					{ name: 'Solana', icon: 'simple-icons:solana' },
					{ name: 'Rust', icon: 'simple-icons:rust' },
				],
			},
			{
				category: 'Frontend',
				items: [
					{ name: 'TypeScript', icon: 'simple-icons:typescript' },
					{ name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
				],
			},
		],
		tags: ['Solana', 'Rust', 'TypeScript', 'Tailwind CSS', 'Web3', 'Presale'],
	},
	{
		year: '2024',
		badge: null,
		image: '/projects/liderlocadora/cover.png',
		images: [
			'/projects/liderlocadora/cover.png',
			'/projects/liderlocadora/01.png',
			'/projects/liderlocadora/02.png',
			'/projects/liderlocadora/03.png',
			'/projects/liderlocadora/04.png',
		],
		title: 'Liderlocadora',
		description:
			'Plataforma multi-tenant para gestão de locadoras de motos, pensada para operar várias franquias no mesmo sistema, cada uma com seus dados isolados. Reúne o controle completo da frota (cadastro de motos, status, manutenções e vistorias), o fluxo de locações e a gestão de produtos de loja. O painel administrativo web dá visão geral da operação, enquanto o app mobile em React Native leva a rotina para o campo: vistoria em etapas com captura de fotos e assinatura digital, geração de PDF e sessão segura com refresh token. Todas as ações administrativas ficam registradas em um log de auditoria com visualização das alterações campo a campo, e o backend em NestJS com Prisma e PostgreSQL foi otimizado com índices para manter as consultas rápidas conforme a base cresce.',
		summary: 'Sistema multi-tenant para gerenciar locações de motos e produtos de loja de várias franquias, com painel web, app mobile de vistoria e auditoria completa.',
		role: 'Full-stack',
		metrics: [
			{ value: 'Multi-tenant', label: 'dados isolados por franquia' },
			{ value: 'Web + Mobile', label: 'painel admin e app de campo' },
			{ value: 'Auditoria', label: 'com diff das alterações' },
		],
		highlights: [
			{
				title: 'Arquitetura multi-tenant',
				text: 'Várias franquias operando no mesmo sistema, cada uma com seus dados, frota, locações e produtos separados.',
			},
			{
				title: 'Gestão de frota e locações',
				text: 'Cadastro de motos, controle de status, filtros de manutenção e acompanhamento do ciclo de cada locação.',
			},
			{
				title: 'Produtos de loja',
				text: 'Catálogo e controle dos produtos vendidos pelas franquias junto da operação de locação.',
			},
			{
				title: 'Vistoria digital no app',
				text: 'Formulário em etapas com upload de fotos, assinatura na tela e geração de PDF do laudo.',
			},
			{
				title: 'Auditoria de ponta a ponta',
				text: 'Registro das ações administrativas com visualização das diferenças entre antes e depois de cada alteração.',
			},
			{
				title: 'Autenticação e performance',
				text: 'Sessão persistente com refresh token e controle de concorrência, mais índices no banco para consultas rápidas.',
			},
		],
		stack: [
			{
				category: 'Backend',
				items: [
					{ name: 'NestJS', icon: 'simple-icons:nestjs' },
					{ name: 'Prisma', icon: 'simple-icons:prisma' },
				],
			},
			{
				category: 'Frontend',
				items: [
					{ name: 'React', icon: 'simple-icons:react' },
					{ name: 'TypeScript', icon: 'simple-icons:typescript' },
				],
			},
			{
				category: 'Mobile',
				items: [
					{ name: 'React Native', icon: 'simple-icons:react' },
					{ name: 'Expo', icon: 'simple-icons:expo' },
				],
			},
			{ category: 'Dados', items: [{ name: 'PostgreSQL', icon: 'simple-icons:postgresql' }] },
		],
		tags: ['NestJS', 'React Native', 'React', 'PostgreSQL'],
	},
	{
		year: '2024',
		badge: null,
		image: '/projects/liderlocadora-app/cover.jpeg',
		images: [
			'/projects/liderlocadora-app/cover.jpeg',
			'/projects/liderlocadora-app/01.png',
			'/projects/liderlocadora-app/02.jpeg',
			'/projects/liderlocadora-app/03.jpeg',
			'/projects/liderlocadora-app/04.jpeg',
			'/projects/liderlocadora-app/05.png',
		],
		title: 'Liderlocadora (App)',
		description:
			'Aplicativo mobile da plataforma Liderlocadora, criado para levar a rotina de campo das franquias de locação de motos para o celular. O fluxo principal é a vistoria digital em etapas: o vistoriador preenche o formulário, captura fotos da moto, coleta a assinatura na própria tela e gera o laudo em PDF. A sessão é persistente e segura, com refresh token, e o app consome a mesma API multi-tenant do painel administrativo, respeitando o isolamento de dados de cada franquia. Desenvolvido em React Native com Expo e TypeScript.',
		summary: 'App mobile de campo da Liderlocadora: vistoria em etapas com fotos, assinatura digital e geração de laudo em PDF.',
		role: 'Mobile',
		metrics: [
			{ value: 'Mobile', label: 'React Native + Expo' },
			{ value: 'Vistoria', label: 'em etapas, com fotos e assinatura' },
			{ value: 'PDF', label: 'laudo gerado no app' },
		],
		highlights: [
			{
				title: 'Vistoria em etapas',
				text: 'Formulário dividido em passos, guiando o vistoriador do início ao fim da inspeção da moto.',
			},
			{
				title: 'Captura de fotos',
				text: 'Registro fotográfico direto pela câmera do celular, anexado ao laudo da vistoria.',
			},
			{
				title: 'Assinatura digital',
				text: 'Assinatura coletada na tela do dispositivo, sem papel.',
			},
			{
				title: 'Laudo em PDF',
				text: 'Geração do PDF da vistoria no próprio app, pronto para compartilhar ou arquivar.',
			},
			{
				title: 'Sessão segura',
				text: 'Autenticação com refresh token para manter o usuário logado com segurança.',
			},
			{
				title: 'Integração multi-tenant',
				text: 'Consumo da API compartilhada com o painel web, com dados isolados por franquia.',
			},
		],
		stack: [
			{
				category: 'Mobile',
				items: [
					{ name: 'React Native', icon: 'simple-icons:react' },
					{ name: 'Expo', icon: 'simple-icons:expo' },
				],
			},
			{ category: 'Linguagem', items: [{ name: 'TypeScript', icon: 'simple-icons:typescript' }] },
		],
		tags: ['React Native', 'Expo', 'TypeScript'],
	},
];
