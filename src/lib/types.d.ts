export interface ScrollState {
	isAtBottom: boolean;
	autoScrollEnabled: boolean;
}

export interface UseAutoScrollOptions {
	offset?: number;
	smooth?: boolean;
	content?: any;
}
