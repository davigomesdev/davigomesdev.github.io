<script lang="ts">
	import type { WithElementRef } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils.js';

	let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLAttributes<HTMLHeadingElement>> = $props();
</script>

<h4 bind:this={ref} class={cn('scroll-m-20 text-foreground text-xl font-semibold tracking-tight', className)} data-slot="typography-h4" {...restProps}>
	{@render children?.()}
</h4>
