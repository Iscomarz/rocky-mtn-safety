<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PartnerSlider from '$lib/components/PartnerSlider.svelte';
	import oqBannerImg from '$lib/assets/Rocky-mtn-safety/NeedOQ post.png';
	import oqFieldImg from '$lib/assets/Rocky-mtn-safety/IMG-20260522-WA0005.jpg';
	import { t } from '$lib/i18n/index.svelte';
</script>

<svelte:head>
	<title>{t('oqPage.title')}</title>
	<meta
		name="description"
		content={t('oqPage.metaDesc')}
	/>
</svelte:head>

<div class="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans flex flex-col justify-between">
	<Header />

	<main class="py-16 sm:py-24 border-b border-slate-200 flex-1">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
			
			<!-- Page Header with Image Layout -->
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
				<div class="lg:col-span-7 space-y-4 text-left">
					<div class="inline-block px-3 py-1 bg-white border border-slate-300 text-xs font-mono text-slate-700 uppercase tracking-widest shadow-sm">
						{t('oqPage.badge')}
					</div>
					<h1 class="text-3xl sm:text-5xl font-extralight uppercase text-slate-900 tracking-tight font-['Outfit']">
						{t('oqPage.headingPrefix')} <span class="font-normal text-[rgb(210,47,37)]">{t('oqPage.headingHighlight')}</span>
					</h1>
					<p class="text-base text-slate-700 leading-relaxed">
						{t('oqPage.subheading')}
					</p>
					<div class="pt-2 flex flex-wrap items-center gap-3">
						<a
							href="/quote"
							class="inline-block px-8 py-3.5 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
						>
							{t('oqPage.ctaRequest')}
						</a>
						<a
							href="https://www.needoq.com"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-block px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
						>
							{t('oqPage.ctaMore')}
						</a>
					</div>
				</div>

				<div class="lg:col-span-5">
					<div class="industrial-card p-2 bg-white border border-slate-300 overflow-hidden shadow-xl">
						<img 
							src={oqBannerImg} 
							alt="Operator qualification training and pipeline inspection services" 
							class="w-full h-auto object-cover"
						/>
						<div class="p-3 bg-slate-900 border-t border-slate-800 text-center font-mono text-xs text-white uppercase">
							{t('oqPage.cardBadge')}
						</div>
					</div>
				</div>
			</div>

			<!-- Core OQ Capabilities Grid -->
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
				<div class="lg:col-span-5">
					<div class="industrial-card p-2 bg-white border border-slate-300 overflow-hidden shadow-md">
						<img 
							src={oqFieldImg} 
							alt="Certified safety specialist evaluating oil & gas pipeline compliance" 
							class="w-full h-auto object-cover"
						/>
						<div class="p-3 bg-slate-900 border-t border-slate-800 text-center font-mono text-xs text-white uppercase">
							{t('oqPage.fieldBadge')}
						</div>
					</div>
				</div>

				<div class="lg:col-span-7 space-y-6">
					<div class="industrial-card p-6 sm:p-8 space-y-6 border-l-4 border-l-[rgb(210,47,37)]">
						<h2 class="text-xl font-bold uppercase text-slate-900">{t('oqPage.fieldHeading')}</h2>
						<p class="text-sm text-slate-700 leading-relaxed">
							{t('oqPage.fieldDesc')}
						</p>

						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
							<div class="bg-slate-50 p-4 border border-slate-200 space-y-1">
								<h3 class="text-xs font-bold font-mono text-slate-900 uppercase">{t('oqPage.task1Title')}</h3>
								<p class="text-xs text-slate-600">{t('oqPage.task1Desc')}</p>
							</div>

							<div class="bg-slate-50 p-4 border border-slate-200 space-y-1">
								<h3 class="text-xs font-bold font-mono text-slate-900 uppercase">{t('oqPage.task2Title')}</h3>
								<p class="text-xs text-slate-600">{t('oqPage.task2Desc')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- CTA Box -->
			<div class="industrial-box p-8 text-center space-y-4 border-t-2 border-t-[rgb(210,47,37)] bg-white">
				<h3 class="text-xl font-bold uppercase text-slate-900">{t('oqPage.ctaBoxHeading')}</h3>
				<p class="text-xs text-slate-600 max-w-lg mx-auto">
					{t('oqPage.ctaBoxDesc')}
				</p>
				<a
					href="/quote"
					class="inline-block px-8 py-3.5 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
				>
					{t('oqPage.ctaBoxBtn')}
				</a>
			</div>
		</div>

		<div class="pt-16">
			<PartnerSlider />
		</div>
	</main>

	<Footer />
</div>
