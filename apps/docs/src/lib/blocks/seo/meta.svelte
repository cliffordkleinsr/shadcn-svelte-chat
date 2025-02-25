<script lang="ts">
	import { page } from '$app/state';
	interface SEO {
		title: string;
		description: string;
		type: string;
	}

	let { title, description, type }: SEO = $props();

	const base = $derived(page.url.href);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Package for adding customizable and re-usable chat components to your svelte applications. "
	/>
	<meta name="author" content="Clifford Njoroge" />
	<meta name="robots" content="index, follow" />
	<link
		rel="icon"
		href="https://res.cloudinary.com/dmy8yp9el/image/upload/v1740465090/favicon_sfzfpw.png"
	/>
	<link rel="canonical" href={base} />
	{@html `
        <script type="application/ld+json">
            {
                "@context": "https://schema.org/",
                "@type": "${type}",
                "url": "${base}",
                "name": "${title} • shadcn-svelte-chat.vercel.app",
                "description": "${description}",
				"logo": "https://res.cloudinary.com/dmy8yp9el/image/upload/v1740465090/favicon_sfzfpw.png"
            }
        </script>
    `}
</svelte:head>
