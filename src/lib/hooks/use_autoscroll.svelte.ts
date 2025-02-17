import type { ScrollState, UseAutoScrollOptions } from '$lib/types.js';

export class UseAutoScroll {
	#ref = $state<HTMLElement | null>(null);
	#lastContentHeight = $state(0);
	#userHasScrolled = $state(false);

	scrollState = $state<ScrollState>({
		isAtBottom: true,
		autoScrollEnabled: true
	});

	#offset: number;
	#smooth: boolean;
	#content: any;
	#resizeObserver: ResizeObserver | null = null;

	constructor(options: UseAutoScrollOptions = {}) {
		this.#offset = options.offset ?? 20;
		this.#smooth = options.smooth ?? false;
		this.#content = options.content;

		this.#setupResizeObserver();
		$effect(() => {
			this.#handleContentChange();
		});
	}

	#checkIsAtBottom(element: HTMLElement): boolean {
		const { scrollTop, scrollHeight, clientHeight } = element;
		const distanceToBottom = Math.abs(scrollHeight - scrollTop - clientHeight);
		return distanceToBottom <= this.#offset;
	}

	scrollToBottom(instant = false) {
		if (!this.#ref) return;

		const targetScrollTop = this.#ref.scrollHeight - this.#ref.clientHeight;

		if (instant) {
			this.#ref.scrollTop = targetScrollTop;
		} else {
			this.#ref.scrollTo({
				top: targetScrollTop,
				behavior: this.#smooth ? 'smooth' : 'auto'
			});
		}

		this.scrollState = {
			isAtBottom: true,
			autoScrollEnabled: true
		};
		this.#userHasScrolled = false;
	}

	#handleScroll = () => {
		if (!this.#ref) return;

		const atBottom = this.#checkIsAtBottom(this.#ref);

		this.scrollState = {
			isAtBottom: atBottom,
			// Re-enable auto-scroll if at the bottom
			autoScrollEnabled: atBottom ? true : this.scrollState.autoScrollEnabled
		};
	};

	setRef(element: HTMLElement | null) {
		if (this.#ref) {
			// Clean up old listeners
			this.#ref.removeEventListener('scroll', this.#handleScroll);
			this.#resizeObserver?.disconnect();
		}

		this.#ref = element;

		if (element) {
			// Set up new listeners
			element.addEventListener('scroll', this.#handleScroll, { passive: true });
			this.#setupResizeObserver();
		}
	}

	#setupResizeObserver() {
		this.#resizeObserver?.disconnect();

		if (this.#ref) {
			this.#resizeObserver = new ResizeObserver(() => {
				if (this.scrollState.autoScrollEnabled) {
					this.scrollToBottom(true);
				}
			});

			this.#resizeObserver.observe(this.#ref);
		}
	}

	#handleContentChange() {
		const scrollElement = this.#ref;
		if (!scrollElement) return;

		const currentHeight = scrollElement.scrollHeight;
		const hasNewContent = currentHeight !== this.#lastContentHeight;

		if (hasNewContent) {
			if (this.scrollState.autoScrollEnabled) {
				requestAnimationFrame(() => {
					this.scrollToBottom(this.#lastContentHeight === 0);
				});
			}
			this.#lastContentHeight = currentHeight;
		}
	}

	disableAutoScroll() {
		const atBottom = this.#ref ? this.#checkIsAtBottom(this.#ref) : false;

		// Only disable if not at bottom
		if (!atBottom) {
			this.#userHasScrolled = true;
			this.scrollState = {
				...this.scrollState,
				autoScrollEnabled: false
			};
		}
	}

	// Clean up method to remove listeners
	destroy() {
		if (this.#ref) {
			this.#ref.removeEventListener('scroll', this.#handleScroll);
		}
		this.#resizeObserver?.disconnect();
	}

	get ref() {
		return this.#ref;
	}

	get isAtBottom() {
		return this.scrollState.isAtBottom;
	}

	get autoScrollEnabled() {
		return this.scrollState.autoScrollEnabled;
	}
}
