<script lang="ts">
	import type { WithElementRef } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils.js';

	let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLAttributes<HTMLHeadingElement>> = $props();
</script>

<h1 bind:this={ref} class={cn('scroll-m-20 text-4xl text-foreground font-extrabold tracking-tight lg:text-5xl', className)} data-slot="typography-h1" {...restProps}>
	{@render children?.()}
</h1>
