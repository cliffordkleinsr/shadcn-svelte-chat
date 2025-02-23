<script lang="ts">
	import { ChatInput } from '$lib';
	import TabList from '$lib/blocks/TabList.svelte';
	import CodeBlock from '$lib/components/tzezars-enhancements/code-block/code-block.svelte';
	import { base_input_snippet } from '$lib/configs/code-blocks';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="grid gap-2 px-5 py-3 lg:grid-cols-4 lg:px-20 lg:py-15">
	<div class="col-span-3 grid gap-5">
		<section>
			<h1 class="text-3xl font-bold">Chat Input</h1>
			<p>
				The ChatInput component <code>chat-input.svelte</code> is used as an text-area with predefined
				styling to fit well with the other components.
			</p>
			<TabList>
				{#snippet preview()}
					<ChatInput placeholder="Type your message here..." />
				{/snippet}
				{#snippet code()}
					<CodeBlock code={base_input_snippet} lang="svelte" />
				{/snippet}
			</TabList>
		</section>
		<section>
			<h2
				class="mt-10 pb-1 text-3xl font-semibold tracking-tight text-slate-900 contrast-more:border-neutral-400 dark:text-slate-100"
			>
				API Reference
			</h2>
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
							><code dir="ltr">value</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">'string'</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">'null'</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>A string that represents the raw value contained in the control.</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">onkeydown</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600">
							<code dir="ltr">() =></code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">'default'</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Keyboard event listener.</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">onchange</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">() => </code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">null</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Event handler function that fires when the input's value changes.</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">placeHolder</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">string</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">null</code></td
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							>Displayed in a dimmed color when the text area value is empty.</td
						></tr
					><tr
						class="m-0 border-t border-gray-300 p-0 even:bg-gray-100 dark:border-gray-600 even:dark:bg-gray-600/20"
						><td class="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
							><code dir="ltr">className</code></td
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
						href="#features">API Reference</a
					>
				</li>
			</ul>
		</div>
	</div>
</div>
