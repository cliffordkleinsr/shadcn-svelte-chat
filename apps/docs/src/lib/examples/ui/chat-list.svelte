<script lang="ts">
	import type { Message, UserData } from '../data/data';
	import { animateExit, mercury } from '@omicrxn/mercury';
	import { EllipsisVertical, Forward, Heart } from 'lucide-svelte';
	import {
		ChatBubbleAvatar,
		ChatBubbleMessage,
		ChatBubbleTimestamp,
		ChatBubble,
		ChatBubbleAction,
		ChatBubbleActionWrapper,
		ChatMessageList,
		autoscroll
	} from '../../index.js';
	interface ChatListProps {
		messages: Message[];
		selectedUser: UserData;
		sendMessage: (newMessage: Message) => void;
		isMobile: boolean;
	}
	const getMessageVariant = (messageName: string, selectedUserName: string) =>
		messageName !== selectedUserName ? 'sent' : 'received';

	const actionIcons = [
		{ icon: EllipsisVertical, type: 'More' },
		{ icon: Forward, type: 'Like' },
		{ icon: Heart, type: 'Share' }
	];
	let { messages, selectedUser, sendMessage, isMobile }: ChatListProps = $props();
</script>

<div class="flex h-full w-full flex-col overflow-y-hidden">
	<ChatMessageList>
		{#each messages as message, index}
			{@const variant = getMessageVariant(message.name, selectedUser.name)}
			<!-- <div
				use:mercury={{
					initial: { opacity: 0, scale: 1, y: 50, x: 0 },
					animate: { opacity: 0, scale: 1, y: 50, x: 0 }
				}}
				layout="${index}"
				out:animateExit={{
					animate: { opacity: 1, scale: 1, y: 0, x: 0 },
					transition: { duration: 0.1, ease: 'spring' }
				}}
				class="flex origin-center transform flex-col gap-2 p-4"
			> -->
			<ChatBubble {variant}>
				<ChatBubbleAvatar src={message.avatar} />
				<ChatBubbleMessage isLoading={message.isLoading}>
					{message.message}
					{#if message.timestamp}
						<ChatBubbleTimestamp timestamp={message.timestamp} />
					{/if}
				</ChatBubbleMessage>
				<ChatBubbleActionWrapper>
					{#each actionIcons as { icon, type }}
						{@const Icon = icon}
						<ChatBubbleAction class="size-7">
							{#snippet icon()}
								<Icon />
							{/snippet}
						</ChatBubbleAction>
					{/each}
				</ChatBubbleActionWrapper>
			</ChatBubble>
			<!-- </div> -->
		{/each}
	</ChatMessageList>
</div>
