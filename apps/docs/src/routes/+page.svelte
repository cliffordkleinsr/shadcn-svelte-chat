<script>
	import { ChatMessageList, ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '$lib/index';
</script>

<div class="mx-auto grid max-w-xl gap-2 py-5">
	// Wrap with ChatMessageList
	<ChatMessageList>
		// You can map over messages here
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
</div>
