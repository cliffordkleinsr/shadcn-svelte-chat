<script lang="ts">
	import type { DivableProps } from '$lib/types.js';

	let { class: className, ...restProps }: DivableProps = $props();
</script>

<div class={['border-t p-4', className]} {...restProps}></div>
