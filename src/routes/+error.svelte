<script lang="ts">
	import { page } from '$app/state';

	import { SITE } from '../constants/site';

	import Icon from '@iconify/svelte';
	import HouseIcon from '@lucide/svelte/icons/house';

	import Button from '$lib/components/ui/button/button.svelte';

	import * as Typography from '$lib/components/ui/typography';

	const isNotFound = $derived(page.status === 404);

	const title = $derived(isNotFound ? 'Página não encontrada' : 'Algo deu errado');
	const description = $derived(
		isNotFound ? 'O endereço que você acessou não existe ou foi movido.' : (page.error?.message ?? 'Ocorreu um erro inesperado. Tente novamente em instantes.'),
	);
</script>

<svelte:head>
	<title>{page.status} | {SITE.name}</title>
</svelte:head>

<main>
	<section class="relative overflow-hidden" aria-labelledby="error">
		<div class="pointer-events-none absolute -bottom-40 left-1/2 flex -translate-x-1/2 items-center justify-center">
			<div class="size-140 rounded-full bg-primary/6 blur-[100px]"></div>
			<div class="absolute size-280 rounded-full border border-border/40 dark:border-border/80"></div>
			<div class="absolute size-220 rounded-full border border-dashed border-border/40 dark:border-border/80"></div>
			<div class="absolute size-150 rounded-full border border-border/40"></div>
			<div class="absolute size-100 rounded-full border border-dashed border-border/40"></div>
		</div>

		<div class="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 py-18 text-center">
			<p class="text-8xl font-bold tracking-tight text-primary sm:text-9xl">{page.status}</p>

			<Typography.H1 id="error" class="mt-6 max-w-2xl text-center font-bold">{title}</Typography.H1>
			<Typography.P class="mt-4 max-w-lg text-center">{description}</Typography.P>

			<div class="mt-10 flex flex-col gap-3 max-sm:w-full sm:flex-row">
				<Button class="max-sm:w-full" href="/" size="lg">
					<HouseIcon />
					Voltar ao início
				</Button>
				<Button class="max-sm:w-full" href="/#works" size="lg" variant="outline">
					<Icon icon="lucide:folder-open" />
					Ver projetos
				</Button>
			</div>
		</div>
	</section>
</main>
