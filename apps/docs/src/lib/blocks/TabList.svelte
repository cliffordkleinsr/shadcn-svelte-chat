<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';

	let { preview, code } = $props();
</script>

<Tabs.Root value="preview" class="w-full">
	<Tabs.List>
		<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
		<Tabs.Trigger value="code">Code</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="preview" class="rounded-lg border-[1px]">
		{@render preview?.()}
	</Tabs.Content>
	<Tabs.Content value="code" class="h-60 w-90 overflow-y-auto lg:w-full">
		{@render code?.()}
	</Tabs.Content>
</Tabs.Root>
