<script lang="ts">
	import heroBgMobileWebp from '$lib/backgrounds/hero-bg-mobile.webp';
	import heroBgWebp from '$lib/backgrounds/hero-bg.webp';
	import heroBgJpg from '$lib/backgrounds/hero-bg.jpg';
</script>

<section id="hero" class="relative min-h-[calc(100svh-4.5rem)] lg:min-h-[calc(100vh-5rem)] flex items-center py-6 sm:py-10 lg:py-12 border-b border-slate-800 bg-slate-950 text-white overflow-hidden" aria-labelledby="hero-title">
	<!-- Background Image (Responsive WebP & Optimized Fallback) -->
	<picture class="absolute inset-0 w-full h-full">
		<source srcset={heroBgMobileWebp} media="(max-width: 768px)" type="image/webp" />
		<source srcset={heroBgWebp} type="image/webp" />
		<img
			src={heroBgJpg}
			alt="Rocky Mountain Safety industrial workplace and field operations"
			loading="eager"
			fetchpriority="high"
			decoding="async"
			class="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 brightness-105 contrast-105"
		/>
	</picture>

	<!-- Light-Touch Dark Gradient Overlay: Clear Image Visibility with Crisp Text Contrast -->
	<div class="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/25" aria-hidden="true"></div>
	<div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" aria-hidden="true"></div>

	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
		<div class="max-w-3xl space-y-4 sm:space-y-5 lg:space-y-6 text-left">
			
			<!-- Location & Status Badge -->
			<div class="inline-flex items-center gap-2.5 px-3.5 py-1 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-mono text-slate-200 uppercase tracking-widest shadow-lg">
				<span class="w-2 h-2 rounded-full bg-[rgb(210,47,37)] animate-pulse"></span>
				<span>DURANGO, CO • SERVING THE FOUR CORNERS REGION</span>
			</div>

			<!-- Main Title with Fine, Elegant Typography -->
			<h1 id="hero-title" class="text-3xl sm:text-5xl lg:text-6xl font-extralight uppercase tracking-tight text-white leading-[1.1] font-['Outfit']">
				SAFETY, TRAINING &amp; OCCUPATIONAL HEALTH FOR THE <span class="font-normal text-[rgb(210,47,37)]">FOUR CORNERS</span>
			</h1>

			<!-- Subtitle -->
			<p class="text-sm sm:text-base lg:text-lg text-slate-300 font-light leading-relaxed max-w-2xl font-['Plus_Jakarta_Sans']">
				Rocky Mountain Safety by Safe Hands helps pipeline, oil &amp; gas, construction, mining, and industrial employers train their workforce, verify qualifications, and bring essential health services directly to the job site.
			</p>

			<!-- Action Buttons (Visible Above the Fold) -->
			<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
				<a
					href="/quote"
					class="px-7 py-3.5 sm:px-8 sm:py-4 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 inline-flex items-center justify-center gap-2.5 shadow-lg shadow-red-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
				>
					<span>REQUEST A QUOTE</span>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
					</svg>
				</a>

				<a
					href="/safety-training"
					class="px-7 py-3.5 sm:px-8 sm:py-4 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-sm border border-slate-700 text-white font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
				>
					<span>EXPLORE SERVICES</span>
				</a>
			</div>

			<!-- Language & Motto Highlights -->
			<div class="pt-4 sm:pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
				<div class="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-3 sm:p-3.5 flex items-center gap-3">
					<div class="w-1.5 h-7 bg-[rgb(210,47,37)] shrink-0"></div>
					<div>
						<span class="text-xs font-mono font-semibold uppercase text-white block tracking-wider">BILINGUAL INSTRUCTION</span>
						<span class="text-xs text-slate-300 font-light">English &amp; Spanish available on-site.</span>
					</div>
				</div>

				<div class="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-3 sm:p-3.5 flex items-center gap-3">
					<div class="w-1.5 h-7 bg-slate-500 shrink-0"></div>
					<div>
						<span class="text-xs font-mono font-semibold uppercase text-white block tracking-wider">OUR MOTTO</span>
						<span class="text-xs text-slate-300 font-light italic">ADVICE. You can rely on. STRATEGIES. That work. EXPERTS. Whove been there.</span>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>
