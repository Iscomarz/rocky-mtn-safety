<script lang="ts">
	import { t } from '$lib/i18n/index.svelte';
</script>

<section id="service-area" class="py-16 sm:py-24 bg-[#f8f9fa] border-b border-slate-200" aria-labelledby="area-heading">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
		
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto space-y-3">
			<div class="inline-block px-3 py-1 bg-white border border-slate-300 text-xs font-mono text-slate-700 uppercase tracking-widest shadow-sm">
				{t('serviceArea.badge')}
			</div>
			<h2 id="area-heading" class="text-3xl sm:text-4xl font-extralight uppercase text-slate-900 tracking-tight font-['Outfit']">
				{t('serviceArea.titlePrefix')} <span class="font-normal text-[rgb(210,47,37)]">{t('serviceArea.titleHighlight')}</span>
			</h2>
			<p class="text-base text-slate-600 font-light">
				{t('serviceArea.subtitle')}
			</p>
		</div>

		<!-- Regional Coverage Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="industrial-box p-6 space-y-2 hover:border-[rgb(210,47,37)] transition-colors bg-white">
				<div class="flex items-center gap-2">
					<span class="w-2.5 h-2.5 bg-[rgb(210,47,37)] shrink-0"></span>
					<h3 class="text-base font-light uppercase text-slate-900 font-['Outfit'] tracking-tight">{t('serviceArea.area1Title')}</h3>
				</div>
				<p class="text-xs text-slate-600 pl-4 border-l border-slate-200 font-light">{t('serviceArea.area1Detail')}</p>
			</div>

			<div class="industrial-box p-6 space-y-2 hover:border-[rgb(210,47,37)] transition-colors bg-white">
				<div class="flex items-center gap-2">
					<span class="w-2.5 h-2.5 bg-[rgb(210,47,37)] shrink-0"></span>
					<h3 class="text-base font-light uppercase text-slate-900 font-['Outfit'] tracking-tight">{t('serviceArea.area2Title')}</h3>
				</div>
				<p class="text-xs text-slate-600 pl-4 border-l border-slate-200 font-light">{t('serviceArea.area2Detail')}</p>
			</div>

			<div class="industrial-box p-6 space-y-2 hover:border-[rgb(210,47,37)] transition-colors bg-white">
				<div class="flex items-center gap-2">
					<span class="w-2.5 h-2.5 bg-[rgb(210,47,37)] shrink-0"></span>
					<h3 class="text-base font-light uppercase text-slate-900 font-['Outfit'] tracking-tight">{t('serviceArea.area3Title')}</h3>
				</div>
				<p class="text-xs text-slate-600 pl-4 border-l border-slate-200 font-light">{t('serviceArea.area3Detail')}</p>
			</div>

			<div class="industrial-box p-6 space-y-2 hover:border-[rgb(210,47,37)] transition-colors bg-white">
				<div class="flex items-center gap-2">
					<span class="w-2.5 h-2.5 bg-[rgb(210,47,37)] shrink-0"></span>
					<h3 class="text-base font-light uppercase text-slate-900 font-['Outfit'] tracking-tight">{t('serviceArea.area4Title')}</h3>
				</div>
				<p class="text-xs text-slate-600 pl-4 border-l border-slate-200 font-light">{t('serviceArea.area4Detail')}</p>
			</div>
		</div>

		<!-- Mobile Unit Dispatch Highlight -->
		<div class="industrial-card p-6 sm:p-8 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-l-[rgb(210,47,37)]">
			<div class="space-y-1 text-center md:text-left">
				<span class="text-xs font-mono text-[rgb(210,47,37)] uppercase font-semibold tracking-wider">{t('serviceArea.dispatchBadge')}</span>
				<h3 class="text-xl font-light uppercase font-['Outfit'] text-white">{t('serviceArea.dispatchTitle')}</h3>
				<p class="text-xs text-slate-300 font-light">{t('serviceArea.dispatchSubtitle')}</p>
			</div>

			<a
				href="/quote"
				class="px-6 py-3.5 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-md"
			>
				{t('serviceArea.dispatchCta')}
			</a>
		</div>

	</div>
</section>
