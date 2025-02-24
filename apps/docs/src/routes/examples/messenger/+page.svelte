<script lang="ts">
	import type { PageData } from './$types';
	import * as Resizable from '$lib/components/ui/resizable/index.js';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { userData, type Message, type UserData } from '$lib/examples/data/data';
	import EmojiPicker from '$lib/examples/ui/emoji-picker.svelte';
	import Sidebar from '$lib/examples/ui/Sidebar.svelte';
	import Chat from '$lib/examples/ui/chat.svelte';
	import { buttonVariants } from '$lib/components/ui/button';

	let { data }: { data: PageData } = $props();

	const isMobile = new IsMobile();
	let isCollapsed = $state(false);

	let selectedUser = $state(userData[0]);
	interface ChatProps {
		messages?: Message[];
		selectedUser: UserData;
		isMobile: boolean;
	}
</script>
<div class="w-full border border-border lg:max-w-5xl mx-auto my-5">
	<div class="flex place-items-center justify-between border-b bg-background p-2">
<div class="w-full">
	<Resizable.PaneGroup direction="horizontal" class="h-full items-stretch">
		<Resizable.Pane
			defaultSize={20}
			collapsible={true}
			minSize={isMobile.current ? 0 : 24}
			maxSize={isMobile.current ? 8 : 30}
			onCollapse={() => {
				isCollapsed = true;
			}}
			onExpand={() => {
				isCollapsed = false;
			}}
			class={[
				isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out md:min-w-[70px]'
			]}
		>
			<Sidebar
				isCollapsed={isCollapsed || isMobile.current}
				chats={userData.map((user) => ({
					name: user.name,
					messages: user.messages ?? [],
					avatar: user.avatar,
					variant: selectedUser.name === user.name ? 'secondary' : 'ghost'
				}))}
				isMobile={isMobile.current}
			/>
		</Resizable.Pane>
		<Resizable.Handle withHandle />
		<Resizable.Pane defaultSize={80} minSize={30} class="h-full">
			<Chat messages={selectedUser.messages} {selectedUser} isMobile={isMobile.current} />
		</Resizable.Pane>
	</Resizable.PaneGroup>
</div>
</div>
</div>