<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import WhyChooseUs from '$lib/components/WhyChooseUs.svelte';
	import ServiceArea from '$lib/components/ServiceArea.svelte';
	import PartnerSlider from '$lib/components/PartnerSlider.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Rocky Mountain Safety | Training &amp; OQ | Durango, CO</title>
	<meta
		name="description"
		content="Safety training, pipeline OQ evaluations, and mobile occupational health testing across the Four Corners from Rocky Mountain Safety in Durango, CO."
	/>
</svelte:head>

<div class="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans selection:bg-[rgb(210,47,37)] selection:text-white">
	<Header />
	<main>
		<Hero />
		<Services />
		<WhyChooseUs />
		<ServiceArea />
		<PartnerSlider />
	</main>
	<Footer />
</div>
