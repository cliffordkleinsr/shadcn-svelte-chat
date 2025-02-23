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
	import SearchForm from './search-form.svelte';
	import { page } from '$app/state';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	// forms
	const sidebar = useSidebar();
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
	<Sidebar.Header>
		<div class="flex">
			<svg class="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 128 128">
				<path
					fill="#ff3e00"
					d="M110.43 16.936C98.553-.076 75.09-5.118 58.13 5.696l-29.792 19a34.2 34.2 0 0 0-15.48 22.897a25.478 30.64 0 0 0-.572 6.396a36.15 36.15 0 0 0 4.163 16.73A34.4 34.4 0 0 0 11.34 83.5a25.348 30.483 0 0 0 .345 14.412a36.5 36.5 0 0 0 5.9 13.152c11.878 17.01 35.394 22.053 52.3 11.24l29.762-19.001a34.13 34.13 0 0 0 15.438-22.918a35.5 35.5 0 0 0 .572-6.386a36.2 36.2 0 0 0-4.112-16.71a34.4 34.4 0 0 0 5.112-12.77c.369-2.11.557-4.245.562-6.386a36.4 36.4 0 0 0-6.787-21.178z"
				/>
				<path
					fill="#fff"
					d="M55.219 112.662a28.463 34.23 0 0 1-5.954.76a23.64 23.64 0 0 1-19.435-10.187a21.9 21.9 0 0 1-4.08-12.74a15.658 18.83 0 0 1 .333-3.833a15.425 18.55 0 0 1 .72-2.782l.561-1.708l1.52 1.156a38.7 38.7 0 0 0 11.658 5.834l1.104.333l-.104 1.104v.573a6.63 6.63 0 0 0 1.228 3.854a7.1 7.1 0 0 0 2.538 2.288a8.262 9.936 0 0 0 3.312.837a8.251 9.923 0 0 0 1.79-.229a7.272 8.745 0 0 0 1.833-.802l29.76-19.094a6.26 6.26 0 0 0 2.904-5.302a6.62 6.62 0 0 0-1.26-3.844a7.14 7.14 0 0 0-2.553-2.252a8.313 9.997 0 0 0-3.307-.81a8.246 9.917 0 0 0-1.79.23a6.938 8.344 0 0 0-1.822.801l-11.346 7.25a24.376 29.314 0 0 1-6.048 2.656a23.64 23.64 0 0 1-25.39-9.416a21.94 21.94 0 0 1-4.08-12.74c.002-1.285.114-2.567.333-3.833a20.65 20.65 0 0 1 9.286-13.781l29.792-18.99a21.9 21.9 0 0 1 6.048-2.667a24 24 0 0 1 5.954-.75A23.68 23.68 0 0 1 98.22 24.745a21.94 21.94 0 0 1 4.029 12.75a15.748 18.939 0 0 1-.334 3.844a15.407 18.529 0 0 1-.718 2.781l-.562 1.708l-1.52-1.114a38.4 38.4 0 0 0-11.658-5.834l-1.104-.343l.104-1.105v-.572a6.7 6.7 0 0 0-1.228-3.865a7.1 7.1 0 0 0-2.55-2.25a8.309 9.992 0 0 0-3.3-.813a8.221 9.887 0 0 0-1.77.271a6.819 8.2 0 0 0-1.831.802l-29.793 18.99a5.88 7.071 0 0 0-1.836 1.79a4.75 5.713 0 0 0-.963 2.377a5.037 6.057 0 0 0-.136 1.104a6.62 6.62 0 0 0 1.228 3.844a7.1 7.1 0 0 0 2.549 2.25a8.299 9.98 0 0 0 3.301.812a8.247 9.918 0 0 0 1.79-.23a6.943 8.35 0 0 0 1.833-.801l11.367-7.292a24.218 29.125 0 0 1 6.048-2.656a28.526 34.305 0 0 1 5.954-.76A23.66 23.66 0 0 1 96.566 60.61a21.94 21.94 0 0 1 3.737 16.614a20.6 20.6 0 0 1-9.286 13.781l-29.74 18.99a24.308 29.233 0 0 1-6.057 2.667z"
				/>
			</svg>
			<p
				class="bg-gradient-to-r from-red-500 to-indigo-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl"
			>
				hadcn chat
			</p>
		</div>
		<SearchForm />
	</Sidebar.Header>
	<Sidebar.Content>
		<!-- navigation items -->

		<Sidebar.Group />
		<Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
		<Sidebar.GroupContent>
			<Sidebar.Menu>
				{#each data as group (group.title)}
					<Collapsible.Root open class="group/collapsible">
						<Sidebar.MenuItem>
							<Sidebar.MenuButton isActive={page.url.pathname === group.url}>
								{#snippet child({ props })}
									<Collapsible.Trigger {...props}>
										<a
											href={group.url}
											{...props}
											onclick={() => {
												if (sidebar.isMobile && group.title !== 'Component Anatomy') {
													setTimeout(() => sidebar.toggle(), 300);
												}
											}}
										>
											<span>{group.title}</span>
										</a>
									</Collapsible.Trigger>
									<Collapsible.Content>
										<Sidebar.MenuSub>
											{#each group.items as item (item.title)}
												<Sidebar.MenuSubItem>
													<Sidebar.MenuButton isActive={page.url.pathname === item.url}>
														{#snippet child({ props })}
															<a
																href={item.url}
																{...props}
																onclick={() => {
																	if (sidebar.isMobile) {
																		setTimeout(() => sidebar.toggle(), 300);
																	}
																}}
															>
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
</Sidebar.Root>
