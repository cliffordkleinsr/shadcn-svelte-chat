<script lang="ts">
	import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage, ChatMessageList } from '$lib';
	import Meta from '$lib/blocks/seo/meta.svelte';
	import TabList from '$lib/blocks/TabList.svelte';
	import CodeBlock from '$lib/components/tzezars-enhancements/code-block/code-block.svelte';
	import { base_snippet } from '$lib/configs/code-blocks';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
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
		{ variant: 'sent', avatar: 'US', message: null, isLoading: true }
	];
	const Pageprops = {
		title: 'Chat Message List • Reference',
		description: 'Chat Message List API refrence',
		type: 'Website'
	};
</script>

<Meta {...Pageprops} />

<div class="grid gap-2 px-5 py-3 lg:grid-cols-4 lg:px-20 lg:py-15">
	<div class="col-span-3 grid gap-5">
		<section>
			<h1 class="text-3xl font-bold">Chat Input</h1>
			<p>
				The ChatMessageList component <code>chat-message-list.svelte </code>is a simple wrapper
				component for the <code>'ChatBubble'</code> component.
			</p>
			<p>
				It also includes a custom <code>useAutoScroll</code> hook which has been architected to handle
				auto-scrolling, enabling the user to opt in and out of autscrolling.
			</p>
			<TabList>
				{#snippet preview()}
					<ChatMessageList>
						{#each chatMessages as message}
							<ChatBubble variant={message.variant}>
								<ChatBubbleAvatar fallback={message.avatar || 'AI'} />
								<ChatBubbleMessage variant={message.variant} isLoading={message.isLoading}>
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
		</section>
	</div>
	<div class="hidden flex-col gap-2 px-10 py-5 md:block">
		On this page
		<div id="scrollspy-smooth" class="sticky-top ps-3 text-sm">
			<ul>
				<li class="py-1">
					<a
						class="bg-transparent px-[5px] text-[#4b5563] shadow-none transition-all dark:text-neutral-200"
						href="#introduction">ChatMessageList</a
					>
				</li>
			</ul>
		</div>
	</div>
</div>
