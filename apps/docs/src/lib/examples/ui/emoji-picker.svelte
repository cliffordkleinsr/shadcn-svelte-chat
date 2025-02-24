<script lang="ts">
	import { mode } from 'mode-watcher';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';

	import { SmileIcon } from 'lucide-svelte';
	interface EmojiPickerProps {
		onchange: (value: string) => void;
	}

	let { onchange }: EmojiPickerProps = $props();

	let emojiPickerVisible = $state(false);
	let pickerContainer = $state() as HTMLElement;
	let emojiPicker = $state() as HTMLElement;
	let selectedEmoji = $state([]) as string[];
	$effect(() => {
		(async function () {
			await import('emoji-picker-element');
			emojiPicker = document.createElement('emoji-picker');
			emojiPicker.addEventListener('emoji-click', (event: Event) => {
				// console.log(event.detail.emoji.unicode)
				const customEvent = event as CustomEvent;
				onchange(customEvent.detail.unicode);
				selectedEmoji.push(customEvent.detail.unicode);
				// editor?.commands.insertContent(customEvent.detail.unicode)
			});
		})();

		return () => {
			emojiPicker?.remove();
		};
	});

	$effect(() => {
		if (pickerContainer && emojiPickerVisible) {
			pickerContainer.appendChild(emojiPicker);
		} else if (pickerContainer) {
			pickerContainer.innerHTML = '';
		}
	});
	function toggleEmojiPicker() {
		emojiPickerVisible = !emojiPickerVisible;
	}
</script>

<Popover.Root bind:open={emojiPickerVisible}>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button variant="outline" size="icon" {...props} onclick={toggleEmojiPicker}>
				<SmileIcon class="text-muted-foreground hover:text-foreground h-5 w-5 transition" />
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-full">
		<div class="" bind:this={pickerContainer}></div>
	</Popover.Content>
</Popover.Root>
