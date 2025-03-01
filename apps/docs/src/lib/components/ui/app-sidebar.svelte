<script lang="ts" module>
	// sample data
	const data = {
		versions: ['1.2.3'],
		navMain: [
			{
				title: 'Introduction',
				url: '#',
				items: [
					{
						title: 'Introduction',
						url: '/'
					}
				]
			},
			{
				title: 'Get Started',
				url: '#',
				items: [
					{
						title: 'Get Started',
						url: '/get-started'
					}
				]
			},
			{
				title: 'Component Anatomy',
				url: '',
				items: [
					{
						title: 'Chat Bubble',
						url: '/reference/chat-bubble'
					},
					{
						title: 'Chat Input',
						url: '/reference/chat-input'
					},
					{
						title: 'Chat Message List',
						url: '/reference/chat-message-list'
					},
					{
						title: 'Expandable chat',
						url: '/reference/expandable-chat'
					}
				]
			},
			{
				title: 'Examples',
				url: '',
				items: [
					{
						title: 'Messenger',
						url: '/examples/messenger'
					}
				]
			}
		]
	};
</script>

<script lang="ts">
	import SearchForm from './search-form.svelte';
	import VersionSwitcher from './version-switcher.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/';
	import type { ComponentProps } from 'svelte';
	import { page } from '$app/state';
	import { Button } from './button';
	import { toggleMode } from 'mode-watcher';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	const sidebar = Sidebar.useSidebar();
	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {...restProps} bind:ref>
	<Sidebar.Header>
		<VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
		<SearchForm />
	</Sidebar.Header>
	<Sidebar.Content>
		<!-- We create a Sidebar.Group for each parent. -->
		{#each data.navMain as group (group.title)}
			<Sidebar.Group>
				<Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each group.items as item (item.title)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton isActive={page.url.pathname === item.url}>
									{#snippet child({ props })}
										<a
											href={item.url}
											onclick={() => {
												if (sidebar.isMobile) {
													sidebar.toggle();
												}
											}}
											{...props}
										>
											{item.title}
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
	<!-- footer -->
	<Sidebar.Footer>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuSubItem>
					<Sidebar.MenuButton>
						{#snippet child({ props })}
							<Button onclick={toggleMode} variant="ghost" size="icon" {...props} class="w-20">
								<Sun
									class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
								/>
								<Moon
									class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
								/>
								<span class="sr-only">Toggle theme</span>
							</Button>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuSubItem>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
