<script lang="ts">
	import type { DivableProps } from '$lib/types.js';
	import { Button } from '../button/index.js';
	import ArrowDown from 'lucide-svelte/icons/a-arrow-down';
	import { useAutoScroll } from '../../../hooks/use_autoscroll.svelte.js';
	type ChatMessageListProps = DivableProps & {
		smooth?: boolean;
	};
	let {
		class: className,
		smooth = false,
		ref = $bindable(null),
		children,
		...restProps
	}: ChatMessageListProps = $props();

	// todo autoscroller
	let { scrollRef, isAtBottom, autoScrollEnabled, scrollToBottom, disableAutoScroll } =
		useAutoScroll({
			smooth,
			content: children
		});
</script>

<div class="relative h-full w-full">
	<div
		bind:this={scrollRef}
		onwheel={disableAutoScroll}
		ontouchmove={disableAutoScroll}
		class={['flex h-full w-full flex-col overflow-y-auto p-4', className]}
		{...restProps}
	>
		<div class="flex flex-col gap-6">
			{@render children?.()}
		</div>
		{#if !isAtBottom}
			<Button
				onclick={() => scrollToBottom()}
				size="icon"
				variant="outline"
				class="absolute bottom-2 left-1/2 inline-flex -translate-x-1/2 transform rounded-full shadow-md"
				aria-label="Scroll to bottom"
			>
				<ArrowDown class="h-4 w-4" />
			</Button>
		{/if}
	</div>
</div>
