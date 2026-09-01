<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PartnerSlider from '$lib/components/PartnerSlider.svelte';
	import trainingBannerImg from '$lib/assets/Rocky-mtn-safety/Workforce Training Banner-1.png';
	import classroomImg from '$lib/assets/Rocky-mtn-safety/Rocky Mountain Safety post.png';
	import { t } from '$lib/i18n/index.svelte';

	const courses = [
		{
			title: 'SafeLandUSA / Basic 7.0',
			category: 'Oilfield Orientation',
			descKey: 'services.course1Desc'
		},
		{
			title: 'PEC H2S Clear',
			category: 'Toxic Gas Safety',
			descKey: 'services.course2Desc'
		},
		{
			title: 'Basin United Orientation',
			category: 'Regional E&P Standard',
			descKey: 'services.course3Desc'
		},
		{
			title: 'OSHA 10 & 30 Hour',
			category: 'General Industry & Construction',
			descKey: 'services.course4Desc'
		},
		{
			title: 'CPR, First Aid & AED',
			category: 'Emergency Response',
			descKey: 'services.course5Desc'
		},
		{
			title: 'Forklift & Equipment Operations',
			category: 'Heavy Machinery',
			descKey: 'services.course6Desc'
		}
	];
</script>

<svelte:head>
	<title>{t('trainingPage.title')}</title>
	<meta
		name="description"
		content={t('trainingPage.metaDesc')}
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
						{t('trainingPage.badge')}
					</div>
					<h1 class="text-3xl sm:text-5xl font-extralight uppercase text-slate-900 tracking-tight font-['Outfit']">
						{t('trainingPage.headingPrefix')} <span class="font-normal text-[rgb(210,47,37)]">{t('trainingPage.headingHighlight')}</span>
					</h1>
					<p class="text-base text-slate-700 leading-relaxed">
						{t('trainingPage.subheading')}
					</p>
					<div class="pt-2 flex flex-col sm:flex-row gap-4">
						<a
							href="/quote"
							class="px-8 py-3.5 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-block text-center shadow-md"
						>
							{t('trainingPage.ctaSchedule')}
						</a>
					</div>
				</div>

				<div class="lg:col-span-5">
					<div class="industrial-card p-2 bg-white border border-slate-300 overflow-hidden shadow-xl">
						<img 
							src={trainingBannerImg} 
							alt="Certified safety training instructors for industrial and oilfield workforce" 
							class="w-full h-auto object-cover"
						/>
						<div class="p-3 bg-slate-900 border-t border-slate-800 text-center font-mono text-xs text-white uppercase">
							{t('trainingPage.bannerBadge')}
						</div>
					</div>
				</div>
			</div>

			<!-- Course Catalog Grid -->
			<div class="space-y-6">
				<div class="border-b border-slate-200 pb-3 flex items-center justify-between">
					<h2 class="text-xl font-bold uppercase text-slate-900 tracking-tight">{t('trainingPage.availableCoursesHeading')}</h2>
					<span class="text-xs font-mono text-slate-600 uppercase hidden sm:block">{t('trainingPage.bilingualBadgeText')}</span>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each courses as course}
						<div class="industrial-box p-6 space-y-3 hover:border-[rgb(210,47,37)] transition-colors bg-white">
							<span class="text-[10px] font-mono font-bold text-[rgb(210,47,37)] uppercase tracking-wider block">{course.category}</span>
							<h3 class="text-lg font-bold uppercase text-slate-900 tracking-tight">{course.title}</h3>
							<p class="text-xs text-slate-600 leading-relaxed">{t(course.descKey)}</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Classroom Showcase Card -->
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
				<div class="lg:col-span-5">
					<div class="industrial-card p-2 bg-white border border-slate-300 overflow-hidden shadow-md">
						<img 
							src={classroomImg} 
							alt="Classroom and practical hands-on safety instruction" 
							class="w-full h-auto object-cover"
						/>
					</div>
				</div>
				<div class="lg:col-span-7 space-y-4">
					<span class="text-xs font-mono text-[rgb(210,47,37)] uppercase font-bold tracking-wider">{t('trainingPage.deliveryBadge')}</span>
					<h2 class="text-2xl font-bold text-slate-900 uppercase">{t('trainingPage.deliveryHeading')}</h2>
					<p class="text-sm text-slate-700 leading-relaxed">
						{t('trainingPage.deliveryDesc')}
					</p>
					<a
						href="/quote"
						class="inline-block px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
					>
						{t('trainingPage.bookOnsite')}
					</a>
				</div>
			</div>

		</div>

		<div class="pt-16">
			<PartnerSlider />
		</div>
	</main>

	<Footer />
</div>
