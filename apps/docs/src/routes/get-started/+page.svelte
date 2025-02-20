<script lang="ts">
    import type { PageData } from './$types';


    let { data }: { data: PageData } = $props();

</script>
<div class="grid lg:grid-cols-4 gap-1">
	<div
		data-twe-spy="scroll"
		data-twe-target="#scrollspy-smooth"
		data-twe-offset="0"
		class="relative col-span-3 overflow-auto px-10 py-5 grid"
	>
    
    <section id="shadcn" class="flex flex-col gap-3">
		<h1 class="text-3xl font-bold">Getting Started</h1>
		<ul class="relative flex flex-col gap-2">
			<li class="flex gap-x-2">
			  <div class="min-h-7 flex flex-col items-center text-xs align-middle">
				<span class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
				  1
				</span>
				<div class="mt-2 w-px h-full bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
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
					<a class=" underline underline-offset-2" href="https://next.shadcn-svelte.com/docs/installation">here</a>
				</span>
			  </div>
			</li>
			<li class="flex gap-x-2">
			  <div class="min-h-7 flex flex-col items-center text-xs align-middle">
				<span class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
				  2
				</span>
				<div class="mt-2 w-px h-full bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
			  </div>
			  <div class="grow pb-5">
				<span class="block  font-medium text-gray-800 dark:text-white">
				  Install necessary components
				</span>
				<p class=" text-gray-500 dark:text-neutral-500">
					Add the following components to your project.
				</p>

			  </div>
			</li>
			<li class="flex gap-x-2">
			  <div class="min-h-7 flex flex-col items-center text-xs align-middle">
				<span class="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
				  3
				</span>
				<div class="mt-2 w-px h-full bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
			  </div>
			  <div class="grow pb-5">
				<span class="block  font-medium text-gray-800 dark:text-white">
				  Step
				</span>
				<p class=" text-gray-500 dark:text-neutral-500">
				  This is a description text.
				</p>
			  </div>
			</li>
			</ul>
    </section>
	<section id="cli">

	</section>
</div>
<div class="flex-col gap-2 px-10 py-5 md:block hidden">
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
					href="#cli">CLI</a
				>
			</li>
		</ul>
	</div>
</div>
</div>