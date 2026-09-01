<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ServiceArea from '$lib/components/ServiceArea.svelte';
	import PartnerSlider from '$lib/components/PartnerSlider.svelte';
	import areaLandscapeImg from '$lib/assets/Rocky-mtn-safety/IMG-20260522-WA0004.jpg';
	import { t } from '$lib/i18n/index.svelte';
</script>

<svelte:head>
	<title>{t('serviceAreaPage.title')}</title>
	<meta
		name="description"
		content={t('serviceAreaPage.metaDesc')}
	/>
</svelte:head>

<div class="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans flex flex-col justify-between">
	<Header />

	<main class="border-b border-slate-200 flex-1">
		<section class="py-12 bg-white border-b border-slate-200">
			<div class="max-w-6xl mx-auto px-4 sm:px-6">
				<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
					<div class="lg:col-span-7 space-y-3">
						<span class="text-xs font-mono text-[rgb(210,47,37)] uppercase font-bold tracking-wider">{t('serviceAreaPage.badge')}</span>
						<h1 class="text-3xl sm:text-4xl lg:text-5xl font-extralight uppercase text-slate-900 tracking-tight font-['Outfit']">
							{t('serviceAreaPage.headingPrefix')} <span class="font-normal text-[rgb(210,47,37)]">{t('serviceAreaPage.headingHighlight')}</span>
						</h1>
						<p class="text-sm text-slate-700 leading-relaxed">
							{t('serviceAreaPage.subheading')}
						</p>
					</div>
					<div class="lg:col-span-5">
						<div class="industrial-card p-2 bg-white border border-slate-300 overflow-hidden shadow-xl">
							<img 
								src={areaLandscapeImg} 
								alt="Rocky Mountain Safety Four Corners industrial oilfield landscape" 
								class="w-full h-auto object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

		<ServiceArea />
		<PartnerSlider />
	</main>

	<Footer />
</div>
