<script lang="ts">
	import '../app.css';
	import * as Sidebar from '$lib/components/ui/sidebar/';
	import AppSidebar from '$lib/components/ui/app-sidebar.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from 'svelte-sonner';
	let { children } = $props();

	let open = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			open = !open;
		}
	}
</script>

<ModeWatcher />
<Toaster richColors />
<svelte:document onkeydown={handleKeydown} />
<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header
			class="sticky top-0 z-10 flex h-16 w-full items-center gap-2 rounded-tl-lg border-b px-4 backdrop-blur-lg"
		>
			<Sidebar.Trigger />
			<Separator orientation="vertical" class="mr-2 h-4" />
			<div class="flex">
				<svg
					class="w-4"
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 128 128"
				>
					<path
						fill="#ff3e00"
						d="M110.43 16.936C98.553-.076 75.09-5.118 58.13 5.696l-29.792 19a34.2 34.2 0 0 0-15.48 22.897a25.478 30.64 0 0 0-.572 6.396a36.15 36.15 0 0 0 4.163 16.73A34.4 34.4 0 0 0 11.34 83.5a25.348 30.483 0 0 0 .345 14.412a36.5 36.5 0 0 0 5.9 13.152c11.878 17.01 35.394 22.053 52.3 11.24l29.762-19.001a34.13 34.13 0 0 0 15.438-22.918a35.5 35.5 0 0 0 .572-6.386a36.2 36.2 0 0 0-4.112-16.71a34.4 34.4 0 0 0 5.112-12.77c.369-2.11.557-4.245.562-6.386a36.4 36.4 0 0 0-6.787-21.178z"
					/>
					<path
						fill="#fff"
						d="M55.219 112.662a28.463 34.23 0 0 1-5.954.76a23.64 23.64 0 0 1-19.435-10.187a21.9 21.9 0 0 1-4.08-12.74a15.658 18.83 0 0 1 .333-3.833a15.425 18.55 0 0 1 .72-2.782l.561-1.708l1.52 1.156a38.7 38.7 0 0 0 11.658 5.834l1.104.333l-.104 1.104v.573a6.63 6.63 0 0 0 1.228 3.854a7.1 7.1 0 0 0 2.538 2.288a8.262 9.936 0 0 0 3.312.837a8.251 9.923 0 0 0 1.79-.229a7.272 8.745 0 0 0 1.833-.802l29.76-19.094a6.26 6.26 0 0 0 2.904-5.302a6.62 6.62 0 0 0-1.26-3.844a7.14 7.14 0 0 0-2.553-2.252a8.313 9.997 0 0 0-3.307-.81a8.246 9.917 0 0 0-1.79.23a6.938 8.344 0 0 0-1.822.801l-11.346 7.25a24.376 29.314 0 0 1-6.048 2.656a23.64 23.64 0 0 1-25.39-9.416a21.94 21.94 0 0 1-4.08-12.74c.002-1.285.114-2.567.333-3.833a20.65 20.65 0 0 1 9.286-13.781l29.792-18.99a21.9 21.9 0 0 1 6.048-2.667a24 24 0 0 1 5.954-.75A23.68 23.68 0 0 1 98.22 24.745a21.94 21.94 0 0 1 4.029 12.75a15.748 18.939 0 0 1-.334 3.844a15.407 18.529 0 0 1-.718 2.781l-.562 1.708l-1.52-1.114a38.4 38.4 0 0 0-11.658-5.834l-1.104-.343l.104-1.105v-.572a6.7 6.7 0 0 0-1.228-3.865a7.1 7.1 0 0 0-2.55-2.25a8.309 9.992 0 0 0-3.3-.813a8.221 9.887 0 0 0-1.77.271a6.819 8.2 0 0 0-1.831.802l-29.793 18.99a5.88 7.071 0 0 0-1.836 1.79a4.75 5.713 0 0 0-.963 2.377a5.037 6.057 0 0 0-.136 1.104a6.62 6.62 0 0 0 1.228 3.844a7.1 7.1 0 0 0 2.549 2.25a8.299 9.98 0 0 0 3.301.812a8.247 9.918 0 0 0 1.79-.23a6.943 8.35 0 0 0 1.833-.801l11.367-7.292a24.218 29.125 0 0 1 6.048-2.656a28.526 34.305 0 0 1 5.954-.76A23.66 23.66 0 0 1 96.566 60.61a21.94 21.94 0 0 1 3.737 16.614a20.6 20.6 0 0 1-9.286 13.781l-29.74 18.99a24.308 29.233 0 0 1-6.057 2.667z"
					/>
				</svg>
				<p
					class="bg-gradient-to-r from-red-500 to-indigo-500 bg-clip-text text-lg font-bold text-transparent"
				>
					hadcn chat
				</p>
			</div>

			<div class="ml-auto flex gap-2">
				<a
					href="https://github.com/cliffordkleinsr/shadcn-svelte-chat.git"
					aria-label="github"
					target="_blank"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
						/>
					</svg>
				</a>
			</div>
		</header>
		<main>
			{@render children?.()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
