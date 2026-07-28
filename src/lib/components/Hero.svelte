<script lang="ts">
	import heroWorkerImg from '$lib/assets/Rocky-mtn-safety/Rocky Mountain Safety Banner (2).png';
</script>

<section id="hero" class="relative py-12 sm:py-20 border-b border-slate-200 bg-[#f8f9fa] overflow-hidden" aria-labelledby="hero-title">
	<!-- Technical Industrial Grid Overlay -->
	<div class="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" aria-hidden="true"></div>

	<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
			
			<!-- Left Text Column -->
			<div class="lg:col-span-7 space-y-6 text-left">
				<!-- Location & Status Tag -->
				<div class="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-300 text-xs font-mono text-slate-700 uppercase tracking-widest shadow-sm">
					<span class="w-2 h-2 bg-[rgb(210,47,37)] animate-pulse"></span>
					<span>DURANGO, CO • SERVING THE FOUR CORNERS REGION</span>
				</div>

				<h1 id="hero-title" class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 leading-tight">
					SAFETY, TRAINING &amp; OCCUPATIONAL HEALTH FOR THE <span class="text-[rgb(210,47,37)]">FOUR CORNERS</span>
				</h1>

				<p class="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
					Rocky Mountain Safety by Safe Hands helps pipeline, oil and gas, construction, mining, and industrial employers train their workforce, verify qualifications, and bring essential health services directly to the job site.
				</p>

				<!-- Action Buttons -->
				<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
					<a
						href="/quote"
						class="px-8 py-4 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2.5 min-h-[48px] shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
					>
						<span>REQUEST A QUOTE</span>
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
						</svg>
					</a>

					<a
						href="/safety-training"
						class="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-mono text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 min-h-[48px] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
					>
						<span>EXPLORE SERVICES</span>
					</a>
				</div>

				<!-- Language & Motto Highlights -->
				<div class="pt-6 border-t border-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div class="industrial-box p-4 flex items-center gap-3">
						<div class="w-2 h-7 bg-[rgb(210,47,37)] shrink-0"></div>
						<div>
							<span class="text-xs font-mono font-bold uppercase text-slate-900 block">BILINGUAL INSTRUCTION</span>
							<span class="text-[11px] text-slate-600">English &amp; Spanish available on-site.</span>
						</div>
					</div>

					<div class="industrial-box p-4 flex items-center gap-3">
						<div class="w-2 h-7 bg-slate-800 shrink-0"></div>
						<div>
							<span class="text-xs font-mono font-bold uppercase text-slate-900 block">OUR MOTTO</span>
							<span class="text-[11px] text-slate-600 italic font-medium">ADVICE you can rely on. EXPERTS who've been there.</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Image Showcase Column -->
			<div class="lg:col-span-5 relative">
				<div class="industrial-card p-2 bg-white border border-slate-300 shadow-xl overflow-hidden group">
					<img 
						src={heroWorkerImg} 
						alt="Rocky Mountain Safety certified field specialist and industrial workplace safety team" 
						class="w-full h-auto object-cover"
					/>
					<div class="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between font-mono text-[11px]">
						<span class="text-white font-bold uppercase">TRAINED TEAMS • SAFER WORKPLACES</span>
						<span class="text-[rgb(210,47,37)] font-bold">QUALIFIED EXPERTS</span>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>
