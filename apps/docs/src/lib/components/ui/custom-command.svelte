<script lang="ts">
	import { resetMode, setMode } from 'mode-watcher';
	import { cn } from '$lib/utils.js';
	import { goto } from '$app/navigation';
	import Button from './button/button.svelte';
	import * as Command from '$lib/components/ui/command';
	import Circle from 'lucide-svelte/icons/circle';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { docsConfig } from '$lib/configs/docs';
	import { File, Laptop } from 'lucide-svelte';

	let open = $state(false);

	$effect(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				open = true;
			}
		}
		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	function runCommand(cmd: () => void) {
		open = false;
		cmd();
	}

	const mainNav = docsConfig.mainNav.filter((item) => !item.external);
	// const sidebarNav = docsConfig.sidebarNav;
</script>

<Button
	variant="outline"
	class={['text-muted-foreground relative justify-start text-sm sm:pr-12']}
	onclick={() => (open = true)}
>
	<span class="hidden lg:inline-flex"> Search documentation... </span>
	<span class="inline-flex lg:hidden">Search...</span>
	<kbd
		class="bg-muted pointer-events-none absolute top-1.5 right-1.5 hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex"
	>
		<span class="text-xs">⌘</span>K
	</kbd>
</Button>
<Command.Dialog bind:open>
	<Command.Input placeholder="Type a command or search" class="w-full" />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Links">
			{#each mainNav as navItem}
				<Command.Item
					value={navItem.title}
					onSelect={() =>
						runCommand(() => {
							navItem.href && goto(navItem.href);
						})}
				>
					<File class="mr-2 h-4 w-4" />
					{navItem.title}
				</Command.Item>
			{/each}
		</Command.Group>
		<!-- {#each sidebarNav as group}
			<Command.Group heading={group.title}>
				{#each group.items as navItem}
					<Command.Item
						value={navItem.title}
						onSelect={() =>
							runCommand(() => {
								navItem.href && goto(navItem.href);
							})}
					>
						<div class="mr-2 flex h-4 w-4 items-center justify-center">
							<Circle class="h-3 w-3" />
						</div>
						{navItem.title}
					</Command.Item>
				{/each}
			</Command.Group>
		{/each} -->
		<Command.Separator />
		<Command.Group heading="Theme">
			<Command.Item value="light" onSelect={() => runCommand(() => setMode('light'))}>
				<Sun class="mr-2 h-4 w-4" />
				Light
			</Command.Item>
			<Command.Item value="dark" onSelect={() => runCommand(() => setMode('dark'))}>
				<Moon class="mr-2 h-4 w-4" />
				Dark
			</Command.Item>
			<Command.Item value="system" onSelect={() => runCommand(() => resetMode())}>
				<Laptop class="mr-2 h-4 w-4" />
				System
			</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Dialog>
