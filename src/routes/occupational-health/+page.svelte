<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PartnerSlider from '$lib/components/PartnerSlider.svelte';
	import healthWorkerImg from '$lib/assets/Rocky-mtn-safety/IMG-20260522-WA0005.jpg';
	import { t } from '$lib/i18n/index.svelte';
</script>

<svelte:head>
	<title>{t('healthPage.title')}</title>
	<meta
		name="description"
		content={t('healthPage.metaDesc')}
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
						{t('healthPage.badge')}
					</div>
					<h1 class="text-3xl sm:text-5xl font-extralight uppercase text-slate-900 tracking-tight font-['Outfit']">
						{t('healthPage.headingPrefix')} <span class="font-normal text-[rgb(210,47,37)]">{t('healthPage.headingHighlight')}</span>
					</h1>
					<p class="text-base text-slate-700 leading-relaxed">
						{t('healthPage.subheading')}
					</p>
					<div class="pt-2">
						<a
							href="/quote"
							class="inline-block px-8 py-3.5 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
						>
							{t('healthPage.ctaSchedule')}
						</a>
					</div>
				</div>

				<div class="lg:col-span-5">
					<div class="industrial-card p-2 bg-white border border-slate-300 overflow-hidden shadow-xl">
						<img 
							src={healthWorkerImg} 
							alt="On-site occupational health and safety testing services" 
							class="w-full h-auto object-cover"
						/>
						<div class="p-3 bg-slate-900 border-t border-slate-800 text-center font-mono text-xs text-white uppercase">
							{t('healthPage.bannerBadge')}
						</div>
					</div>
				</div>
			</div>

			<!-- Mobile Testing Services Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="industrial-card p-6 space-y-3 bg-white border-l-4 border-l-[rgb(210,47,37)]">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h2 class="text-lg font-bold uppercase text-slate-900">{t('healthPage.service1Title')}</h2>
					<p class="text-xs text-slate-600 leading-relaxed">
						{t('healthPage.service1Desc')}
					</p>
				</div>

				<div class="industrial-card p-6 space-y-3 bg-white border-l-4 border-l-[rgb(210,47,37)]">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h2 class="text-lg font-bold uppercase text-slate-900">{t('healthPage.service2Title')}</h2>
					<p class="text-xs text-slate-600 leading-relaxed">
						{t('healthPage.service2Desc')}
					</p>
				</div>

				<div class="industrial-card p-6 space-y-3 bg-white border-l-4 border-l-[rgb(210,47,37)]">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h2 class="text-lg font-bold uppercase text-slate-900">{t('healthPage.service3Title')}</h2>
					<p class="text-xs text-slate-600 leading-relaxed">
						{t('healthPage.service3Desc')}
					</p>
				</div>

				<div class="industrial-card p-6 space-y-3 bg-white border-l-4 border-l-[rgb(210,47,37)]">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h2 class="text-lg font-bold uppercase text-slate-900">{t('healthPage.service4Title')}</h2>
					<p class="text-xs text-slate-600 leading-relaxed">
						{t('healthPage.service4Desc')}
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
