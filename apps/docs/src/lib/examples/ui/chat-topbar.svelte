<script lang="ts" module>
	import Video from 'lucide-svelte/icons/video';
	import Info from 'lucide-svelte/icons/info';
	import Phone from 'lucide-svelte/icons/phone';
	import * as Avatar from '$lib/components/ui/avatar';

	export const TopbarIcons = [{ icon: Phone }, { icon: Video }, { icon: Info }];
</script>

<script lang="ts">
	import ExpandableChatHeader from '$lib/components/ui/chat/expandable-chat/expandable-chat-header.svelte';
	import type { UserData } from '../data/data';
	import { buttonVariants } from '$lib/components/ui/button';

	interface ChatTopbarProps {
		selectedUser: UserData;
	}

	let { selectedUser }: ChatTopbarProps = $props();
</script>

<ExpandableChatHeader>
	<div class="flex items-center gap-2">
		<Avatar.Root class="flex items-center justify-center">
			<Avatar.Image
				src={selectedUser.avatar}
				alt={selectedUser.name}
				width={6}
				height={6}
				class="h-10 w-10 "
			/>
			<Avatar.Fallback>{selectedUser.name}</Avatar.Fallback>
		</Avatar.Root>
		<div class="flex flex-col">
			<span class="font-medium">{selectedUser.name}</span>
			<span class="text-xs">Active 2 mins ago</span>
		</div>
	</div>
	<div class="flex gap-1">
		{#each TopbarIcons as { icon }, index}
			{@const Icon = icon}
			<a href="##" class={[buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9']}>
				<Icon size={20} class="text-muted-foreground" />
			</a>
		{/each}
	</div>
</ExpandableChatHeader>
