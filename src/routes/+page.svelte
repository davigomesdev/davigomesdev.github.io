<script lang="ts">
	import type { CarouselAPI } from '$lib/components/ui/carousel/context';

	import { stacks } from '../constants/stacks';
	import { infras } from '../constants/infras';
	import { designers } from '../constants/designers';
	import { databases } from '../constants/databases';
	import { education } from '../constants/education';
	import { certificates } from '../constants/certificates';
	import { publicProjects } from '../constants/public-projects';
	import { privateProjects } from '../constants/private-projects';
	import { databaseExpertise } from '../constants/database-expertise';

	import { cn } from '$lib/utils';

	import Icon from '@iconify/svelte';
	import MailIcon from '@lucide/svelte/icons/mail';
	import DownloadIcon from '@lucide/svelte/icons/download';

	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Autoplay from 'embla-carousel-autoplay';

	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Carousel from '$lib/components/ui/carousel';
	import * as Typography from '$lib/components/ui/typography';

	let galleryIndexes: Record<string, number> = $state<Record<string, number>>({});
	const galleryApis: Record<string, CarouselAPI | undefined> = {};

	function bindGallery(title: string, api?: CarouselAPI): void {
		galleryApis[title] = api;
		if (!api) return;

		galleryIndexes[title] = api.selectedScrollSnap();

		api.on('select', () => {
			galleryIndexes[title] = api.selectedScrollSnap();
		});
	}
</script>

