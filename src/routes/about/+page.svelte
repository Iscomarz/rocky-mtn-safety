<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhyChooseUs from '$lib/components/WhyChooseUs.svelte';
	import PartnerSlider from '$lib/components/PartnerSlider.svelte';
	import aboutFieldImg from '$lib/assets/Rocky-mtn-safety/IMG-20260522-WA0006.jpg';
</script>

<svelte:head>
	<title>About Us | Rocky Mountain Safety by Safe Hands | Durango, CO</title>
	<meta
		name="description"
		content="Learn about Rocky Mountain Safety by Safe Hands in Durango, CO. Experienced local safety leadership, bilingual instruction, and mobile health services across the Four Corners."
	/>
</svelte:head>

<div class="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans flex flex-col justify-between">
	<Header />

	<main class="border-b border-slate-200 flex-1">
		<!-- Hero Image Header for About -->
		<section class="py-12 bg-white border-b border-slate-200">
			<div class="max-w-6xl mx-auto px-4 sm:px-6">
				<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
					<div class="lg:col-span-7 space-y-3">
						<span class="text-xs font-mono text-[rgb(210,47,37)] uppercase font-bold tracking-wider">OUR FIELD EXPERIENCE</span>
						<h1 class="text-3xl sm:text-4xl lg:text-5xl font-extralight uppercase text-slate-900 tracking-tight font-['Outfit']">
							ADVICE. YOU CAN RELY ON. STRATEGIES. THAT WORK. <br /><span class="font-normal text-[rgb(210,47,37)]">EXPERTS. WHOVE BEEN THERE.</span>
						</h1>
						<p class="text-sm text-slate-700 leading-relaxed">
							Rocky Mountain Safety by Safe Hands delivers local expertise and national standards across Durango, Southwest Colorado, New Mexico, Arizona, and Utah.
						</p>
					</div>
					<div class="lg:col-span-5">
						<div class="industrial-card p-2 bg-white border border-slate-300 overflow-hidden shadow-xl">
							<img 
								src={aboutFieldImg} 
								alt="Rocky Mountain Safety certified field team overlooking industrial facility" 
								class="w-full h-auto object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

		<WhyChooseUs />
		<PartnerSlider />
	</main>

	<Footer />
</div>
