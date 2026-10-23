<script lang="ts">
	import './layout.css';

	import { SITE } from '../constants/site';

	import { cn } from '$lib/utils';
	import { ModeWatcher, toggleMode } from 'mode-watcher';

	import favicon from '$lib/assets/favicon.svg';

	import Icon from '@iconify/svelte';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import MenuIcon from '@lucide/svelte/icons/menu';

	import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';

	import * as Sheet from '$lib/components/ui/sheet';
	import * as Typography from '$lib/components/ui/typography';

	const links = [
		{
			href: '#works',
			label: 'Projetos',
		},
		{
			href: '#stacks',
			label: 'Tecnologias',
		},
		{
			href: '#database',
			label: 'Banco de Dados',
		},
		{
			href: '#infra',
			label: 'DevOps',
		},
		{
			href: '#about',
			label: 'Sobre',
		},
		{
			href: '#contact',
			label: 'Contato',
		},
	];

	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${SITE.url}/#website`,
				url: SITE.url,
				name: SITE.name,
				inLanguage: 'pt-BR',
			},
			{
				'@type': 'Person',
				'@id': `${SITE.url}/#person`,
				name: SITE.name,
				url: SITE.url,
				image: SITE.avatar,
				jobTitle: SITE.jobTitle,
				description: SITE.description,
				knowsAbout: SITE.knowsAbout,
				sameAs: [SITE.github, SITE.linkedin],
			},
		],
	};

	const jsonLdTag = '<script type="application/ld+json">' + JSON.stringify(jsonLd).replace(/</g, '\\u003c') + '<' + '/script>';

	let { children } = $props();
</script>

<svelte:head>
	<title>{SITE.title}</title>
	<meta name="description" content={SITE.description} />
	<meta name="author" content={SITE.name} />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link href={SITE.url} rel="canonical" />
	<link href={favicon} rel="icon" />

	<!-- Open Graph (WhatsApp, LinkedIn, Facebook, Discord) -->
	<meta content="website" property="og:type" />
	<meta content={SITE.name} property="og:site_name" />
	<meta content={SITE.locale} property="og:locale" />
	<meta content={SITE.url} property="og:url" />
	<meta content={SITE.title} property="og:title" />
	<meta content={SITE.description} property="og:description" />
	<meta content={SITE.ogImage} property="og:image" />
	<meta content="1200" property="og:image:width" />
	<meta content="630" property="og:image:height" />
	<meta content="Davi Gomes – Desenvolvedor Full-stack" property="og:image:alt" />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={SITE.title} />
	<meta name="twitter:description" content={SITE.description} />
	<meta name="twitter:image" content={SITE.ogImage} />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -- JSON-LD estático -->
	{@html jsonLdTag}
</svelte:head>

<ModeWatcher defaultMode="dark" />

<header class="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
	<nav class="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
		<a class="flex items-center gap-2" href="/">
			<img class="size-8" alt="Logo de Davi Gomes" src={favicon} />
			<span class="font-bold tracking-tight">Davi Gomes</span>
		</a>

		<ul
			class="m-0 hidden list-none items-center gap-6 p-0 min-[900px]:flex [&_a]:text-sm [&_a]:font-medium [&_a]:text-muted-foreground [&_a]:transition-colors [&_a:hover]:text-primary"
		>
			{#each links as link (link.href)}
				<li><a href={link.href}>{link.label}</a></li>
			{/each}
		</ul>

		<div class="hidden items-center gap-3 min-[900px]:flex">
			<Button onclick={toggleMode} size="icon-sm" variant="outline">
				<SunIcon class="size-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90" />
				<MoonIcon class="absolute size-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0" />
				<span class="sr-only">Toggle theme</span>
			</Button>
			<Button href="https://wa.me/5581989714939" size="sm" target="_blank">
				Contato
				<Icon icon="simple-icons:whatsapp" />
			</Button>
		</div>

		<Sheet.Root>
			<Sheet.Trigger class={cn(buttonVariants({ variant: 'outline', size: 'icon-sm' }), 'flex min-[900px]:hidden')}>
				<MenuIcon />
			</Sheet.Trigger>
			<Sheet.Content side="right">
				<Sheet.Header>
					<Sheet.Title>
						<a class="flex items-center gap-2" href="/">
							<img class="size-8" alt="Logo de Davi Gomes" src={favicon} />
							<span class="font-bold tracking-tight">Davi Gomes</span>
						</a>
					</Sheet.Title>
				</Sheet.Header>

				<ul class="m-0 mt-6 flex list-none flex-col gap-1 p-0 px-4">
					{#each links as link (link.href)}
						<li>
							<a class="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary" href={link.href}>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>

				<Sheet.Footer>
					<Button class="w-full" onclick={toggleMode} size="sm" variant="outline">
						<div class="relative flex size-[1.2rem] items-center justify-center">
							<SunIcon class="absolute size-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90" />
							<MoonIcon class="absolute size-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0" />
						</div>
						Alternar tema
					</Button>
					<Button href="https://wa.me/5581989714939" size="sm" target="_blank">
						Contato
						<Icon icon="simple-icons:whatsapp" />
					</Button>
				</Sheet.Footer>
			</Sheet.Content>
		</Sheet.Root>
	</nav>
</header>

{@render children()}

<footer class="border-t border-border">
	<div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 p-6 sm:flex-row">
		<div class="flex items-center gap-2">
			<img class="size-8" alt="Logo de Davi Gomes" src={favicon} />
			<span class="font-bold tracking-tight">Davi Gomes</span>
		</div>

		<Typography.P class="text-xs text-muted-foreground">
			© {new Date().getFullYear()} Davi Gomes. Todos os direitos reservados.
		</Typography.P>

		<ul class="m-0 flex list-none items-center gap-3 p-0">
			<li>
				<a class="text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub" href="https://github.com/davigomesdev" target="_blank">
					<Icon class="size-4" icon="simple-icons:github" />
				</a>
			</li>
			<li>
				<a class="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn" href="https://linkedin.com/in/davigomesdev" target="_blank">
					<Icon class="size-4" icon="simple-icons:linkedin" />
				</a>
			</li>
			<li>
				<a class="text-muted-foreground transition-colors hover:text-primary" aria-label="WhatsApp" href="https://wa.me/5581989714939" target="_blank">
					<Icon class="size-4" icon="simple-icons:whatsapp" />
				</a>
			</li>
		</ul>
	</div>
</footer>
