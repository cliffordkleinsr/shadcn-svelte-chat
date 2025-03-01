<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLFormAttributes } from 'svelte/elements';
	import CustomCommand from './custom-command.svelte';

	let { ref = $bindable(null), ...restProps }: WithElementRef<HTMLFormAttributes> = $props();
</script>

<form bind:this={ref} {...restProps}>
	<Sidebar.Group class="py-0">
		<Sidebar.GroupContent class="relative">
			<Label for="search" class="sr-only">Search</Label>
			<CustomCommand />
		</Sidebar.GroupContent>
	</Sidebar.Group>
</form>
