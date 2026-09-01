<script lang="ts">
	import { t } from '$lib/i18n/index.svelte';
</script>

<section id="about" class="py-16 sm:py-24 bg-white border-b border-slate-200" aria-labelledby="why-heading">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
		
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto space-y-3">
			<div class="inline-block px-3 py-1 bg-slate-100 border border-slate-300 text-xs font-mono text-slate-700 uppercase tracking-widest">
				{t('whyChooseUs.badge')}
			</div>
			<h2 id="why-heading" class="text-3xl sm:text-4xl font-extralight uppercase text-slate-900 tracking-tight font-['Outfit']">
				{t('whyChooseUs.titlePrefix')} <span class="font-normal text-[rgb(210,47,37)]">{t('whyChooseUs.titleHighlight')}</span>
			</h2>
			<p class="text-base text-slate-600 font-light">
				{t('whyChooseUs.subtitle')}
			</p>
		</div>

		<!-- Grid of 4 Key Advantages -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="industrial-card p-6 space-y-2 border-l-4 border-l-[rgb(210,47,37)]">
				<h3 class="text-lg font-light uppercase text-slate-900 tracking-tight font-['Outfit']">{t('whyChooseUs.feature1Title')}</h3>
				<p class="text-xs text-slate-600 leading-relaxed font-light">{t('whyChooseUs.feature1Desc')}</p>
			</div>

			<div class="industrial-card p-6 space-y-2 border-l-4 border-l-[rgb(210,47,37)]">
				<h3 class="text-lg font-light uppercase text-slate-900 tracking-tight font-['Outfit']">{t('whyChooseUs.feature2Title')}</h3>
				<p class="text-xs text-slate-600 leading-relaxed font-light">{t('whyChooseUs.feature2Desc')}</p>
			</div>

			<div class="industrial-card p-6 space-y-2 border-l-4 border-l-[rgb(210,47,37)]">
				<h3 class="text-lg font-light uppercase text-slate-900 tracking-tight font-['Outfit']">{t('whyChooseUs.feature3Title')}</h3>
				<p class="text-xs text-slate-600 leading-relaxed font-light">{t('whyChooseUs.feature3Desc')}</p>
			</div>

			<div class="industrial-card p-6 space-y-2 border-l-4 border-l-[rgb(210,47,37)]">
				<h3 class="text-lg font-light uppercase text-slate-900 tracking-tight font-['Outfit']">{t('whyChooseUs.feature4Title')}</h3>
				<p class="text-xs text-slate-600 leading-relaxed font-light">{t('whyChooseUs.feature4Desc')}</p>
			</div>
		</div>

		<!-- Motto Showcase Banner -->
		<div class="industrial-box p-8 bg-slate-900 text-white text-center space-y-3">
			<span class="text-xs font-mono text-[rgb(210,47,37)] uppercase font-semibold tracking-widest">{t('whyChooseUs.philosophyBadge')}</span>
			<h3 class="text-xl sm:text-2xl font-light uppercase tracking-wide font-['Outfit'] text-white">
				{t('whyChooseUs.philosophyTitle')}
			</h3>
			<p class="text-xs text-slate-300 max-w-xl mx-auto font-light">
				{t('whyChooseUs.philosophyDesc')}
			</p>
		</div>

	</div>
</section>
