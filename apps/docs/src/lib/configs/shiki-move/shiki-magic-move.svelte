<script lang="ts">
	import { createHighlighter } from 'shiki';
	import { ShikiMagicMove } from 'shiki-magic-move/svelte';

	import 'shiki-magic-move/dist/style.css';

	const highlighter = createHighlighter({
		themes: ['poimandres', 'aurora-x'],
		langs: ['javascript', 'typescript', 'svelte', 'powershell', 'angular-ts']
	});

	let code = $state(`bun x shadcn-svelte@next add button textarea avatar`);

	function animate() {
		code = `npx shadcn-svelte@next add button textarea avatar`;
	}
	function then() {
		code = `pnpm dlx shadcn-svelte@next add button textarea avatar`;
	}

	setTimeout(function () {
		// do something
		animate();
		setTimeout(function () {
			// do second thing
			then();
		}, 3000);
	}, 3000);
</script>

{#await highlighter then highlighter}
	<ShikiMagicMove
		lang="svelte"
		theme="aurora-x"
		{highlighter}
		{code}
		options={{ duration: 800, stagger: 0.3, lineNumbers: true }}
	/>
{/await}
