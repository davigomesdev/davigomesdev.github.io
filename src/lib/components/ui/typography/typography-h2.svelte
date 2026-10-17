<script lang="ts">
	import type { WithElementRef } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils.js';

	let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLAttributes<HTMLHeadingElement>> = $props();
</script>

<h2 bind:this={ref} class={cn('text-foreground scroll-m-20 text-3xl font-semibold tracking-tight transition-colors', className)} data-slot="typography-h2" {...restProps}>
	{@render children?.()}
</h2>
