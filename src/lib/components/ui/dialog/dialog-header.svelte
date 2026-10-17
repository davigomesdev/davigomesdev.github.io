<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { WithElementRef } from '$lib/utils';

	import { cn } from '$lib/utils';

	let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div bind:this={ref} class={cn('gap-2 flex flex-col', className)} data-slot="dialog-header" {...restProps}>
	{@render children?.()}
</div>
