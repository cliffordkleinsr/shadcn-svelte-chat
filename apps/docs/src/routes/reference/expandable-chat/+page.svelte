<script lang="ts">
	import {
		ChatBubble,
		ChatBubbleAvatar,
		ChatBubbleMessage,
		ChatInput,
		ChatMessageList,
		ExpandableChat,
		ExpandableChatBody,
		ExpandableChatFooter,
		ExpandableChatHeader
	} from '$lib';
	import type { PageData } from './$types';
	import { Button } from '$lib/components/ui/button';
	import { Send } from 'lucide-svelte';
	import Meta from '$lib/blocks/seo/meta.svelte';

	let chatMessages = $state([
		{
			variant: 'received',
			avatar: 'AI',
			message: 'Hello there. How can I help you today?'
		}
	]);
	let { data }: { data: PageData } = $props();

	let message = $state('');
	const Pageprops = {
		title: 'Expandable Chat • Reference',
		description: 'Expandable Chat API refrence',
		type: 'Website'
	};
</script>

<Meta {...Pageprops} />

<div class="grid gap-2 px-5 py-3 lg:grid-cols-4 lg:px-20 lg:py-15">
	<div class="col-span-3 grid gap-5">
		<section>
			<h1 class="text-3xl font-bold">ExpandableChat</h1>
			<p>
				The ExpandableChat <code>expandable-chat.svelte</code> component gives an easily installable
				component for quickly creating a chat support ui feature.
			</p>
			<p class="italic">See the example on the popover below</p>
		</section>
		<section>
			<ExpandableChat size="lg" position="bottom-right">
				<ExpandableChatHeader class="flex-col justify-center text-center">
					<h1 class="text-xl font-semibold">Chat with our AI ✨</h1>
					<p>Ask any question for our AI to answer</p>
					<div class="flex items-center gap-2 pt-2">
						<Button variant="secondary">New Chat</Button>
						<Button variant="secondary">See FAQ</Button>
					</div>
				</ExpandableChatHeader>
				<ExpandableChatBody>
					<ChatMessageList>
						{#each chatMessages as message}
							<ChatBubble variant={message.variant}>
								<ChatBubbleAvatar fallback={message.avatar || 'AI'} />
								<ChatBubbleMessage variant={message.variant} isLoading={false}>
									{message.message}
								</ChatBubbleMessage>
							</ChatBubble>
						{/each}
					</ChatMessageList>
				</ExpandableChatBody>
				<ExpandableChatFooter>
					<form
						onsubmit={(e) => {
							e.preventDefault();

							chatMessages.push({ avatar: 'US', variant: 'sent', message });

							message = '';
						}}
						class="flex gap-1"
					>
						{/* @ts-ignore */ null}
						<ChatInput bind:value={message} />
						<Button type="submit" size="icon" class="my-5 shrink-0 rounded-full">
							<Send class="size-4" />
						</Button>
					</form>
				</ExpandableChatFooter>
			</ExpandableChat>
		</section>
		<section>
			<h2
				class="dark:border-primary-100/10 mt-10 border-b border-neutral-200/70 pb-1 text-3xl font-semibold tracking-tight text-slate-900 contrast-more:border-neutral-400 dark:text-slate-100 contrast-more:dark:border-neutral-400"
			>
				API Reference
			</h2>
			<h3 class="mt-8 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
				ExpandableChat
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
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">position</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>"bottom-right" | "bottom-left"</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>"bottom-right"</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Position of the chat widget on the screen</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">size</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>"sm" | "md" | "lg" | "xl" | "full"</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">"md"</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Size of the chat window</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">icon</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">Snippet</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">-</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Custom icon for the chat toggle button</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">class</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">string</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">-</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Additional CSS classes for the main container</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">children</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">Snippet</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">-</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Content of the chat window</td
						></tr
					></tbody
				>
			</table>
			<h3 class="mt-8 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
				ExpandableChatHeader<a
					href="#expandablechatheader"
					id="expandablechatheader"
					class="subheading-anchor"
					aria-label="Permalink for this section"
				></a>
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
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">class</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">string</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">-</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Additional CSS classes for the header section</td
						></tr
					></tbody
				>
			</table>
			<h3 class="mt-8 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
				ExpandableChatBody
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
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">class</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">string</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">-</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Additional CSS classes for the body section</td
						></tr
					></tbody
				>
			</table>
			<h3 class="mt-8 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
				ExpandableChatFooter
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
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">class</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">string</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">-</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Additional CSS classes for the footer section</td
						></tr
					></tbody
				>
			</table>
			<h3 class="mt-8 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
				ExpandableChatToggle (internal component)
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
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">icon</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">Snippet</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">-</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Custom icon for the toggle button</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">isOpen</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">boolean</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">-</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Current open/closed state of the chat window</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">toggleChat</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">() =&gt; void</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">-</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Function to toggle the chat window open/closed</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">class</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">string</td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">-</td><td
							class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Additional CSS classes for the toggle button</td
						></tr
					></tbody
				>
			</table>
		</section>
	</div>
	<div class="hidden flex-col gap-2 px-10 py-5 md:block">
		On this page
		<div id="autospy-smooth" class="sticky-top ps-3 text-sm">
			<ul>
				<li class="py-1">
					<a
						class="bg-transparent px-[5px] text-[#4b5563] shadow-none transition-all dark:text-neutral-200"
						href="#introduction">ExpandableChat</a
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