<main>
	<!-- hero -->
	<section class="relative overflow-hidden border-b border-border" aria-labelledby="hero">
		<div class="pointer-events-none absolute -bottom-40 left-1/2 flex -translate-x-1/2 items-center justify-center">
			<div class="size-140 rounded-full bg-primary/6 blur-[100px]"></div>
			<div class="absolute size-280 rounded-full border border-border/40 dark:border-border/80"></div>
			<div class="absolute size-220 rounded-full border border-dashed border-border/40 dark:border-border/80"></div>
			<div class="absolute size-150 rounded-full border border-border/40"></div>
			<div class="absolute size-100 rounded-full border border-dashed border-border/40"></div>
		</div>

		<div class="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-18 text-center">
			<div class="relative inline-flex items-center justify-center">
				<div class="absolute size-27 animate-spin rounded-full bg-[conic-gradient(from_0deg,transparent_70%,#22c55e_100%)] animation-duration-[3s]"></div>
				<div class="absolute size-25 rounded-full bg-background"></div>

				<Avatar.Root class="relative data-[size=lg]:size-25" size="lg">
					<Avatar.Image alt="Davi Gomes" src="https://github.com/davigomesdev.png" />
					<Avatar.Fallback>DG</Avatar.Fallback>
				</Avatar.Root>
			</div>

			<Typography.H1 id="hero" class="mt-10 max-w-2xl text-center font-bold lg:max-w-3xl">
				Código limpo, alta performance, <span class="text-primary">sistemas que escalam.</span>
			</Typography.H1>
			<Typography.P class="mt-6 max-w-lg text-center">
				Desenvolvedor full-stack com foco em performance e sistemas distribuídos. Java, Go, Rust, Node.js, React, Svelte, Web3 (Solidity & Solana) e bancos relacionais e NoSQL.
			</Typography.P>

			<div class="mt-10 flex flex-col gap-3 max-sm:w-full sm:flex-row">
				<Button class="max-sm:w-full" download="curriculo-davi-gomes.pdf" href="/curriculo-davi-gomes.pdf" size="lg">
					<DownloadIcon />
					Download CV
				</Button>
				<Button class="max-sm:w-full" href="#works" size="lg" variant="outline">Veja meu trabalho</Button>
			</div>
		</div>
	</section>

	<!-- stats -->
	<section class="border-b border-border" aria-labelledby="stats">
		<div id="stats" class="mx-auto grid max-w-5xl grid-cols-2 place-items-center gap-6 p-6 md:grid-cols-4">
			<div class="flex items-center gap-3">
				<Typography.P class="text-3xl font-bold tracking-tight text-primary">5+</Typography.P>
				<Typography.P class="leading-tight">Anos de<br />experiência</Typography.P>
			</div>
			<div class="flex items-center gap-3">
				<Typography.P class="text-3xl font-bold tracking-tight text-primary">12+</Typography.P>
				<Typography.P class="leading-tight">Projetos<br />concluídos</Typography.P>
			</div>
			<div class="flex items-center gap-3">
				<Typography.P class="text-3xl font-bold tracking-tight text-primary">10+</Typography.P>
				<Typography.P class="leading-tight">Tecnologias<br />dominadas</Typography.P>
			</div>
			<div class="flex items-center gap-3">
				<Typography.P class="text-3xl font-bold tracking-tight text-primary">15+</Typography.P>
				<Typography.P class="leading-tight">Cursos<br />certificados</Typography.P>
			</div>
		</div>
	</section>

	<!-- works -->
	<section class="py-10" aria-labelledby="works">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mx-auto max-w-3xl text-center">
				<Typography.H2 id="works">Trabalhos para clientes</Typography.H2>
				<Typography.P class="mx-auto mt-4 max-w-lg">Sistemas e produtos entregues para empresas e clientes reais.</Typography.P>
			</div>

			<div class="px-10">
				<Carousel.Root
					class="mt-16 w-full"
					opts={{
						align: 'start',
						loop: true,
					}}
					plugins={[
						Autoplay({
							delay: 3200,
							stopOnMouseEnter: true,
							stopOnInteraction: false,
						}),
					]}
				>
					<Carousel.Content class="-ms-1">
						{#each privateProjects as privateProject (privateProject.title)}
							{@const gallery = privateProject.images?.length ? privateProject.images : [privateProject.image]}
							{@const activeIndex = galleryIndexes[privateProject.title] ?? 0}
							<Carousel.Item class="ps-1 md:basis-1/2 lg:basis-1/3">
								<div class="h-full p-1">
									<Dialog.Root>
										<Dialog.Trigger class="block h-full w-full text-start">
											<div
												class="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30"
											>
												<div class="p-2">
													<div class="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
														<img class="absolute inset-0 size-full object-cover object-top" alt={privateProject.title} src={privateProject.image} />
													</div>
												</div>

												<div class="flex flex-1 flex-col gap-3 p-5">
													<div class="flex items-center justify-between">
														<span class="font-mono text-xs text-muted-foreground">{privateProject.year}</span>
														{#if privateProject.badge}
															<Badge class="text-primary" variant="secondary">{privateProject.badge}</Badge>
														{/if}
													</div>

													<div class="text-left">
														<Typography.H3 class="text-base">{privateProject.title}</Typography.H3>
														<Typography.P class="mt-1.5 line-clamp-2 leading-relaxed">{privateProject.summary ?? privateProject.description}</Typography.P>
													</div>

													<div class="mt-auto flex flex-wrap gap-1.5">
														{#each privateProject.tags as tag (tag)}
															<Badge class="text-primary" variant="secondary">{tag}</Badge>
														{/each}
													</div>
												</div>
											</div>
										</Dialog.Trigger>
										<Dialog.Content class="max-h-[90vh] min-w-0 gap-0 overflow-hidden p-0 sm:max-w-6xl">
											<div
												class="grid max-h-[90vh] w-full min-w-0 grid-cols-[minmax(0,1fr)] overflow-x-hidden overflow-y-auto md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:overflow-hidden"
											>
												<!-- preview + métricas -->
												<div class="flex min-w-0 flex-col border-border bg-linear-to-br from-primary/10 via-muted to-muted md:border-r">
													<div class="flex flex-1 flex-col justify-center gap-3 p-3">
														{#if gallery.length > 1}
															<Carousel.Root
																class="w-full overflow-hidden rounded-lg border border-border bg-background/40 shadow-xl"
																opts={{ loop: true }}
																setApi={(api) => bindGallery(privateProject.title, api)}
															>
																<Carousel.Content class="ms-0">
																	{#each gallery as src, i (src)}
																		<Carousel.Item class="ps-0">
																			<div class="aspect-4/3 w-full">
																				<img
																					class="size-full object-contain"
																					alt={`Captura de tela ${i + 1} do projeto ${privateProject.title}`}
																					loading={i === 0 ? 'eager' : 'lazy'}
																					{src}
																				/>
																			</div>
																		</Carousel.Item>
																	{/each}
																</Carousel.Content>
																<Carousel.Previous class="inset-s-2" />
																<Carousel.Next class="inset-e-2" />
																<Badge class="absolute right-2 bottom-2" variant="secondary">{activeIndex + 1} / {gallery.length}</Badge>
															</Carousel.Root>

															<ul class="m-0 flex max-w-full list-none gap-2 overflow-x-auto p-0 pb-1">
																{#each gallery as src, i (src)}
																	<li class="shrink-0">
																		<Button
																			class={cn('h-12 w-20 overflow-hidden p-0', activeIndex === i ? 'border-primary' : 'opacity-60 hover:opacity-100')}
																			aria-label={`Ver imagem ${i + 1}`}
																			onclick={() => galleryApis[privateProject.title]?.scrollTo(i)}
																			size="icon"
																			variant="outline"
																		>
																			<img class="size-full object-cover" alt="" loading="lazy" {src} />
																		</Button>
																	</li>
																{/each}
															</ul>
														{:else}
															<div class="aspect-4/3 w-full overflow-hidden rounded-lg border border-border bg-background/40 shadow-xl">
																<img class="size-full object-contain" alt={`Captura de tela do projeto ${privateProject.title}`} src={gallery[0]} />
															</div>
														{/if}
													</div>

													{#if privateProject.metrics?.length}
														<div class="grid grid-cols-3 divide-x divide-border border-t border-border bg-background/60">
															{#each privateProject.metrics as metric (metric.label)}
																<div class="px-3 py-4 text-center">
																	<p class="text-lg font-bold tracking-tight text-primary sm:text-xl">{metric.value}</p>
																	<p class="mt-0.5 text-[11px] leading-tight text-muted-foreground">{metric.label}</p>
																</div>
															{/each}
														</div>
													{/if}
												</div>

												<!-- content -->
												<div class="flex min-w-0 flex-col gap-6 p-6 md:max-h-[90vh] md:overflow-y-auto">
													<div class="pr-10">
														<div class="flex flex-wrap items-center gap-2">
															<span class="font-mono text-xs text-muted-foreground">{privateProject.year}</span>
															{#if privateProject.badge}
																<Badge class="text-primary" variant="secondary">{privateProject.badge}</Badge>
															{/if}
															{#if privateProject.role}
																<Badge variant="outline">{privateProject.role}</Badge>
															{/if}
														</div>

														<Dialog.Title class="mt-2 text-2xl font-bold tracking-tight">{privateProject.title}</Dialog.Title>
														<Dialog.Description class="mt-2 text-sm leading-relaxed text-muted-foreground">
															{privateProject.summary ?? privateProject.description}
														</Dialog.Description>
													</div>

													{#if privateProject.highlights?.length}
														<div>
															<p class="font-mono text-[11px] tracking-widest text-primary uppercase">O que eu construí</p>
															<ul class="mt-3 space-y-3">
																{#each privateProject.highlights as item (item.title)}
																	<li class="flex gap-3">
																		<Icon class="mt-0.5 size-4 shrink-0 text-primary" icon="lucide:circle-check" />
																		<p class="text-sm leading-snug text-muted-foreground">
																			<strong class="font-semibold text-foreground">{item.title}.</strong>
																			{item.text}
																		</p>
																	</li>
																{/each}
															</ul>
														</div>
													{/if}

													{#if privateProject.stack?.length}
														<div>
															<p class="font-mono text-[11px] tracking-widest text-primary uppercase">Stack utilizada</p>
															<div class="mt-3 space-y-3">
																{#each privateProject.stack as group (group.category)}
																	<div class="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
																		<span class="w-24 shrink-0 font-mono text-[11px] text-muted-foreground uppercase">{group.category}</span>
																		<ul class="m-0 flex list-none flex-wrap gap-1.5 p-0">
																			{#each group.items as tech (tech.name)}
																				<li class="flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1 text-xs font-medium">
																					<Icon class="size-3.5 text-primary" icon={tech.icon} />
																					{tech.name}
																				</li>
																			{/each}
																		</ul>
																	</div>
																{/each}
															</div>
														</div>
													{/if}

													{#if privateProject.links?.length}
														<div class="mt-auto flex flex-wrap gap-2 pt-2">
															{#each privateProject.links as link (link.href)}
																<Button href={link.href} rel="noopener noreferrer" size="sm" target="_blank" variant="outline">
																	{link.label}
																	<Icon icon="lucide:external-link" />
																</Button>
															{/each}
														</div>
													{/if}
												</div>
											</div>
										</Dialog.Content>
									</Dialog.Root>
								</div>
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous />
					<Carousel.Next />
				</Carousel.Root>
			</div>
		</div>
	</section>

	<!-- opensource -->
	<section class="py-10" aria-labelledby="opensource">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mx-auto max-w-3xl text-center">
				<Typography.H2 id="opensource">Projetos Open Source</Typography.H2>
				<Typography.P class="mx-auto mt-4 max-w-lg">Projetos pessoais e experimentações públicas no GitHub.</Typography.P>
			</div>

			<div class="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each publicProjects as publicProject (publicProject.title)}
					<Card.Root class="group gap-3 transition-all hover:ring-primary/30">
						<Card.Header class="flex items-start justify-between">
							<span class="font-mono text-xs text-muted-foreground">{publicProject.year}</span>
							<a
								class="text-muted-foreground opacity-50 transition-all group-hover:opacity-100 hover:text-foreground"
								aria-label="Ver no GitHub"
								href={publicProject.github}
								target="_blank"
							>
								<Icon class="size-6" icon="simple-icons:github" />
							</a>
						</Card.Header>

						<Card.Content>
							<Typography.H3 class="text-lg">{publicProject.title}</Typography.H3>
							<Typography.P class="mt-1.5 leading-relaxed">{publicProject.description}</Typography.P>
						</Card.Content>

						<Card.Footer class="mt-auto flex flex-wrap gap-1.5">
							{#each publicProject.tags as tag (tag)}
								<Badge class="text-primary" variant="secondary">{tag}</Badge>
							{/each}
						</Card.Footer>
					</Card.Root>
				{/each}
			</div>

			<div class="mt-8 flex justify-center">
				<Button href="https://github.com/davigomesdev" target="_blank" variant="outline">
					<Icon icon="simple-icons:github" />
					Ver todos no GitHub
				</Button>
			</div>
		</div>
	</section>

	<!-- stacks -->
	<section class="py-10" aria-labelledby="stacks">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mx-auto max-w-3xl text-center">
				<Typography.H2 id="stacks">Especialidades Técnicas</Typography.H2>
				<Typography.P class="mx-auto mt-4 max-w-lg">Tecnologias que uso no dia a dia para construir sistemas robustos e interfaces modernas.</Typography.P>
			</div>

			<div class="mt-16 grid grid-cols-1 divide-border rounded-xl border border-border bg-card max-sm:divide-y sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
				{#each stacks as stack (stack.category)}
					<div class="p-4">
						<Typography.P class="font-mono text-xs tracking-widest uppercase">{stack.category}</Typography.P>
						<ul class="mt-4 flex flex-wrap gap-2">
							{#each stack.items as item (item.name)}
								<li class="flex items-center gap-2.5 rounded-md border border-border bg-background px-2.5 py-2 text-sm font-medium">
									<Icon class="size-4 text-primary" icon={item.icon} />
									<span class="text-sm font-medium text-foreground">{item.name}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- database -->
	<section class="py-10" aria-labelledby="database">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mx-auto max-w-3xl text-center">
				<Typography.H2 id="database">Especialidade em Banco de Dados</Typography.H2>
				<Typography.P class="mx-auto mt-4 max-w-lg">Modelagem, otimização e operação de bancos de dados em sistemas de alta demanda.</Typography.P>
			</div>

			<ul class="mt-6 flex flex-wrap justify-center gap-4">
				{#each databases as item (item.name)}
					<li class="flex items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-3">
						<Icon class="size-6 text-primary" icon={item.icon} />
						<span class="text-sm font-medium text-foreground">{item.name}</span>
					</li>
				{/each}
			</ul>

			<div class="mt-16">
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{#each databaseExpertise as item (item.title)}
						<Card.Root>
							<Card.Content>
								<div class="flex size-9 items-center justify-center rounded-lg bg-primary/10">
									<item.icon class="size-4 text-primary" />
								</div>
								<Typography.H3 class="mt-4 text-lg">{item.title}</Typography.H3>
								<Typography.P class="mt-1.5 leading-relaxed">{item.description}</Typography.P>
							</Card.Content>
						</Card.Root>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- infra -->
	<section class="py-10" aria-labelledby="infra">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mx-auto max-w-3xl text-center">
				<Typography.H2 id="infra">Infraestrutura & DevOps</Typography.H2>
				<Typography.P class="mx-auto mt-4 max-w-lg">Ferramentas que uso para deploy, escalabilidade e operação de sistemas em produção.</Typography.P>
			</div>

			<div class="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{#each infras as infra (infra.name)}
					<Card.Root class="py-5">
						<Card.Content class="flex items-start gap-4 px-5">
							<Icon class="size-7 text-primary" icon={infra.icon} />
							<div>
								<Typography.H3 class="text-sm">
									{infra.name}
								</Typography.H3>
								<Typography.P class="mt-1 text-xs leading-relaxed">
									{infra.description}
								</Typography.P>
							</div>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</div>
	</section>

	<!-- design -->
	<section class="py-10" aria-labelledby="design">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mx-auto max-w-3xl text-center">
				<Typography.H2 id="design">Design & Criação</Typography.H2>
				<Typography.P class="mx-auto mt-4 max-w-lg">
					Criação de identidades visuais, interfaces, materiais gráficos e projetos 3D utilizando as principais ferramentas do mercado.
				</Typography.P>
			</div>

			<div class="mt-16 grid gap-5 md:grid-cols-2">
				<div class="overflow-hidden rounded-xl border border-border md:max-w-100">
					<img class="h-full w-full object-cover" alt="Design & Criação" src="/designer.gif" />
				</div>
				<div class="grid grid-cols-3 rounded-xl border border-border bg-card">
					{#each designers as design (design.name)}
						<div class="flex flex-col items-center justify-center gap-4 border-border p-5 not-nth-[3n]:border-r nth-[-n+3]:border-b">
							<Icon class="size-7 text-primary" icon={design.icon} />
							<div class="text-center">
								<Typography.H3 class="text-sm">{design.name}</Typography.H3>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- certificates -->
	<section class="border-b border-border py-10" aria-labelledby="certificates">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mx-auto max-w-3xl text-center">
				<Typography.H2 id="certificates">Formação & Certificados</Typography.H2>
				<Typography.P class="mx-auto mt-3 max-w-lg">Formação acadêmica e cursos que complementam minha base técnica.</Typography.P>
			</div>

			<!-- main certificates -->
			<div class="mt-14 grid gap-6 sm:grid-cols-2">
				{#each education as item (item.title)}
					<div class="group relative">
						<!-- moldura externa -->
						<div class="absolute inset-0 rounded-xl border border-primary/25 bg-card transition-colors group-hover:border-primary/45"></div>
						<!-- moldura interna -->
						<div class="absolute inset-1.25 rounded-[10px] border border-primary/15"></div>

						<div class="relative flex flex-col items-center px-6 pt-10 pb-6 text-center">
							<!-- selo -->
							<div class="absolute -top-5 left-1/2 -translate-x-1/2">
								<div class="flex size-11 items-center justify-center rounded-full border-2 border-primary/40 bg-background shadow-md">
									<div class="flex size-8 items-center justify-center rounded-full bg-primary/10">
										<Icon class="size-4.5 text-primary" icon="lucide:award" />
									</div>
								</div>
							</div>

							<!-- tipo -->
							<p class="text-[10px] font-semibold tracking-[0.22em] text-primary uppercase">
								{item.type}
							</p>

							<!-- título -->
							<h3 class="mt-3 max-w-65 text-[15px] leading-snug font-semibold tracking-tight">
								{item.title}
							</h3>

							<!-- linha decorativa -->
							<div class="mx-auto mt-3 h-px w-14 bg-primary/40"></div>

							<!-- instituição -->
							<p class="mt-3 text-sm font-medium text-foreground/90">
								{item.institution}
							</p>

							<!-- descrição -->
							<p class="mt-1.5 max-w-60 text-xs leading-relaxed text-muted-foreground">
								{item.description}
							</p>

							<!-- ano -->
							<p class="mt-4 font-mono text-[11px] text-muted-foreground">
								{item.year}
							</p>

							{#if item.link}
								<a class="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline" href={item.link} rel="noopener noreferrer" target="_blank">
									Validar diploma
									<Icon class="size-3" icon="lucide:external-link" />
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>

			<!-- extensions -->
			<div class="mt-10">
				<Typography.P class="mb-7 text-center font-mono text-[11px] tracking-widest text-muted-foreground uppercase">Cursos & Certificações</Typography.P>

				<div class="relative">
					<Carousel.Root
						class="w-full"
						opts={{
							align: 'center',
							loop: true,
						}}
						plugins={[
							Autoplay({
								delay: 3500,
								stopOnMouseEnter: true,
								stopOnInteraction: false,
							}),
						]}
					>
						<Carousel.Content class="-ms-3">
							{#each certificates as cert (cert.title)}
								<Carousel.Item class="basis-[85%] ps-3 pt-3 sm:basis-[45%] lg:basis-[31%]">
									<div class="group relative h-full">
										<div class="absolute inset-0 rounded-lg border border-border bg-card transition-colors group-hover:border-primary/40"></div>
										<div class="absolute inset-1 rounded-md border border-border/50"></div>

										<div class="relative flex h-full flex-col items-center px-6 py-4 text-center">
											<div class="absolute -top-3 left-1/2 -translate-x-1/2">
												<div class="flex size-7 items-center justify-center rounded-full border border-primary/35 bg-background shadow-sm">
													<Icon class="size-3.5 text-primary" icon="lucide:award" />
												</div>
											</div>

											<div class="flex w-full items-center justify-between gap-2">
												<span class="font-mono text-[10px] text-muted-foreground">{cert.date}</span>
												<span class="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
													{cert.hours}
												</span>
											</div>

											<Typography.H3 class="mt-2.5 line-clamp-2 text-[13px] leading-snug font-semibold">
												{cert.title}
											</Typography.H3>

											<Typography.P class="mt-1.5 text-[11px]">
												{cert.issuer} • {cert.instructor}
											</Typography.P>

											<a
												class="mt-auto inline-flex items-center gap-1 pt-3 text-[11px] font-medium text-primary opacity-80 transition-opacity hover:underline hover:opacity-100"
												href={cert.url}
												rel="noopener noreferrer"
												target="_blank"
											>
												Ver certificado
												<Icon class="size-2.5" icon="lucide:external-link" />
											</a>
										</div>
									</div>
								</Carousel.Item>
							{/each}
						</Carousel.Content>
					</Carousel.Root>
				</div>
			</div>
		</div>
	</section>

	<!-- about -->
	<section class="border-b border-border py-16" aria-labelledby="about">
		<div class="mx-auto max-w-4xl px-6">
			<div class="grid items-center gap-10 md:grid-cols-2">
				<div class="text-center">
					<Typography.H2 id="about">Sobre mim</Typography.H2>
					<div class="mt-6 space-y-4">
						<Typography.P>
							Sou Davi Gomes, desenvolvedor full-stack com mais de 5 anos de experiência construindo sistemas que realmente funcionam em produção. Do backend em Rust e Go até
							interfaces em React e Svelte.
						</Typography.P>
						<Typography.P>Também tenho experiência com Web3, tendo desenvolvido smart contracts em Solidity e aplicações na rede Solana.</Typography.P>
					</div>
				</div>

				<div class="flex justify-center">
					<Avatar.Root class="rounded-2xl after:border-none after:border-primary data-[size=lg]:size-48" size="lg">
						<Avatar.Image class="rounded-2xl" alt="Davi Gomes" src="https://github.com/davigomesdev.png" />
						<Avatar.Fallback class="rounded-2xl text-4xl">DG</Avatar.Fallback>
					</Avatar.Root>
				</div>
			</div>
		</div>
	</section>

	<!-- contact -->
	<section class="py-16" aria-labelledby="contact">
		<div class="mx-auto max-w-5xl px-6">
			<div class="mx-auto max-w-3xl text-center">
				<Typography.H2 id="contact">Vamos conversar?</Typography.H2>
				<Typography.P class="mx-auto mt-4 max-w-lg">Disponível para projetos freelance, oportunidades de trabalho e colaborações.</Typography.P>
			</div>

			<div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
				<Button href="mailto:davigomescarmo9@gmail.com" size="lg">
					<MailIcon />
					Enviar email
				</Button>
				<Button href="https://github.com/davigomesdev" size="lg" target="_blank" variant="outline">
					<Icon icon="simple-icons:github" />
					GitHub
				</Button>
				<Button href="https://linkedin.com/in/davigomesdev" size="lg" target="_blank" variant="outline">
					<Icon icon="simple-icons:linkedin" />
					LinkedIn
				</Button>
			</div>
		</div>
	</section>
</main>
