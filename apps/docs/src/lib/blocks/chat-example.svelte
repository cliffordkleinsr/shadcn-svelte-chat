<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';

	import { ChatMessageList, ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '$lib/index.js';
	import CodeBlock from '$lib/components/tzezars-enhancements/code-block/code-block.svelte';
	import TabList from './TabList.svelte';
	import { base_snippet } from '$lib/configs/code-blocks';

	let chatMessages = [
		{
			variant: 'sent',
			avatar: 'US',
			message: 'Hello, how has your day been? I hope you are doing well.'
		},
		{
			variant: 'received',
			avatar: 'AI',
			message: 'Hi, I am doing well, thank you for asking. How can I help you today?'
		},
		{
			variant: 'sent',
			avatar: 'US',
			message: 'Did you by chance have a look at the chat component?'
		},
		{ variant: 'received', avatar: 'AI', message: "No I didn't. But will check when I have time" },
		{ variant: 'sent', avatar: 'US', message: null, isLoading: true }
	];
</script>

<TabList>
	{#snippet preview()}
		<ChatMessageList>
			{#each chatMessages as message}
				<ChatBubble variant={message.variant}>
					<ChatBubbleAvatar fallback={message.avatar || 'AI'} />
					<ChatBubbleMessage variant={message.variant} isLoading={message.isLoading || false}>
						{message.message}
					</ChatBubbleMessage>
				</ChatBubble>
			{/each}
		</ChatMessageList>
	{/snippet}
	{#snippet code()}
		<CodeBlock code={base_snippet} lang="svelte" />
	{/snippet}
</TabList>
