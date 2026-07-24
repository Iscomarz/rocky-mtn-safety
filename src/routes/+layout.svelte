<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import logoPng from '$lib/assets/Rocky-mtn-safety/RMS by Safe Hands Logo.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="apple-touch-icon" href={logoPng} />
</svelte:head>

{@render children()}

