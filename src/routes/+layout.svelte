<script lang="ts">
	import './layout.css';

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

	let { children } = $props();
</script>

<svelte:head>
	<title>Davi Gomes | Full-stack Developer</title>
	<link href={favicon} rel="icon" />
</svelte:head>

<ModeWatcher defaultMode="dark" defaultTheme="dark" />

<header class="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
	<nav class="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
		<a class="flex items-center gap-2" href="/">
			<img class="size-8" alt="dev" src={favicon} />
			<span class="font-bold tracking-tight">Davi Gomes</span>
		</a>

		<ul
			class="[&_a]:text-muted-foreground [&_a]:text-sm [&_a]:font-medium [&_a]:transition-colors [&_a:hover]:text-primary hidden items-center gap-6 min-[900px]:flex list-none m-0 p-0"
		>
			{#each links as link (link.href)}
				<li><a href={link.href}>{link.label}</a></li>
			{/each}
		</ul>

		<div class="min-[900px]:flex items-center gap-3 hidden">
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
							<img class="size-8" alt="dev" src={favicon} />
							<span class="font-bold tracking-tight">Davi Gomes</span>
						</a>
					</Sheet.Title>
				</Sheet.Header>

				<ul class="flex flex-col gap-1 list-none m-0 p-0 mt-6 px-4">
					{#each links as link (link.href)}
						<li>
							<a class="text-muted-foreground text-sm font-medium transition-colors hover:text-primary block py-2" href={link.href}>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>

				<Sheet.Footer>
					<Button class="w-full" onclick={toggleMode} size="sm" variant="outline">
						<div class="relative flex items-center justify-center size-[1.2rem]">
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
	<div class="mx-auto max-w-5xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
		<div class="flex items-center gap-2">
			<img class="size-8" alt="dev" src={favicon} />
			<span class="font-bold tracking-tight">Davi Gomes</span>
		</div>

		<Typography.P class="text-xs text-muted-foreground">
			© {new Date().getFullYear()} Davi Gomes. Todos os direitos reservados.
		</Typography.P>

		<ul class="flex items-center gap-3 list-none m-0 p-0">
			<li>
				<a class="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub" href="https://github.com/davigomesdev" target="_blank">
					<Icon class="size-4" icon="simple-icons:github" />
				</a>
			</li>
			<li>
				<a class="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn" href="https://linkedin.com/in/davigomesdev" target="_blank">
					<Icon class="size-4" icon="simple-icons:linkedin" />
				</a>
			</li>
			<li>
				<a class="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp" href="https://wa.me/5581989714939" target="_blank">
					<Icon class="size-4" icon="simple-icons:whatsapp" />
				</a>
			</li>
		</ul>
	</div>
</footer>
