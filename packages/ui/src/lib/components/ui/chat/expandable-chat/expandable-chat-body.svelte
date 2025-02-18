<script lang="ts">
	import type { DivableProps } from '$lib/types.js';
	let { class: className, ...restProps }: DivableProps = $props();
</script>

<div class={['flex-grow overflow-y-auto', className]} {...restProps}></div>
