<script lang="ts">
	import * as Sidebar from './sidebar';
	import * as DropdownMenu from './dropdown-menu';

	// Lucide Svelte
	import ChevronUp from 'lucide-svelte/icons/chevron-up';
	import * as Collapsible from './collapsible';
	import { toggleMode } from 'mode-watcher';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { Button } from './button';
	// forms

	interface Barside {
		title: string;
		url: string;
		items: any[];
	}

	interface Composition {
		data: Barside[];
	}
	let { data }: Composition = $props();
</script>

<Sidebar.Root variant="inset">
	<Sidebar.Header />
	<Sidebar.Content>
		<!-- navigation items -->

		<Sidebar.Group />
		<Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
		<Sidebar.GroupContent>
			<Sidebar.Menu>
				{#each data as group (group.title)}
					<Collapsible.Root open class="group/collapsible">
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<Collapsible.Trigger {...props}>
										<a href={group.url} {...props}>
											<span>{group.title}</span>
										</a>
									</Collapsible.Trigger>
									<Collapsible.Content>
										<Sidebar.MenuSub>
											{#each group.items as item (item.title)}
												<Sidebar.MenuSubItem>
													<Sidebar.MenuButton>
														{#snippet child({ props })}
															<a href={item.url} {...props}>
																<item.icon />
																{item.title}
															</a>
														{/snippet}
													</Sidebar.MenuButton>
												</Sidebar.MenuSubItem>
											{/each}
										</Sidebar.MenuSub>
									</Collapsible.Content>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					</Collapsible.Root>
				{/each}
			</Sidebar.Menu>
		</Sidebar.GroupContent>
		<Sidebar.Group />
	</Sidebar.Content>
	<!-- footer -->
	<Sidebar.Footer>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuSubItem>
					<Sidebar.MenuButton class="flex justify-start">
						{#snippet child({ props })}
							<Button onclick={toggleMode} variant="ghost" size="icon" {...props} class="w-20">
								<Sun
									class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
								/>
								<Moon
									class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
								/>
								<span class="sr-only">Toggle theme</span>
							</Button>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuSubItem>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Footer>
</Sidebar.Root>
