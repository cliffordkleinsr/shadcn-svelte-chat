<script lang="ts">
	import type { DivableProps } from '$lib/types.js';

	let { class: className, ...restProps }: DivableProps = $props();
</script>

<div class={['flex items-center justify-between border-b p-4', className]} {...restProps}></div>
