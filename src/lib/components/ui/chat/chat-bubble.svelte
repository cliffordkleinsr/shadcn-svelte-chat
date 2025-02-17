<script lang="ts" module>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { type VariantProps, tv } from 'tailwind-variants';

	const chatBubbleVariant = tv({
		base: 'flex gap-2 max-w-[60%] items-end relative group',
		variants: {
			variant: {
				received: 'self-start',
				sent: 'self-end flex-row-reverse'
			},
			layout: {
				default: '',
				ai: 'max-w-full w-full items-center'
			}
		},
		defaultVariants: {
			variant: 'received',
			layout: 'default'
		}
	});

	type ChatBubbleVariant = VariantProps<typeof chatBubbleVariant>['variant'];
	type ChatBubbleLayout = VariantProps<typeof chatBubbleVariant>['layout'];
	export interface ChatBubbleProps
		extends HTMLAttributes<HTMLElement>,
			VariantProps<typeof chatBubbleVariant> {}
</script>

<script lang="ts">
</script>

<!-- <div class={[chatBubbleVariant({ variant, layout, className }),]}></div> -->
