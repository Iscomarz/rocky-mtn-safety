<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PartnerSlider from '$lib/components/PartnerSlider.svelte';
	import nccerFeatureImg from '$lib/assets/Rocky-mtn-safety/Workforce Training post.png';
	import { t } from '$lib/i18n/index.svelte';
</script>

<svelte:head>
	<title>{t('nccerPage.title')}</title>
	<meta
		name="description"
		content={t('nccerPage.metaDesc')}
	/>
</svelte:head>

<div class="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans flex flex-col justify-between">
	<Header />

	<main class="py-16 sm:py-24 border-b border-slate-200 flex-1">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
			
			<!-- Header with Image Layout -->
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
				<div class="lg:col-span-7 space-y-4 text-left">
					<div class="inline-block px-3 py-1 bg-white border border-slate-300 text-xs font-mono text-slate-700 uppercase tracking-widest shadow-sm">
						{t('nccerPage.badge')}
					</div>
					<h1 class="text-3xl sm:text-5xl font-extralight uppercase text-slate-900 tracking-tight font-['Outfit']">
						{t('nccerPage.headingPrefix')} <span class="font-normal text-[rgb(210,47,37)]">{t('nccerPage.headingHighlight')}</span>
					</h1>
					<p class="text-base text-slate-700 leading-relaxed font-light">
						{t('nccerPage.subheading')}
					</p>
					<div class="pt-2">
						<a
							href="/quote"
							class="inline-block px-8 py-3.5 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
						>
							{t('nccerPage.ctaRequest')}
						</a>
					</div>
				</div>

				<div class="lg:col-span-5">
					<div class="industrial-card p-2 bg-white border border-slate-300 overflow-hidden shadow-xl">
						<img 
							src={nccerFeatureImg} 
							alt="Craft workforce safety training and blueprint verification" 
							class="w-full h-auto object-cover"
						/>
						<div class="p-3 bg-slate-900 border-t border-slate-800 text-center font-mono text-xs text-white uppercase">
							{t('nccerPage.cardBadge')}
						</div>
					</div>
				</div>
			</div>

			<!-- Core NCCER Pillars -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="industrial-card p-6 space-y-3 bg-white border-l-4 border-l-[rgb(210,47,37)]">
					<div class="w-8 h-8 bg-red-50 border border-[rgb(210,47,37)] flex items-center justify-center font-mono font-bold text-[rgb(210,47,37)] text-sm">
						01
					</div>
					<h2 class="text-base font-light uppercase text-slate-900 font-['Outfit']">{t('nccerPage.feat1Title')}</h2>
					<p class="text-xs text-slate-600 leading-relaxed font-light">
						{t('nccerPage.feat1Desc')}
					</p>
				</div>

				<div class="industrial-card p-6 space-y-3 bg-white border-l-4 border-l-[rgb(210,47,37)]">
					<div class="w-8 h-8 bg-red-50 border border-[rgb(210,47,37)] flex items-center justify-center font-mono font-bold text-[rgb(210,47,37)] text-sm">
						02
					</div>
					<h2 class="text-base font-light uppercase text-slate-900 font-['Outfit']">{t('nccerPage.detailsHeading')}</h2>
					<p class="text-xs text-slate-600 leading-relaxed font-light">
						{t('nccerPage.detailsDesc')}
					</p>
				</div>

				<div class="industrial-card p-6 space-y-3 bg-white border-l-4 border-l-[rgb(210,47,37)]">
					<div class="w-8 h-8 bg-red-50 border border-[rgb(210,47,37)] flex items-center justify-center font-mono font-bold text-[rgb(210,47,37)] text-sm">
						03
					</div>
					<h2 class="text-base font-light uppercase text-slate-900 font-['Outfit']">{t('nccerPage.feat2Title')}</h2>
					<p class="text-xs text-slate-600 leading-relaxed">
						{t('nccerPage.feat2Desc')}
					</p>
				</div>
			</div>
		</div>

		<div class="pt-16">
			<PartnerSlider />
		</div>
	</main>

	<Footer />
</div>
