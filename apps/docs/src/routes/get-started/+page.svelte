<script lang="ts">
	import ChatExample from '$lib/configs/shiki-move/chat-example.svelte';
	import ShikiMagicMove from '$lib/configs/shiki-move/shiki-magic-move.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="grid gap-1 lg:grid-cols-4">
	<div class="col-span-3">
		<div
			data-twe-spy="scroll"
			data-twe-target="#scrollspy-smooth"
			data-twe-offset="0"
			class="relative grid gap-2 overflow-auto px-10 py-5"
		>
			<section id="shadcn" class="flex flex-col gap-3">
				<h1 class="text-3xl font-bold">Getting Started</h1>
				<ul class="relative flex flex-col gap-2">
					<li class="flex gap-x-2">
						<div class="flex min-h-7 flex-col items-center align-middle text-xs">
							<span
								class="flex size-7 shrink-0 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-800 dark:bg-neutral-700 dark:text-white"
							>
								1
							</span>
							<div class="mt-2 h-full w-px bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
						</div>
						<div class="grow pb-5">
							<span class="block font-medium text-gray-800 dark:text-white">
								Install Shadcn-Svelte
							</span>
							<p class=" text-gray-500 dark:text-neutral-500">
								Begin by setting up shadcn-svelte in a SvelteKit project.
							</p>
							<span class="text-gray-500 dark:text-neutral-500">
								See the docs
								<a
									class=" underline underline-offset-2"
									href="https://next.shadcn-svelte.com/docs/installation">here</a
								>
							</span>
						</div>
					</li>
					<li class="flex gap-x-2">
						<div class="flex min-h-7 flex-col items-center align-middle text-xs">
							<span
								class="flex size-7 shrink-0 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-800 dark:bg-neutral-700 dark:text-white"
							>
								2
							</span>
							<div class="mt-2 h-full w-px bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
						</div>
						<div class="grow pb-5">
							<span class="block font-medium text-gray-800 dark:text-white">
								Install necessary components
							</span>
							<p class=" text-gray-500 dark:text-neutral-500">
								Add the following shadcn components to your project.
							</p>
							<div class="grid gap-2">
								<ShikiMagicMove
									class="mt-6 mb-4 max-h-[400px] max-w-xl overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
								/>
							</div>
						</div>
					</li>
					<li class="flex gap-x-2">
						<div class="flex min-h-7 flex-col items-center align-middle text-xs">
							<span
								class="flex size-7 shrink-0 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-800 dark:bg-neutral-700 dark:text-white"
							>
								3
							</span>
							<div class="mt-2 h-full w-px bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
						</div>
						<div class="grow pb-5">
							<span class="block font-medium text-gray-800 dark:text-white"> Step </span>
							<p class=" text-gray-500 dark:text-neutral-500">
								Initialize the chat components with
							</p>
							<div class="grid gap-2">
								<ShikiMagicMove
									class="mt-6 mb-4 max-h-[400px] max-w-xl overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
									code="npx @shadcn-svelte-chat/cli init"
									npm_c="npx @shadcn-svelte-chat/cli init"
									pnpm_c="pnpm dlx @shadcn-svelte-chat/cli init"
									bun_c="bun x @shadcn-svelte-chat/cli init"
								/>
							</div>
							<p>
								The components will be added to the <code>"src/components/ui/chat"</code> directory.
							</p>
						</div>
					</li>
				</ul>
			</section>
			<section id="example">
				<h1 class="text-xl font-bold">Example</h1>
				<ChatExample />
			</section>
		</div>
	</div>
	<div class="hidden flex-col gap-2 px-10 py-5 md:block">
		On this page
		<!-- Scrollspy -->
		<div id="scrollspy-smooth" class="sticky-top ps-3 text-sm">
			<ul data-twe-nav-list-ref>
				<li class="py-1">
					<a
						data-twe-nav-link-ref
						data-twe-nav-link-active
						class="bg-transparent px-[5px] text-[#4b5563] shadow-none transition-all dark:text-neutral-200"
						href="#shadcn">Getting Started</a
					>
				</li>
				<li class="py-1">
					<a
						data-twe-nav-link-ref
						class="bg-transparent px-[5px] text-[#4b5563] shadow-none transition-all dark:text-neutral-200"
						href="#example">Example</a
					>
				</li>
			</ul>
		</div>
	</div>
</div>
