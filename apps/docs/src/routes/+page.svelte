<script lang="ts">
	import Meta from '$lib/blocks/seo/meta.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { ChevronRight } from 'lucide-svelte';
	//   import { ScrollSpy, initTWE } from "tw-elements";
	const Pageprops = {
		title: 'Introduction',
		description: 'What is shadcn svelte chat?',
		type: 'Website'
	};
</script>

<Meta {...Pageprops} />

<div class="grid gap-1 px-5 py-3 lg:grid-cols-4 lg:px-25 lg:py-15">
	<div
		data-twe-spy="scroll"
		data-twe-target="#scrollspy-smooth"
		data-twe-offset="0"
		class="relative col-span-3 grid gap-5 overflow-auto"
	>
		<section id="introduction" class="flex flex-col gap-3">
			<h1 class="text-3xl font-bold">Introduction</h1>
			<Separator />
			<div class=" space-y-2">
				<p>
					Shadcn Chat for svelte is a command-line interface (CLI) tool that simplifies the process
					of adding customizable and reusable chat components to your web applications. It's
					designed to help you quickly build beautiful chat interfaces with minimal effort.
				</p>
				<p>
					This project is inspired by <a
						class=" underline underline-offset-2"
						href="https://docs-shadcn-chat.vercel.app/">shadcn chat</a
					>
				</p>
			</div>
		</section>
		<section id="features" class="flex max-w-3xl flex-col gap-3">
			<h3 class="pt-5 pb-3 text-2xl font-bold">Key Features</h3>
			<ul class="list-outside list-disc space-y-2">
				<li>
					<span class="text-accent-foreground font-semibold">Integration with shadcn-svelte:</span> Shadcn
					chat for svelte works seamlessly with Shadcn svelte, which contains a list of reusable UI components.
				</li>
				<li>
					<span class="text-accent-foreground font-semibold"
						>Customizable and Reusable Components:</span
					> Shadcn chat provides pre-built chat components that you can easily customize to match your
					application's design and functionality.
				</li>
				<li>
					<span class="text-accent-foreground font-semibold">Open Source:</span> The library is bundled
					with an MIT license making it free for anyone to use
				</li>
			</ul>
		</section>
		<Separator class="my-5" />

		<section class="my-10 w-full justify-end space-y-10 text-lg">
			<a href="/get-started" class="float-end flex gap-1 transition hover:text-blue-500">
				Get Started
				<ChevronRight class="my-[2px]" />
			</a>
		</section>
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
						href="#introduction">Introduction</a
					>
				</li>
				<li class="py-1">
					<a
						data-twe-nav-link-ref
						class="bg-transparent px-[5px] text-[#4b5563] shadow-none transition-all dark:text-neutral-200"
						href="#features">Features</a
					>
				</li>
			</ul>
		</div>
	</div>
</div>
