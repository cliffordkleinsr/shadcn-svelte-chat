export const base_snippet = `

    <script lang="ts">
      	import { ChatMessageList, ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '$lib/index.js';
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
    <\/script>
    <ChatMessageList>
        <ChatBubble variant={message.variant}>
            <ChatBubbleAvatar fallback={message.avatar || 'AI'} />
            <ChatBubbleMessage variant={message.variant} isLoading={message.isLoading || false}>
                {message.message}
            </ChatBubbleMessage>
        </ChatBubble>
    </ChatMessageList>
    `;
export const with_actions = `
<script lang="ts">
      	import { ChatBubble, ChatBubbleAction, ChatBubbleActionWrapper, ChatBubbleAvatar, ChatBubbleMessage, ChatMessageList } from '$lib';
        import { EllipsisVertical, Forward, Heart } from 'lucide-svelte';
        const messages_without_actions = [
		{
			id: 1,
			message: 'Hover me!',
			sender: 'user'
		},
		{
			id: 2,
			message: 'Hover me too!',
			sender: 'bot'
		},
		{
			id: 3,
			message: '',
			sender: 'bot',
			isLoading: true
		}
	];
	let actionIcons = [
		{icon: EllipsisVertical, type: "more"},
		{icon: Forward,  type: "share"},
		{icon: Heart,  type: "like"},
	]
<\/script>
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
`;

export const without_actions = `
    <script lang="ts">
      	import { ChatMessageList, ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '$lib/index.js';
        import { Copy, RefreshCcw } from 'lucide-svelte';
        const messages_without_actions = [
            {
                id: 1,
                message: 'Help me with my essay.',
                sender: 'user',
            },
            {
                id: 2,
                message: 'I can help you with that. What do you need help with?',
                sender: 'bot',
            },
        ];

        const actionwoutIcons = [
            { icon: Copy, type: 'Copy' },
            { icon: RefreshCcw, type: 'Regenerate' },
        ];
    <\/script>
   	<ChatMessageList>
        {#each messages_without_actions as message, index}
        {@const variant = message.sender === 'user' ? 'sent' : 'received'}
        <ChatBubble  layout='ai'>
            <ChatBubbleAvatar fallback={variant === 'sent' ? 'US' : 'AI'} />
            <ChatBubbleMessage>
                {message.message}
                {#if message.sender === 'bot'}
                <div>
                    {#each actionwoutIcons as {icon, type}}
                    {@const Icon = icon}
                        <ChatBubbleAction
                            class="size-6"
                            onClick={() => console.log('Action ' + type + ' clicked for message ' + index)}
                        >
                        {#snippet icon()}
                            <Icon/>
                        {/snippet}
                        </ChatBubbleAction>
                    {/each}
                </div>
                    
                {/if}
            </ChatBubbleMessage>
        </ChatBubble>
        {/each}
    </ChatMessageList>
    `;
export const base_input_snippet = `
<script lang="ts">
    import { ChatInput } from "@shadcn-chat/ui"
</script>

<ChatInput
  placeholder="Type your message here..."
/>
`;
