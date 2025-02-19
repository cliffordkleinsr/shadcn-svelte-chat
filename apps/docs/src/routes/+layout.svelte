<script lang="ts">
	import '../app.css';
	import * as Sidebar from '$lib/components/ui/sidebar/';
	import AppSidebar from '$lib/components/ui/app-sidebar.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Command from '$lib/components/ui/command';
	import Github from 'lucide-svelte/icons/github';
	import { ModeWatcher } from "mode-watcher";
	let { children } = $props();

	const menuitems = {
		data: [
			{
				title: 'Introduction',
				url: '/',
				items: []
			},
			{
				title: 'Get Started',
				url: '/',
				items: []
			},
			{
				title: 'Component Anatomy',
				url: '/',
				items: []
			}
		]
	};
	let open = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			open = !open;
		}
	}
</script>
<ModeWatcher />
<svelte:document onkeydown={handleKeydown} />
<Sidebar.Provider>
	<AppSidebar {...menuitems} />
	<Sidebar.Inset>
		<header
			class="sticky top-0 z-10 flex h-16 w-full items-center gap-2 rounded-tl-lg border-b px-4 backdrop-blur-lg"
		>
			<Sidebar.Trigger />
			<Separator orientation="vertical" class="mr-2 h-4" />

			<div class="ml-auto flex gap-2">
				<p class="text-sm text-muted-foreground">
					Press
					<kbd
						class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
					>
						<span class="text-xs">⌘</span>K
					</kbd>
				</p>
				<Command.Dialog bind:open>
					<Command.Input placeholder="Type a command or search..." />
					<Command.List>
						<Command.Empty>No results found.</Command.Empty>
						<Command.Group heading="Suggestions">
							<Command.Item>Calendar</Command.Item>
							<Command.Item>Search Emoji</Command.Item>
							<Command.Item>Calculator</Command.Item>
						</Command.Group>
					</Command.List>
				</Command.Dialog>
				<a href="##">
					<Github />
				</a>
			</div>
		</header>
		<main>
			{@render children?.()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
