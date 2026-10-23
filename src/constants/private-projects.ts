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
];
