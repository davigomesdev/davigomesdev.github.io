<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Dialog as SheetPrimitive } from 'bits-ui';

	let { ref = $bindable(null), class: className, ...restProps }: SheetPrimitive.OverlayProps = $props();
</script>

<SheetPrimitive.Overlay class={cn('bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50', className)} data-slot="sheet-overlay" bind:ref {...restProps} />
