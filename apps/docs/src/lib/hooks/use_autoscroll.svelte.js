export function useAutoScroll(options = {}) {
	const { offset = 20, smooth = false, content } = options;
	let scrollRef = $state();
	let lastContentHeight = $state(0);
	let userHasScrolled = $state(false);
	let scrollState = $state({
		isAtBottom: true,
		autoScrollEnabled: true
	});
	function checkIsAtBottom(element) {
		const { scrollTop, scrollHeight, clientHeight } = element;
		const distanceToBottom = Math.abs(scrollHeight - scrollTop - clientHeight);
		return distanceToBottom <= offset;
	}
	function scrollToBottom(instant) {
		if (!scrollRef) return;
		const targetScrollTop = scrollRef.scrollHeight - scrollRef.clientHeight;
		if (instant) {
			scrollRef.scrollTop = targetScrollTop;
		} else {
			scrollRef.scrollTo({
				top: targetScrollTop,
				behavior: smooth ? 'smooth' : 'auto'
			});
		}
		scrollState.isAtBottom = true;
		scrollState.autoScrollEnabled = true;
	}
	function handleScroll() {
		if (!scrollRef) return;
		const atBottom = checkIsAtBottom(scrollRef);
		scrollState.isAtBottom = atBottom;
		scrollState.autoScrollEnabled = atBottom ? true : scrollState.autoScrollEnabled;
	}
	$effect(() => {
		if (!scrollRef) return;
		const currentHeight = scrollRef.scrollHeight;
		const hasNewContent = currentHeight !== lastContentHeight;
		if (hasNewContent) {
			if (scrollState.autoScrollEnabled) {
				requestAnimationFrame(() => {
					scrollToBottom(lastContentHeight === 0);
				});
			}
			lastContentHeight = currentHeight;
		}
	});
	$effect(() => {
		if (!scrollRef) return;
		const resizeObserver = new ResizeObserver(() => {
			if (scrollState.autoScrollEnabled) {
				scrollToBottom(true);
			}
		});
		resizeObserver.observe(scrollRef);
		return () => resizeObserver.disconnect();
	});
	return {
		scrollState,
		get scrollRef() {
			return scrollRef;
		},
		get userHasScrolled() {
			return userHasScrolled;
		},
		isAtBottom: scrollState.isAtBottom,
		autoScrollEnabled: scrollState.autoScrollEnabled,
		scrollToBottom: () => scrollToBottom(false),
		disableAutoScroll() {
			const atBottom = scrollRef ? checkIsAtBottom(scrollRef) : false;
			// Only disable if not at bottom
			if (!atBottom) {
				userHasScrolled = true;
				scrollState.autoScrollEnabled = false;
			}
		}
	};
}
