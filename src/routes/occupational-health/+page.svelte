<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PartnerSlider from '$lib/components/PartnerSlider.svelte';
	import healthWorkerImg from '$lib/assets/Rocky-mtn-safety/IMG-20260522-WA0005.jpg';
</script>

<svelte:head>
	<title>Occupational Health &amp; Mobile Testing | Rocky Mountain Safety</title>
	<meta
		name="description"
		content="On-site mobile drug and alcohol testing, N95/respirator fit testing, audiometric hearing testing, and background checks brought directly to your job site in Colorado, NM, AZ, and UT."
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
						MOBILE ON-SITE MEDICAL SERVICES
					</div>
					<h1 class="text-3xl sm:text-5xl font-extralight uppercase text-slate-900 tracking-tight font-['Outfit']">
						OCCUPATIONAL HEALTH &amp; <span class="font-normal text-[rgb(210,47,37)]">MOBILE TESTING</span>
					</h1>
					<p class="text-base text-slate-700 leading-relaxed">
						We dispatch certified mobile occupational health testing units directly to your job site, yard, or facility — eliminating worker downtime and keeping your operations 100% compliant.
					</p>
					<div class="pt-2">
						<a
							href="/quote"
							class="inline-block px-8 py-3.5 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
						>
							SCHEDULE MOBILE TESTING
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
							MOBILE TESTING • ZERO WORKER DOWNTIME
						</div>
					</div>
				</div>
			</div>

			<!-- Mobile Testing Services Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="industrial-card p-6 space-y-3 bg-white border-l-4 border-l-[rgb(210,47,37)]">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h2 class="text-lg font-bold uppercase text-slate-900">MOBILE DRUG &amp; ALCOHOL TESTING</h2>
					<p class="text-xs text-slate-600 leading-relaxed">
						DOT and Non-DOT urine drug collections, breath alcohol testing (BAT), hair follicle testing, and random drug testing pool management delivered directly to your job site.
					</p>
				</div>

				<div class="industrial-card p-6 space-y-3 bg-white border-l-4 border-l-[rgb(210,47,37)]">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h2 class="text-lg font-bold uppercase text-slate-900">RESPIRATOR FIT TESTING</h2>
					<p class="text-xs text-slate-600 leading-relaxed">
						OSHA-compliant quantitative (PortaCount) and qualitative fit testing for N95, half-mask, and full-face respirators, complete with medical evaluation clearances.
					</p>
				</div>

				<div class="industrial-card p-6 space-y-3 bg-white border-l-4 border-l-[rgb(210,47,37)]">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h2 class="text-lg font-bold uppercase text-slate-900">AUDIOMETRIC (HEARING) TESTING</h2>
					<p class="text-xs text-slate-600 leading-relaxed">
						Mobile hearing conservation testing with CAOHC-certified technicians to monitor baseline and annual noise exposure thresholds for field personnel.
					</p>
				</div>

				<div class="industrial-card p-6 space-y-3 bg-white border-l-4 border-l-[rgb(210,47,37)]">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h2 class="text-lg font-bold uppercase text-slate-900">EMPLOYEE BACKGROUND SCREENING</h2>
					<p class="text-xs text-slate-600 leading-relaxed">
						Pre-employment screening, driving record (MVR) checks, and contractor background verifications required for operator site access.
					</p>
				</div>
			</div>

			<!-- Visual Recommendation Box -->
			<div class="industrial-box p-6 border-l-4 border-l-amber-500 bg-amber-50/50 space-y-2">
				<span class="text-xs font-mono font-bold uppercase text-amber-800 block">💡 SUGGESTION FOR ADDITIONAL ASSETS</span>
				<p class="text-xs text-amber-900 leading-relaxed">
					If you have real photos of your <strong>Mobile Testing Van / Collection Trailer</strong> or <strong>Respirator Fit Testing Setup (PortaCount/N95 Hoods)</strong>, pass them over to us and we can embed them right inside these cards for maximum visual authenticity!
				</p>
			</div>
		</div>

		<div class="pt-16">
			<PartnerSlider />
		</div>
	</main>

	<Footer />
</div>
