<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import logoPng from '$lib/assets/Rocky-mtn-safety/RMS by Safe Hands Logo.png';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="apple-touch-icon" href={logoPng} />
</svelte:head>

{#key page.url.pathname}
	<div in:fade={{ duration: 220, delay: 40 }} out:fade={{ duration: 150 }}>
		{@render children()}
	</div>
{/key}


