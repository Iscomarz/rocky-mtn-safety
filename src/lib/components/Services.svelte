<script lang="ts">
	import { t } from '$lib/i18n/index.svelte';
</script>

<section id="services" class="py-16 sm:py-24 bg-[#f8f9fa] border-b border-slate-200" aria-labelledby="services-heading">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
		
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto space-y-3">
			<div class="inline-block px-3 py-1 bg-white border border-slate-300 text-xs font-mono text-slate-700 uppercase tracking-widest shadow-sm">
				{t('services.badge')}
			</div>
			<h2 id="services-heading" class="text-3xl sm:text-4xl font-extralight uppercase text-slate-900 tracking-tight font-['Outfit']">
				{t('services.titlePrefix')} <span class="font-normal text-[rgb(210,47,37)]">{t('services.titleHighlight')}</span>
			</h2>
			<p class="text-base text-slate-600 font-light">
				{t('services.subtitle')}
			</p>
		</div>

		<!-- 1. OQ Training and Evaluation (Prioritized #1) -->
		<div id="oq-services" class="industrial-card p-6 sm:p-8 space-y-6 border-l-4 border-l-[rgb(210,47,37)] bg-white shadow-md">
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
				<div>
					<span class="text-xs font-mono text-[rgb(210,47,37)] uppercase font-semibold tracking-wider">{t('services.oqBadge')}</span>
					<h3 class="text-xl sm:text-2xl font-light text-slate-900 uppercase tracking-tight font-['Outfit']">{t('services.oqTitle')}</h3>
				</div>
				<div class="flex flex-wrap items-center gap-3">
					<a
						href="https://www.needoq.com"
						target="_blank"
						rel="noopener noreferrer"
						class="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-sm"
					>
						<span>{t('services.oqVisitSite')}</span>
					</a>
					<a
						href="/oq-pipeline"
						class="px-4 py-2 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
					>
						<span>{t('services.oqViewDetails')}</span>
					</a>
				</div>
			</div>

			<p class="text-sm text-slate-700 leading-relaxed font-light">
				{t('services.oqDesc')}
			</p>

			<!-- NeedOQ Guidance Callout Banner -->
			<div class="p-4 bg-red-50/80 border border-red-200/80 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
				<div class="flex items-center gap-2.5 text-slate-800">
					<span class="w-2 h-2 rounded-full bg-[rgb(210,47,37)] shrink-0"></span>
					<span><strong>{t('services.needOqNotice')}</strong> <a href="https://www.needoq.com" target="_blank" rel="noopener noreferrer" class="font-bold underline text-[rgb(210,47,37)] hover:text-[rgb(235,57,47)] font-mono">www.needoq.com</a></span>
				</div>
				<a href="https://www.needoq.com" target="_blank" rel="noopener noreferrer" class="font-mono font-bold text-[rgb(210,47,37)] hover:underline whitespace-nowrap">
					{t('services.needOqLink')}
				</a>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
				<div class="bg-slate-50 p-4 border border-slate-200 space-y-1">
					<h4 class="text-xs font-medium font-mono text-slate-900 uppercase">{t('services.task1Title')}</h4>
					<p class="text-xs text-slate-600 font-light">{t('services.task1Desc')}</p>
				</div>

				<div class="bg-slate-50 p-4 border border-slate-200 space-y-1">
					<h4 class="text-xs font-medium font-mono text-slate-900 uppercase">{t('services.task2Title')}</h4>
					<p class="text-xs text-slate-600 font-light">{t('services.task2Desc')}</p>
				</div>

				<div class="bg-slate-50 p-4 border border-slate-200 space-y-1">
					<h4 class="text-xs font-medium font-mono text-slate-900 uppercase">{t('services.task3Title')}</h4>
					<p class="text-xs text-slate-600 font-light">{t('services.task3Desc')}</p>
				</div>
			</div>
		</div>

		<!-- 2. Occupational Health Testing (Prioritized #2) -->
		<div id="health-testing" class="industrial-card p-6 sm:p-8 space-y-6 border-l-4 border-l-slate-800 bg-white shadow-md">
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
				<div>
					<span class="text-xs font-mono text-slate-600 uppercase font-semibold tracking-wider">{t('services.healthBadge')}</span>
					<h3 class="text-xl sm:text-2xl font-light text-slate-900 uppercase tracking-tight font-['Outfit']">{t('services.healthTitle')}</h3>
				</div>
				<a
					href="/occupational-health"
					class="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 self-start md:self-auto shadow-sm"
				>
					<span>{t('services.healthViewDetails')}</span>
				</a>
			</div>

			<p class="text-sm text-slate-700 leading-relaxed font-light">
				{t('services.healthDesc')}
			</p>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
				<div class="bg-slate-50 p-4 border border-slate-200 space-y-1">
					<h4 class="text-xs font-medium font-mono text-slate-900 uppercase">{t('services.drugTitle')}</h4>
					<p class="text-xs text-slate-600 font-light">{t('services.drugDesc')}</p>
				</div>

				<div class="bg-slate-50 p-4 border border-slate-200 space-y-1">
					<h4 class="text-xs font-medium font-mono text-slate-900 uppercase">{t('services.fitTitle')}</h4>
					<p class="text-xs text-slate-600 font-light">{t('services.fitDesc')}</p>
				</div>

				<div class="bg-slate-50 p-4 border border-slate-200 space-y-1">
					<h4 class="text-xs font-medium font-mono text-slate-900 uppercase">{t('services.audioTitle')}</h4>
					<p class="text-xs text-slate-600 font-light">{t('services.audioDesc')}</p>
				</div>

				<div class="bg-slate-50 p-4 border border-slate-200 space-y-1">
					<h4 class="text-xs font-medium font-mono text-slate-900 uppercase">{t('services.physicalsTitle')}</h4>
					<p class="text-xs text-slate-600 font-light">{t('services.physicalsDesc')}</p>
				</div>
			</div>
		</div>

		<!-- 3. Safety Training Courses (Prioritized #3) -->
		<div id="safety-training" class="space-y-6">
			<div class="border-b border-slate-200 pb-3 flex items-center justify-between">
				<div>
					<span class="text-xs font-mono text-[rgb(210,47,37)] uppercase font-semibold tracking-wider">{t('services.trainingBadge')}</span>
					<h3 class="text-xl sm:text-2xl font-light text-slate-900 uppercase tracking-tight font-['Outfit']">{t('services.trainingTitle')}</h3>
				</div>
				<a href="/safety-training" class="text-xs font-mono text-[rgb(210,47,37)] hover:underline font-semibold uppercase">{t('services.trainingViewAll')}</a>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<div class="industrial-box p-5 space-y-2 hover:border-[rgb(210,47,37)] transition-colors bg-white">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h4 class="text-sm font-medium uppercase text-slate-900 font-['Outfit']">{t('services.course1Title')}</h4>
					<p class="text-xs text-slate-600 leading-relaxed font-light">{t('services.course1Desc')}</p>
				</div>

				<div class="industrial-box p-5 space-y-2 hover:border-[rgb(210,47,37)] transition-colors bg-white">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h4 class="text-sm font-medium uppercase text-slate-900 font-['Outfit']">{t('services.course2Title')}</h4>
					<p class="text-xs text-slate-600 leading-relaxed font-light">{t('services.course2Desc')}</p>
				</div>

				<div class="industrial-box p-5 space-y-2 hover:border-[rgb(210,47,37)] transition-colors bg-white">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h4 class="text-sm font-medium uppercase text-slate-900 font-['Outfit']">{t('services.course3Title')}</h4>
					<p class="text-xs text-slate-600 leading-relaxed font-light">{t('services.course3Desc')}</p>
				</div>

				<div class="industrial-box p-5 space-y-2 hover:border-[rgb(210,47,37)] transition-colors bg-white">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h4 class="text-sm font-medium uppercase text-slate-900 font-['Outfit']">{t('services.course4Title')}</h4>
					<p class="text-xs text-slate-600 leading-relaxed font-light">{t('services.course4Desc')}</p>
				</div>

				<div class="industrial-box p-5 space-y-2 hover:border-[rgb(210,47,37)] transition-colors bg-white">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h4 class="text-sm font-medium uppercase text-slate-900 font-['Outfit']">{t('services.course5Title')}</h4>
					<p class="text-xs text-slate-600 leading-relaxed font-light">{t('services.course5Desc')}</p>
				</div>

				<div class="industrial-box p-5 space-y-2 hover:border-[rgb(210,47,37)] transition-colors bg-white">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h4 class="text-sm font-medium uppercase text-slate-900 font-['Outfit']">{t('services.course6Title')}</h4>
					<p class="text-xs text-slate-600 leading-relaxed font-light">{t('services.course6Desc')}</p>
				</div>
			</div>
		</div>

		<!-- 4. NCCER Workforce Development -->
		<div id="nccer" class="industrial-card p-6 sm:p-8 space-y-4 border-l-4 border-l-slate-400 bg-white">
			<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
				<div class="space-y-1">
					<span class="text-xs font-mono text-slate-600 uppercase font-semibold tracking-wider">{t('services.nccerBadge')}</span>
					<h3 class="text-xl font-light text-slate-900 uppercase font-['Outfit']">{t('services.nccerTitle')}</h3>
				</div>
				<a href="/nccer" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-mono text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto">
					<span>{t('services.nccerLearnMore')}</span>
				</a>
			</div>
			<p class="text-xs text-slate-600 leading-relaxed font-light max-w-3xl">
				{t('services.nccerDesc')}
			</p>
		</div>

	</div>
</section>
