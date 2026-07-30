<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import PartnerSlider from '$lib/components/PartnerSlider.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Rocky Mountain Safety | Training, OQ &amp; Mobile Testing | Durango, CO</title>
	<meta
		name="description"
		content="Four Corners safety training, pipeline OQ evaluations, NCCER workforce services, drug and alcohol collection, respirator fit testing and mobile hearing testing from Rocky Mountain Safety by Safe Hands in Durango, Colorado."
	/>
</svelte:head>

<div class="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans selection:bg-[rgb(210,47,37)] selection:text-white">
	<Header />
	<main>
		<Hero />
		<PartnerSlider />
	</main>
	<Footer />
</div>
