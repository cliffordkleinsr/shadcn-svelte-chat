<script lang="ts" module>
	import FileImage from 'lucide-svelte/icons/file-image';
	import Paperclip from 'lucide-svelte/icons/paperclip';
	import { loggedInUserData, type Message } from '../data/data';
	import * as Popover from '$lib/components/ui/popover';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Mic, PlusCircle, SendHorizontal, ThumbsUp } from 'lucide-svelte';
	import { AnimatePresence, motion } from 'motion-start';
	import { ChatInput } from '$lib/components/ui/chat';
	import EmojiPicker from './emoji-picker.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { chatStore, setMessages } from './hooks/useChatStore';

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
// 	const handleInputChange = (event: Event) => {
// 		const target = event.target.v as HTMLTextAreaElement
//     	setMessages(target);
//   };
$inspect(isMobile)
  const sendMessage = (newMessage: Message) => {
    chatStore.update((state) => ({
			...state,
			messages: [...state.messages, newMessage]
	}));
  };

  const handleThumbsUp = () => {
    const newMessage: Message = {
      id: message.length + 1,
      name: loggedInUserData.name,
      avatar: loggedInUserData.avatar,
      message: "👍",
    };
    sendMessage(newMessage);
	chatStore.update((state) => ({ ...state, input:  "" }))
  };

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: message.length + 1,
        name: loggedInUserData.name,
        avatar: loggedInUserData.avatar,
        message: message.trim(),
      };
      sendMessage(newMessage);
	  chatStore.update((state) => ({ ...state, input: "" }))

      if (inputel) {
        inputel.focus();
      }
    }
  };

  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
</script>

<div class="flex w-full items-center justify-between gap-2 px-2 py-4">
	<div class="flex">
		{#if message.trim() || isMobile}
		<Popover.Root>
			<Popover.Trigger>
				{#snippet child({ props })}
					<a
						{...props}
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
					
					{#each BottombarIcons as { icon }, index}
						{@const Icon = icon}
						<a
							href="##"
							class={[buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9', 'shrink-0']}
						>
							<Icon size={22} class="text-muted-foreground" />
						</a>
					{/each}
				</div>
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
		{/if}
		{#if !isMobile}
			<div class="flex">
				{#each BottombarIcons as { icon }, index}
					{@const Icon = icon}
					<a
						href="##"
						class={[buttonVariants({ variant: 'ghost', size: 'icon' }), 'h-9 w-9', 'shrink-0']}
					>
						<Icon size={22} class="text-muted-foreground" />
					</a>
				{/each}
			</div>
		{/if}
	</div>
	<!-- <AnimatePresence initial={false}> -->
		<motion.div
			class="relative w-full"
			layout
			initial={{ opacity: 0, scale: 1 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 1 }}
			transition={{
				opacity: { duration: 0.05 },
				layout: {
					type: 'spring',
					bounce: 0.15
				}
			}}
		>
			{/* @ts-ignore */ null}
			<ChatInput
				bind:value={message}
				ref={inputel}
				placeholder="Type a message..."
				
			/>
			<div class="absolute right-4 bottom-2">
				<EmojiPicker onchange={(value) => {
					// console.log(value)
					chatStore.update((state) => ({ ...state, input: message + value }))
				}} />
			</div>
		</motion.div>
			<Button
				class="h-9 w-9 shrink-0"
				type="submit"
				disabled={isLoading}
				variant="ghost"
				size="icon"
			>
				<SendHorizontal size={22} className="text-muted-foreground" />
			</Button>
			<Button class="h-9 w-9 shrink-0" disabled={isLoading} variant="ghost" size="icon">
				<ThumbsUp size={22} className="text-muted-foreground" />
			</Button>
	<!-- </AnimatePresence> -->
</div>
