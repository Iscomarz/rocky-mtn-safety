<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import QuoteForm from '$lib/components/QuoteForm.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<svelte:head>
	<title>Request a Quote | Rocky Mountain Safety by Safe Hands</title>
	<meta
		name="description"
		content="Request a fast quote for safety training, Operator Qualification (OQ) evaluations, NCCER workforce credentials, or mobile testing in the Four Corners region."
	/>
</svelte:head>

<div class="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans flex flex-col justify-between">
	<Header />

	<main class="border-b border-slate-200 flex-1">
		<QuoteForm {form} />
	</main>

	<Footer />
</div>
