<script lang="ts" module>
	import FileImage from 'lucide-svelte/icons/file-image';
	import Paperclip from 'lucide-svelte/icons/paperclip';
	import type { Message } from '../data/data';
	import * as Popover from '$lib/components/ui/popover';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Mic, PlusCircle, SendHorizontal, ThumbsUp } from 'lucide-svelte';
	import { animateExit, mercury } from '@omicrxn/mercury';
	import { ChatInput } from '$lib/components/ui/chat';
	import EmojiPicker from './emoji-picker.svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	export const BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }];
</script>

<script lang="ts">
	interface ChatBottombarProps {
		isMobile: boolean;
	}

	let { isMobile }: ChatBottombarProps = $props();
	let message = $state('');
	let inputel = $state() as HTMLTextAreaElement;
	let isLoading = $state(false);

	// const sendMessage = (newMessage: Message) => {
	//     messages.push(newMessage)
	// };
</script>

<div class="flex w-full items-center justify-between gap-2 px-2 py-4">
	<div class="flex">
		<Popover.Root>
			<Popover.Trigger>
				{#snippet child()}
					<a
						href="##"
						class={[buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9', 'shrink-0']}
					>
						<PlusCircle size={22} class="text-muted-foreground" />
					</a>
				{/snippet}
			</Popover.Trigger>
			<Popover.Content side="top" class="w-full p-2">
				{#if message.trim() || isMobile}
					<div class="flex gap-2">
						<a
							href="##"
							class={[buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9', 'shrink-0']}
						>
							<Mic size={22} class="text-muted-foreground" />
						</a>
					</div>
					{#each BottombarIcons as { icon }, index}
						{@const Icon = icon}
						<a
							href="##"
							class={[buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9', 'shrink-0']}
						>
							<Icon size={22} class="text-muted-foreground" />
						</a>
					{/each}
				{:else}
					<a
						href="##"
						class={[buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9', 'shrink-0']}
					>
						<Mic size={22} class="text-muted-foreground" />
					</a>
				{/if}
			</Popover.Content>
		</Popover.Root>
		{#if !message.trim() || !isMobile}
			{#each BottombarIcons as { icon }, index}
				{@const Icon = icon}
				<a
					href="##"
					class={[buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9', 'shrink-0']}
				>
					<Icon size={22} class="text-muted-foreground" />
				</a>
			{/each}
		{/if}
	</div>
</div>
<div
	use:mercury={{
		initial: { opacity: 0, scale: 1 },
		animate: { opacity: 1, scale: 1 }
	}}
	out:animateExit={{
		animate: { opacity: 0, scale: 1 },
		transition: {
			duration: 0.05,
			ease: 'spring'
		}
	}}
>
	{/* @ts-ignore */ null}
	<ChatInput
		bind:value={message}
		ref={inputel}
		placeholder="Type a message..."
		class="rounded-full"
	/>
	<div class="absolute right-4 bottom-2">
		<EmojiPicker />
	</div>
	{#if message.trim()}
		<Button class="h-9 w-9 shrink-0" type="submit" disabled={isLoading} variant="ghost" size="icon">
			<SendHorizontal size={22} className="text-muted-foreground" />
		</Button>
	{:else}
		<Button class="h-9 w-9 shrink-0" disabled={isLoading} variant="ghost" size="icon">
			<ThumbsUp size={22} className="text-muted-foreground" />
		</Button>
	{/if}
</div>
