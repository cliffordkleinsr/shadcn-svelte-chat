import type { UseAutoScrollOptions } from '../../types.js';
export declare function useAutoScroll(options?: UseAutoScrollOptions): {
	scrollState: {
		isAtBottom: boolean;
		autoScrollEnabled: boolean;
	};
	readonly scrollRef: HTMLDivElement | undefined;
	readonly userHasScrolled: boolean;
	isAtBottom: boolean;
	autoScrollEnabled: boolean;
	scrollToBottom: () => void;
	disableAutoScroll(): void;
};
