<script lang="ts">
	import { createHighlighter } from 'shiki';
	import { ShikiMagicMove } from 'shiki-magic-move/svelte';
	import { Button } from '$lib/components/ui/button';
	import 'shiki-magic-move/dist/style.css';
	import Npm from '$lib/svgs/npm.svelte';
	import Bun from '$lib/svgs/bun.svelte';
	import Pnpm from '$lib/svgs/pnpm.svelte';
	import { mode } from 'mode-watcher';
	import { CopyButton } from '$lib/components/tzezars-enhancements/copy-button';

	let {
		class: className = '',
		code = 'npx shadcn-svelte@next add button textarea avatar',
		npm_c = 'npx shadcn-svelte@next add button textarea avatar',
		pnpm_c = 'pnpm dlx shadcn-svelte@next add button textarea avatar',
		bun_c = 'bun x shadcn-svelte@next add button textarea avatar'
	} = $props();
	const highlighter = createHighlighter({
		themes: ['poimandres', 'aurora-x', 'min-dark', 'github-light', 'github-dark'],
		langs: ['javascript', 'typescript', 'python', 'svelte', 'powershell', 'angular-ts']
	});

	$effect(() => {
		return async () => (await highlighter).dispose;
	});
	// let code = $state();

	function npm() {
		code = npm_c;
	}
	function pnpm() {
		code = pnpm_c;
	}

	function bun() {
		code = bun_c;
	}

	// setTimeout(function () {
	// 	// do something
	// 	npm();
	// 	setTimeout(function () {
	// 		// do second thing
	// 		pnpm();
	// 	}, 3000);
	// }, 3000);
</script>

<div class="flex gap-2">
	<Button variant="secondary" size="icon" onclick={npm}>
		<Npm />
	</Button>
	<Button variant="secondary" size="icon" onclick={bun}>
		<Bun />
	</Button>
	<Button variant="secondary" size="icon" onclick={pnpm}>
		<Pnpm />
	</Button>
</div>
{#await highlighter then highlighter}
	<div class="relative">
		<ShikiMagicMove
			class={className}
			lang="powershell"
			theme={$mode === 'light' ? 'github-light' : 'github-dark'}
			{highlighter}
			{code}
			options={{ duration: 800, stagger: 0.3, lineNumbers: true }}
		/>
		<CopyButton textToCopy={code} class="absolute inset-8 top-0 -left-2 lg:left-120" />
	</div>
{/await}
