<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import PartnerSlider from '$lib/components/PartnerSlider.svelte';
</script>

<svelte:head>
	<title>Frequently Asked Questions | Rocky Mountain Safety</title>
	<meta
		name="description"
		content="Frequently asked questions about industrial safety training, Operator Qualification (OQ) evaluations, and mobile health testing across the Four Corners."
	/>
</svelte:head>

<div class="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans flex flex-col justify-between selection:bg-[rgb(210,47,37)] selection:text-white">
	<Header />

	<main class="flex-1">
		<Faq />
		<PartnerSlider />
	</main>

	<Footer />
</div>
