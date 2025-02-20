<script lang="ts">
	import { Label } from './label/index.js';
	import * as Sidebar from './sidebar/index.js';
	import type { WithElementRef } from 'bits-ui';
	import Search from 'lucide-svelte/icons/search';
	import type { HTMLFormAttributes } from 'svelte/elements';
	import CustomCommand from './custom-command.svelte';

	let { ref = $bindable(null), ...restProps }: WithElementRef<HTMLFormAttributes> = $props();
</script>

<form bind:this={ref} {...restProps}>
	<Sidebar.Group class="py-0">
		<Sidebar.GroupContent class="relative">
			<CustomCommand />
		</Sidebar.GroupContent>
	</Sidebar.Group>
</form>
