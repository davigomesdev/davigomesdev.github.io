<script lang="ts">
	import type { WithElementRef } from '$lib/utils.js';
	import type { HTMLBlockquoteAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils.js';

	let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLBlockquoteAttributes> = $props();
</script>

<blockquote bind:this={ref} class={cn('mt-6 border-s-2 ps-6 italic', className)} data-slot="typography-blockquote" {...restProps}>
	{@render children?.()}
</blockquote>
