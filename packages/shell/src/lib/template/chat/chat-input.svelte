<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { Textarea } from '../textarea/index.js';

	type ChatInputProps = WithElementRef<HTMLTextareaAttributes>;

	let { class: className, value=$bindable(undefined), ref = $bindable(null), ...restProps }: ChatInputProps = $props();
</script>

<Textarea
	autocomplete="off"
	bind:value
	{ref}
	name="message"
	class={[
		'flex h-16 max-h-12 w-full resize-none items-center rounded-md bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
		className
	]}
	{...restProps}
/>
