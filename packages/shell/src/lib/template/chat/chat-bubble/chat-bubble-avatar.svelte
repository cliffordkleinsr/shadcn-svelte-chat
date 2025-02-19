<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import type { ChatBubbleAvatarProps } from '$lib/types.js';

	let { src, class: className, fallback }: ChatBubbleAvatarProps = $props();
</script>

<Avatar.Root class={[className]}>
	<Avatar.Image {src} alt="avatar" />
	<Avatar.Fallback>{fallback}</Avatar.Fallback>
</Avatar.Root>
