<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Dialog as SheetPrimitive } from 'bits-ui';

	let { ref = $bindable(null), class: className, ...restProps }: SheetPrimitive.TitleProps = $props();
</script>

<SheetPrimitive.Title class={cn('text-foreground font-medium', className)} data-slot="sheet-title" bind:ref {...restProps} />
