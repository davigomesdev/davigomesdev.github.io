<script lang="ts">
	import type { Props } from '$lib/components/ui/button/index.js';
	import type { WithoutChildren } from 'bits-ui';

	import { cn } from '$lib/utils.js';
	import { getEmblaContext } from './context.js';

	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';

	import Button from '$lib/components/ui/button/button.svelte';

	let { ref = $bindable(null), class: className, variant = 'outline', size = 'icon-sm', ...restProps }: WithoutChildren<Props> = $props();

	const emblaCtx = getEmblaContext('<Carousel.Next/>');
</script>

<Button
	class={cn(
		'rounded-full absolute touch-manipulation',
		emblaCtx.orientation === 'horizontal' ? '-inset-e-12 top-1/2 -translate-y-1/2' : 'inset-s-1/2 -bottom-12 -translate-x-1/2 rotate-90',
		className,
	)}
	aria-disabled={!emblaCtx.canScrollNext}
	data-slot="carousel-next"
	disabled={!emblaCtx.canScrollNext}
	onclick={emblaCtx.scrollNext}
	onkeydown={emblaCtx.handleKeyDown}
	{size}
	{variant}
	bind:ref
	{...restProps}
>
	<ChevronRightIcon />
	<span class="sr-only">Next slide</span>
</Button>
