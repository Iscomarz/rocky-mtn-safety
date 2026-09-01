<script lang="ts">
	import { t } from '$lib/i18n/index.svelte';

	let openIndex = $state<number | null>(0);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}

	const faqs = $derived([
		{
			q: t('faq.q1'),
			a: t('faq.a1')
		},
		{
			q: t('faq.q2'),
			a: t('faq.a2')
		},
		{
			q: t('faq.q3'),
			a: t('faq.a3')
		},
		{
			q: t('faq.q4'),
			a: t('faq.a4')
		},
		{
			q: t('faq.q5'),
			a: t('faq.a5')
		}
	]);

	const faqJsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: faqs.map((faq) => ({
				'@type': 'Question',
				name: faq.q,
				acceptedAnswer: {
					'@type': 'Answer',
					text: faq.a
				}
			}))
		})
	);
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${faqJsonLd}</script>`}
</svelte:head>

<section class="py-16 sm:py-20 bg-white border-b border-slate-200" aria-labelledby="faq-heading">
	<div class="max-w-5xl mx-auto px-4 sm:px-6">
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
			<span class="text-xs font-mono text-[rgb(210,47,37)] uppercase font-bold tracking-widest block">
				{t('faq.badge')}
			</span>
			<h2 id="faq-heading" class="text-3xl sm:text-4xl font-extralight uppercase text-slate-900 tracking-tight font-['Outfit']">
				{t('faq.titlePrefix')} <span class="font-normal text-[rgb(210,47,37)]">{t('faq.titleHighlight')}</span>
			</h2>
			<p class="text-sm sm:text-base text-slate-600 leading-relaxed">
				{t('faq.subtitle')}
			</p>
		</div>

		<!-- Accordion List -->
		<div class="space-y-4">
			{#each faqs as faq, index}
				{@const isOpen = openIndex === index}
				<div 
					class="border transition-all duration-200 {isOpen ? 'border-slate-400 bg-slate-50/70 border-l-4 border-l-[rgb(210,47,37)] shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}"
				>
					<button
						type="button"
						class="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(210,47,37)] cursor-pointer"
						onclick={() => toggle(index)}
						aria-expanded={isOpen}
						aria-controls={`faq-answer-${index}`}
						id={`faq-question-${index}`}
					>
						<span class="text-base sm:text-lg font-medium text-slate-900 font-['Outfit'] pr-2">
							{faq.q}
						</span>
						<span 
							class="w-7 h-7 flex-shrink-0 flex items-center justify-center font-mono text-xs border transition-colors {isOpen ? 'bg-[rgb(210,47,37)] text-white border-[rgb(210,47,37)]' : 'bg-slate-100 text-slate-600 border-slate-300'}"
							aria-hidden="true"
						>
							{#if isOpen}
								−
							{:else}
								+
							{/if}
						</span>
					</button>

					{#if isOpen}
						<div
							id={`faq-answer-${index}`}
							role="region"
							aria-labelledby={`faq-question-${index}`}
							class="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-200/60"
						>
							<p>{faq.a}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Bottom CTA Prompt -->
		<div class="mt-12 text-center p-6 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
			<div class="text-left">
				<h3 class="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
					{t('whyChooseUs.feature1Title')}
				</h3>
				<p class="text-xs text-slate-600">
					{t('footer.tagline')}
				</p>
			</div>
			<a
				href="/quote"
				class="px-5 py-2.5 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap"
			>
				{t('nav.requestQuote')} →
			</a>
		</div>
	</div>
</section>
