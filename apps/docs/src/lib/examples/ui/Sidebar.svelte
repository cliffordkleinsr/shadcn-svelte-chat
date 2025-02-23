<script lang="ts">
	import { MoreHorizontal, SquarePen } from 'lucide-svelte';
	import type { Message } from '../data/data';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import * as Avatar from '$lib/components/ui/avatar';

	// Assuming you have a button component// Assuming you have a tooltip component
	// Assuming you have an avatar component
	// Assuming you have a data.ts with Message type

	interface SidebarProps {
		isCollapsed: boolean;
		chats: {
			name: string;
			messages: Message[];
			avatar: string;
			variant: 'secondary' | 'ghost';
		}[];
		onclick?: () => void;
		isMobile: boolean;
	}

	interface Props {
		isCollapsed: boolean;
		chats: SidebarProps['chats'];
		isMobile: boolean;
	}

	let { isCollapsed, chats, isMobile }: Props = $props();
</script>

<div
	data-collapsed={isCollapsed}
	class="group bg-muted/10 dark:bg-muted/20 relative flex h-full flex-col gap-4 p-2 data-[collapsed=true]:p-2"
>
	{#if !isCollapsed}
		<div class="flex items-center justify-between p-2">
			<div class="flex items-center gap-2 text-2xl">
				<p class="font-medium">Chats</p>
				<span class="text-zinc-300">({chats.length})</span>
			</div>

			<div>
				<a href="##" class={[buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9']}>
					<MoreHorizontal size={20} />
				</a>

				<a href="##" class={[buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9']}>
					<SquarePen size={20} />
				</a>
			</div>
		</div>
	{/if}
	<nav
		class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2"
	>
		{#each chats as chat, index}
			{#if isCollapsed}
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger>
							{#snippet child({ props })}
								<a
									href="##"
									class={[
										buttonVariants({ variant: chat.variant, size: 'icon' }),
										'h-11 w-11 md:h-16 md:w-16',
										chat.variant === 'secondary' &&
											'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
									]}
									{...props}
								>
									<Avatar.Root>
										<Avatar.Image
											src={chat.avatar}
											alt={chat.avatar}
											width={6}
											height={6}
											class="h-10 w-10"
										/>
										<Avatar.Fallback>{chat.avatar}</Avatar.Fallback>
									</Avatar.Root>
									<span class="sr-only">{chat.name}</span>
								</a>
							{/snippet}
						</Tooltip.Trigger>
						<Tooltip.Content side="right" class="flex items-center gap-4">
							{chat.name}
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
			{:else}
				<a
					href="##"
					class={[
						buttonVariants({ variant: chat.variant, size: 'lg' }),
						chat.variant === 'secondary' &&
							'dark:bg-muted dark:hover:bg-muted shrink dark:text-white dark:hover:text-white',
						'justify-start gap-4'
					]}
				>
					<Avatar.Root>
						<Avatar.Image
							src={chat.avatar}
							alt={chat.avatar}
							width={6}
							height={6}
							class="h-10 w-10"
						/>
						<Avatar.Fallback>{chat.avatar}</Avatar.Fallback>
					</Avatar.Root>
					<div class="flex max-w-28 flex-col">
						<span>{chat.name}</span>
						{#if chat.messages.length > 0}
							<span class="truncate text-xs text-zinc-300">
								{chat.messages[chat.messages.length - 1].name.split(' ')[0]}:
								{chat.messages[chat.messages.length - 1].isLoading
									? 'Typing...'
									: chat.messages[chat.messages.length - 1].message}
							</span>
						{/if}
					</div>
				</a>
			{/if}
		{/each}
	</nav>
</div>
