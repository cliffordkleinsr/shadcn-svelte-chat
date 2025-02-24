<script lang="ts">
	import { userData, type Message, type UserData } from '../data/data';
	import ChatBottombar from './chat-bottombar.svelte';
	import ChatList from './chat-list.svelte';
	import ChatTopbar from './chat-topbar.svelte';
	import { chatStore } from './hooks/useChatStore';

	interface ChatProps {
		messages?: Message[];
		selectedUser: UserData;
		isMobile: boolean;
	}

	let { messages, selectedUser, isMobile }: ChatProps = $props();

	function sendMessage(newMessage: Message) {
		chatStore.update((state) => ({
			...state,
			messages: [...state.messages, newMessage]
		}));
	}

	let messagesState = $derived($chatStore.messages); // Reactively update messagesState
</script>

<div class="flex h-full w-full flex-col justify-between">
	<ChatTopbar {selectedUser} />
	<ChatList messages={messagesState} {selectedUser} {sendMessage} {isMobile} />
	<ChatBottombar {isMobile} />
</div>
