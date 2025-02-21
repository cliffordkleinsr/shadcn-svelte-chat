<script lang="ts">
	import { createHighlighter } from 'shiki';
	import { ShikiMagicMove } from 'shiki-magic-move/svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';

	import { ChatMessageList, ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '$lib/index.js';

	import 'shiki-magic-move/dist/style.css';

	const highlighter = createHighlighter({
		themes: ['nord', 'min-dark'],
		langs: ['javascript', 'typescript', 'svelte']
	});

	let code = $state(`
  <script lang="ts">
      import { ChatMessageList, ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '$lib/index.js';
  <\/script>
  
  
  `); // Escaped closing tag

	function animate() {
		code = `
    <script lang="ts">
      import { ChatMessageList, ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '$lib/index.js';
    <\/script>
    <ChatMessageList>
				<ChatBubble variant="sent">
						<ChatBubbleAvatar fallback="US" />
						<ChatBubbleMessage variant="sent">
							Hello, how has your day been? I hope you are doing well.
						</ChatBubbleMessage>
				</ChatBubble>

				<ChatBubble variant="received">
						<ChatBubbleAvatar fallback="AI" />
						<ChatBubbleMessage variant="received">
							Hi, I am doing well, thank you for asking. How can I help you today?
						</ChatBubbleMessage>
				</ChatBubble>

				<ChatBubble variant="received">
						<ChatBubbleAvatar fallback="AI" />
						<ChatBubbleMessage isLoading />
				</ChatBubble>
    </ChatMessageList>
    `; // Escaped closing tag
	}
	setInterval(() => {
		animate();
	}, 2000);
</script>

<Tabs.Root value="preview" class="">
	<Tabs.List class="float-end">
		<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
		<Tabs.Trigger value="code">Code</Tabs.Trigger>
	</Tabs.List>
	<!-- Preview Block -->
	<Tabs.Content value="preview">
		<Card.Root>
			<Card.Header>
				<Card.Title></Card.Title>
				<Card.Description></Card.Description>
			</Card.Header>
			<Card.Content class="h-[700px]">
				<ChatMessageList>
					<ChatBubble variant="sent">
						<ChatBubbleAvatar fallback="US" />
						<ChatBubbleMessage variant="sent">
							Hello, how has your day been? I hope you are doing well.
						</ChatBubbleMessage>
					</ChatBubble>

					<ChatBubble variant="received">
						<ChatBubbleAvatar fallback="AI" />
						<ChatBubbleMessage variant="received">
							Hi, I am doing well, thank you for asking. How can I help you today?
						</ChatBubbleMessage>
					</ChatBubble>
					<ChatBubble variant="sent">
						<ChatBubbleAvatar fallback="US" />
						<ChatBubbleMessage variant="sent">
							Did you by chance have alook at the chat component?
						</ChatBubbleMessage>
					</ChatBubble>
					<ChatBubble variant="received">
						<ChatBubbleAvatar fallback="AI" />
						<ChatBubbleMessage variant="received">
							No I didnt But will check when I have time
						</ChatBubbleMessage>
					</ChatBubble>
					<ChatBubble variant="sent">
						<ChatBubbleAvatar fallback="US" />
						<ChatBubbleMessage isLoading variant="sent" />
					</ChatBubble>
				</ChatMessageList>
			</Card.Content>
			<Card.Footer></Card.Footer>
		</Card.Root>
	</Tabs.Content>
	<!-- Code block -->
	<Tabs.Content value="code">
		<Card.Root>
			<Card.Header>
				<Card.Title></Card.Title>
				<Card.Description></Card.Description>
			</Card.Header>
			<Card.Content class="h-[700px]">
				{#await highlighter then highlighter}
					<ShikiMagicMove
						class="mt-6 mb-4 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
						lang="svelte"
						theme="min-dark"
						{highlighter}
						{code}
						options={{ duration: 800, stagger: 0.3, lineNumbers: true }}
					/>
				{/await}
			</Card.Content>
			<Card.Footer></Card.Footer>
		</Card.Root>
	</Tabs.Content>
</Tabs.Root>
