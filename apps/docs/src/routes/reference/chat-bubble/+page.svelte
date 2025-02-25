<script lang="ts">
	import { CodeBlock } from '$lib/components/tzezars-enhancements/code-block';
	import type { PageData } from './$types';
	import * as Tabs from '$lib/components/ui/tabs';
	import {
		ChatBubble,
		ChatBubbleAction,
		ChatBubbleActionWrapper,
		ChatBubbleAvatar,
		ChatBubbleMessage,
		ChatMessageList
	} from '$lib';
	import TabList from '$lib/blocks/TabList.svelte';
	import { Copy, EllipsisVertical, Forward, Heart, RefreshCcw } from 'lucide-svelte';
	import { base_snippet, without_actions, with_actions } from '$lib/configs/code-blocks';
	import { toast } from 'svelte-sonner';
	import { Separator } from '$lib/components/ui/separator';
	import Meta from '$lib/blocks/seo/meta.svelte';

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
	const messages_with_actions = [
		{
			id: 1,
			message: 'Hello!',
			sender: 'user'
		},
		{
			id: 2,
			message: 'Hover me!',
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
		{ icon: EllipsisVertical, type: 'more' },
		{ icon: Forward, type: 'share' },
		{ icon: Heart, type: 'like' }
	];
	const messages_without_actions = [
		{
			id: 1,
			message: 'Help me with my essay.',
			sender: 'user'
		},
		{
			id: 2,
			message: 'I can help you with that. What do you need help with?',
			sender: 'bot'
		}
	];
	const actionwoutIcons = [
		{ icon: Copy, type: 'Copy' },
		{ icon: RefreshCcw, type: 'Regenerate' }
	];
	const Pageprops = {
		title: 'Chat Bubble • Reference',
		description: 'Chat Bubble API reference',
		type: 'Website'
	};
</script>

<Meta {...Pageprops} />

<div class="grid gap-2 px-5 py-3 lg:grid-cols-4 lg:px-20 lg:py-15">
	<div class="col-span-3 grid gap-5">
		<section>
			<h1 class="text-3xl font-bold">ChatBubble</h1>
			<p>
				The ChatBubble component <code>chat-bubble.svelte</code> is the main component in this library.
				It is used to display a chat bubble along with its message, avatar and other content.
			</p>
			<p>
				Wrap the <code>ChatBubble</code> component with
				<code>ChatMessageList</code> to properly show the chat bubbles.
			</p>
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
		</section>
		<section>
			<h1 class="text-2xl font-bold">Examples</h1>
			<ul class="grid list-decimal gap-5 space-y-5">
				<li>Default layout with actions and altered styles</li>
				<TabList>
					{#snippet preview()}
						<ChatMessageList>
							{#each messages_with_actions as message, index}
								{@const variant = message.sender === 'user' ? 'sent' : 'received'}
								<ChatBubble {variant}>
									<ChatBubbleAvatar fallback={variant === 'sent' ? 'US' : 'AI'} />
									<ChatBubbleMessage {variant} isLoading={message.isLoading}>
										{message.message}
									</ChatBubbleMessage>
									<ChatBubbleActionWrapper>
										{#each actionIcons as { icon, type }}
											{@const Icon = icon}
											<ChatBubbleAction
												class="size-7"
												onclick={() =>
													toast.message('Action ' + type + ' clicked for message ' + index)}
											>
												{#snippet icon()}
													<Icon />
												{/snippet}
											</ChatBubbleAction>
										{/each}
									</ChatBubbleActionWrapper>
								</ChatBubble>
							{/each}
						</ChatMessageList>
					{/snippet}
					{#snippet code()}
						<CodeBlock code={with_actions} lang="svelte" />
					{/snippet}
				</TabList>
				<li>Default layout without actions and without altered styles</li>
				<TabList>
					{#snippet preview()}
						<ChatMessageList>
							{#each messages_without_actions as message, index}
								{@const variant = message.sender === 'user' ? 'sent' : 'received'}
								<ChatBubble layout="ai">
									<ChatBubbleAvatar fallback={variant === 'sent' ? 'US' : 'AI'} />
									<ChatBubbleMessage>
										{message.message}
										{#if message.sender === 'bot'}
											<div>
												{#each actionwoutIcons as { icon, type }}
													{@const Icon = icon}
													<ChatBubbleAction
														class="size-6"
														onclick={() =>
															toast.message('Action ' + type + ' clicked for message ' + index)}
													>
														{#snippet icon()}
															<Icon />
														{/snippet}
													</ChatBubbleAction>
												{/each}
											</div>
										{/if}
									</ChatBubbleMessage>
								</ChatBubble>
							{/each}
						</ChatMessageList>
					{/snippet}
					{#snippet code()}
						<CodeBlock code={without_actions} lang="svelte" />
					{/snippet}
				</TabList>
			</ul>
		</section>
		<section>
			<h2
				class="mt-10 pb-1 text-3xl font-semibold tracking-tight text-slate-900 contrast-more:border-neutral-400 dark:text-slate-100 contrast-more:dark:border-neutral-400"
			>
				API Reference
			</h2>
			<Separator />

			<h3 class="mt-8 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
				ChatBubble
			</h3>
			<table class="mt-6 block overflow-x-auto p-0 first:mt-0">
				<thead
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Prop</th
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Type</th
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Default</th
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Description</th
						></tr
					></thead
				><tbody
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">variant</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">'sent'</code>
							|
							<code dir="ltr">'received'</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">'received'</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>The variant of the chat bubble. Used to display the correct position of the chat
							bubble and the correct colors.</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">layout</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">'default'</code>
							|
							<code dir="ltr">'ai'</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">'default'</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>The layout of the chat bubble. Used to display various layouts.</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">children</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">Snippet</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">null</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>The children of the chat bubble.</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">class</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">string</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">null</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Additional classes to apply to the chat bubble.</td
						></tr
					></tbody
				>
			</table>
			<h3 class="mt-8 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
				ChatBubbleMessage
			</h3>
			<table class="nextra-scrollbar mt-6 block overflow-x-auto p-0 first:mt-0">
				<thead
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Prop</th
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Type</th
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Default</th
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Description</th
						></tr
					></thead
				><tbody
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">isLoading</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">boolean</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">false</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>If the message is loading. Shows loading component <code dir="ltr"
								>MessageLoading</code
							> if true.</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">class</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">string</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">null</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Additional classes to apply to the message.</td
						></tr
					></tbody
				>
			</table>
			<h3 class="mt-8 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
				ChatBubbleAvatar
			</h3>
			<blockquote
				class="mt-6 border-gray-300 text-gray-700 italic first:mt-0 ltr:border-l-2 ltr:pl-6 rtl:border-r-2 rtl:pr-6 dark:border-gray-700 dark:text-gray-400"
			>
				<p class="mt-6 leading-7 first:mt-0">
					You can also just use the <code dir="ltr">Avatar</code>
					component from
					<code dir="ltr">shadcn-svelte</code> instead
				</p>
			</blockquote>
			<table class="nextra-scrollbar mt-6 block overflow-x-auto p-0 first:mt-0">
				<thead
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Prop</th
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Type</th
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Default</th
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Description</th
						></tr
					></thead
				><tbody
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">src</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">string</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">null</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>The source of the avatar.</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">fallback</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">string</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">null</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>The fallback of the avatar.</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">class</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">string</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">null</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Additional classes to apply to the avatar.</td
						></tr
					></tbody
				>
			</table>
			<h3 class="mt-8 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
				ChatBubbleAction
			</h3>
			<table class="nextra-scrollbar mt-6 block overflow-x-auto p-0 first:mt-0">
				<thead
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Prop</th
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Type</th
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Default</th
						><th class="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600"
							>Description</th
						></tr
					></thead
				><tbody
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">icon</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">Snippet</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">null</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>The icon of the action.</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">onclick</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">() =&gt; void</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">null</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>The onclick event of the action.</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">class</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">string</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">null</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Additional classes to apply to the action.</td
						></tr
					></tbody
				>
			</table>
		</section>
	</div>
	<div class="hidden flex-col gap-2 px-10 py-5 md:block">
		On this page
		<div id="scrollspy-smooth" class="sticky-top ps-3 text-sm">
			<ul>
				<li class="py-1">
					<a
						class="bg-transparent px-[5px] text-[#4b5563] shadow-none transition-all dark:text-neutral-200"
						href="#introduction">ChatBubble</a
					>
				</li>
				<li class="py-1">
					<a
						class="bg-transparent px-[5px] text-[#4b5563] shadow-none transition-all dark:text-neutral-200"
						href="#features">Examples</a
					>
				</li>
				<li class="py-1">
					<a
						class="bg-transparent px-[5px] text-[#4b5563] shadow-none transition-all dark:text-neutral-200"
						href="#features">API Reference</a
					>
				</li>
			</ul>
		</div>
	</div>
</div>

<!-- <style lang="postcss" scoped>
	@reference "../../../app.css";
	code {
		@apply rounded-md border border-black/10 bg-black/10 px-[.25em] py-0.5 text-[.9em] break-words dark:border-white/10 dark:bg-white/10;
	}

	section {
		@apply grid gap-3 space-y-2;
	}
</style> -->
