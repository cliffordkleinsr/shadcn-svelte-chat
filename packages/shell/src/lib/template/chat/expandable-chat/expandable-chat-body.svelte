<script lang="ts">
	import type { DivableProps } from '../../../types.js';
	let { class: className, ...restProps }: DivableProps = $props();
</script>

<div class={['flex-grow overflow-y-auto', className]} {...restProps}></div>
