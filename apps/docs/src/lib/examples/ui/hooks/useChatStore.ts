// chatStore.ts
import { writable } from 'svelte/store';
import { ChatBotMessages, type Message, type UserData, userData, Users } from '../../data/data';

// Define the Example interface
export interface Example {
	name: string;
	url: string;
}

// Initial state object containing all properties
const initialState = {
	selectedUser: Users[4],
	selectedExample: { name: 'Messenger example', url: '/' },
	examples: [
		{ name: 'Messenger example', url: '/' },
		{ name: 'Chatbot example', url: '/chatbot' },
		{ name: 'Chatbot2 example', url: '/chatbot2' }
	],
	input: '',
	chatBotMessages: ChatBotMessages,
	messages: userData[0].messages,
	hasInitialAIResponse: false,
	hasInitialResponse: false
};

// Create the writable store
export const chatStore = writable(initialState);

// Action functions to update the store
export function setSelectedExample(example: Example) {
	chatStore.update((state) => ({ ...state, selectedExample: example }));
}

export function setExamples(examples: Example[]) {
	chatStore.update((state) => ({ ...state, examples }));
}

export function setInput(input: string) {
	chatStore.update((state) => ({ ...state, input }));
}

export function handleInputChange(e: Event) {
	const target = e.target as HTMLTextAreaElement;
	chatStore.update((state) => ({ ...state, input: target.value }));
}

export function setchatBotMessages(fn: (chatBotMessages: Message[]) => Message[]) {
	chatStore.update((state) => ({
		...state,
		chatBotMessages: fn(state.chatBotMessages)
	}));
}

export function setMessages(fn: (messages: Message[]) => Message[]) {
	chatStore.update((state) => ({
		...state,
		messages: fn(state.messages)
	}));
}
// export function setMessages(messages: Message[]) {
// 	chatStore.update((state) => ({
// 		...state,
// 		messages: messages
// 	}));
// }

export function setHasInitialAIResponse(hasInitialAIResponse: boolean) {
	chatStore.update((state) => ({ ...state, hasInitialAIResponse }));
}

export function setHasInitialResponse(hasInitialResponse: boolean) {
	chatStore.update((state) => ({ ...state, hasInitialResponse }));
}

// Optional: Add a setter for selectedUser if modification is needed
export function setSelectedUser(user: UserData) {
	chatStore.update((state) => ({ ...state, selectedUser: user }));
}
