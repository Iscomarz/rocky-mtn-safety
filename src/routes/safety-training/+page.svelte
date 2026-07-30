<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PartnerSlider from '$lib/components/PartnerSlider.svelte';
	import trainingBannerImg from '$lib/assets/Rocky-mtn-safety/Workforce Training Banner-1.png';
	import classroomImg from '$lib/assets/Rocky-mtn-safety/Rocky Mountain Safety post.png';

	const courses = [
		{
			title: 'SafeLandUSA / Basic 7.0',
			category: 'Oilfield Orientation',
			desc: 'Standardized safety orientation for onshore E&P operations, accepted by major operator facilities nationwide.'
		},
		{
			title: 'PEC H2S Clear',
			category: 'Toxic Gas Safety',
			desc: 'Comprehensive 4-hour hydrogen sulfide awareness course covering gas properties, monitors, escape hoods, and rescue procedures.'
		},
		{
			title: 'Basin United Orientation',
			category: 'Regional E&P Standard',
			desc: 'Basin United fundamental and leadership orientations for workers operating in Permian, Bakken, and Rocky Mountain basins.'
		},
		{
			title: 'OSHA 10 & 30 Hour',
			category: 'General Industry & Construction',
			desc: 'Official OSHA hazard recognition instruction providing Department of Labor completion cards.'
		},
		{
			title: 'CPR, First Aid & AED',
			category: 'Emergency Response',
			desc: 'Hands-on practical life-saving responder certification tailored for remote industrial job sites.'
		},
		{
			title: 'Forklift & Equipment Operations',
			category: 'Heavy Machinery',
			desc: 'Powered industrial truck operator safety certification, inspections, and hands-on performance evaluations.'
		},
		{
			title: 'MSHA Surface Mining',
			category: 'Mine Safety',
			desc: 'Part 48 surface mining safety training and refresher courses for contractors working on mine properties.'
		}
	];
</script>

<svelte:head>
	<title>Safety Training Courses | SafeLand, H2S Clear, OSHA | Rocky Mountain Safety</title>
	<meta
		name="description"
		content="Certified industrial safety training in Colorado and the Four Corners. SafeLandUSA, PEC H2S Clear, Basin United, OSHA 10/30, CPR/First Aid, Forklift, and MSHA surface mining. Available in English and Spanish."
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
						BILINGUAL INDUSTRIAL INSTRUCTION
					</div>
					<h1 class="text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
						SAFETY TRAINING <span class="text-[rgb(210,47,37)]">COURSES</span>
					</h1>
					<p class="text-base text-slate-700 leading-relaxed">
						Delivering industry-recognized safety certifications for pipeline, oilfield, construction, and mining workforces. Instructed fluently in English and Spanish.
					</p>
					<div class="pt-2 flex flex-col sm:flex-row gap-4">
						<a
							href="/quote"
							class="px-8 py-3.5 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-block text-center shadow-md"
						>
							SCHEDULE A CLASS
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
							EMPOWER YOUR TEAM • ENHANCE SAFETY
						</div>
					</div>
				</div>
			</div>

			<!-- Course Catalog Grid -->
			<div class="space-y-6">
				<div class="border-b border-slate-200 pb-3 flex items-center justify-between">
					<h2 class="text-xl font-bold uppercase text-slate-900 tracking-tight">AVAILABLE CERTIFICATION COURSES</h2>
					<span class="text-xs font-mono text-slate-600 uppercase hidden sm:block">ENGLISH &amp; SPANISH AVAILABLE</span>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each courses as course}
						<div class="industrial-box p-6 space-y-3 hover:border-[rgb(210,47,37)] transition-colors bg-white">
							<span class="text-[10px] font-mono font-bold text-[rgb(210,47,37)] uppercase tracking-wider block">{course.category}</span>
							<h3 class="text-lg font-bold uppercase text-slate-900 tracking-tight">{course.title}</h3>
							<p class="text-xs text-slate-600 leading-relaxed">{course.desc}</p>
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
					<span class="text-xs font-mono text-[rgb(210,47,37)] uppercase font-bold tracking-wider">FLEXIBLE DELIVERY</span>
					<h2 class="text-2xl font-bold text-slate-900 uppercase">CLASSROOM &amp; FIELD INSTRUCTION</h2>
					<p class="text-sm text-slate-700 leading-relaxed">
						Whether at our Durango facility or directly at your company yard, our bilingual instructors ensure your workers thoroughly understand safety protocols and pass certification requirements efficiently.
					</p>
					<a
						href="/quote"
						class="inline-block px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
					>
						BOOK ON-SITE TRAINING
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
