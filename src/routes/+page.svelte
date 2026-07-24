<script lang="ts">
	import logo from '$lib/assets/Rocky-mtn-safety/RMS by Safe Hands Logo.png';
</script>

<svelte:head>
	<title>Rocky Mountain Safety - Industrial Safety Training & Consulting in Colorado</title>
	<meta
		name="description"
		content="Industrial Safety Training & Consulting Services in Colorado. Official website under construction — coming soon."
	/>
</svelte:head>

<div class="relative min-h-screen bg-[rgb(22,22,22)] text-white overflow-hidden flex flex-col justify-between select-none font-sans">
	<!-- Technical Grid Background (Low Cognitive Load) -->
	<div class="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" aria-hidden="true"></div>

	<!-- Top Navigation / Header -->
	<header class="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-zinc-800">
		<div class="flex items-center gap-4">
			<img src={logo} alt="Rocky Mountain Safety Logo" class="h-12 sm:h-14 w-auto object-contain" />
		</div>
		<div 
			class="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[rgb(210,47,37)] text-white text-xs font-bold uppercase tracking-wider min-h-[36px]"
			role="status"
			aria-label="System status: Under construction"
		>
			<span class="w-2 h-2 bg-white animate-pulse" aria-hidden="true"></span>
			<span>UNDER CONSTRUCTION • COMING SOON</span>
		</div>
	</header>

	<!-- Main Content Section -->
	<main class="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center items-center text-center">
		<div class="space-y-10 w-full">
			
			<!-- Headline Block (Typographic Hierarchy) -->
			<section class="space-y-4 max-w-3xl mx-auto" aria-labelledby="main-heading">
				<div class="inline-block px-3 py-1 bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-300 uppercase tracking-widest">
					OFFICIAL PORTAL LAUNCH IN PROGRESS
				</div>
				<h1 id="main-heading" class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
					INDUSTRIAL SAFETY TRAINING &amp; CONSULTING IN <span class="text-[rgb(210,47,37)]">COLORADO</span>
				</h1>
				<p class="text-base sm:text-lg text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed">
					We are launching our full service portal soon. Providing comprehensive workplace safety compliance, OSHA certification, and workforce protection solutions.
				</p>
			</section>

			<!-- Direct Contact Line Card -->
			<section class="max-w-xl mx-auto w-full" aria-label="Contact information">
				<div class="industrial-card p-6 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
					<div class="space-y-1">
						<span class="text-xs uppercase font-mono tracking-wider text-zinc-400 block">DIRECT CONTACT LINE</span>
						<a 
							href="tel:+14322312207" 
							class="text-xl sm:text-2xl font-bold text-white hover:text-[rgb(210,47,37)] tracking-wide block uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(210,47,37)]"
						>
							(432) 231-2207
						</a>
					</div>
					<a
						href="tel:+14322312207"
						class="px-4 py-2.5 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-200 inline-flex items-center gap-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
					>
						<span>CALL US TODAY</span>
					</a>
				</div>
			</section>

			<!-- Service Pillars (Chunking per Miller's Law) -->
			<section class="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto" aria-label="Core services">
				<div class="industrial-box p-4 text-left space-y-2 hover:border-[rgb(210,47,37)] transition-colors duration-200">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h2 class="text-xs font-bold uppercase tracking-wider text-white">OSHA COMPLIANCE</h2>
					<p class="text-[12px] text-zinc-400 leading-snug">Certification &amp; safety standards consulting.</p>
				</div>
				<div class="industrial-box p-4 text-left space-y-2 hover:border-[rgb(210,47,37)] transition-colors duration-200">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h2 class="text-xs font-bold uppercase tracking-wider text-white">HAZARD CONTROL</h2>
					<p class="text-[12px] text-zinc-400 leading-snug">Workplace risk assessment &amp; audits.</p>
				</div>
				<div class="industrial-box p-4 text-left space-y-2 hover:border-[rgb(210,47,37)] transition-colors duration-200">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h2 class="text-xs font-bold uppercase tracking-wider text-white">SAFETY SOLUTIONS</h2>
					<p class="text-[12px] text-zinc-400 leading-snug">Custom industrial program development.</p>
				</div>
				<div class="industrial-box p-4 text-left space-y-2 hover:border-[rgb(210,47,37)] transition-colors duration-200">
					<div class="w-3 h-1 bg-[rgb(210,47,37)]"></div>
					<h2 class="text-xs font-bold uppercase tracking-wider text-white">EQUIPMENT &amp; PPE</h2>
					<p class="text-[12px] text-zinc-400 leading-snug">Field workforce protection protocols.</p>
				</div>
			</section>

		</div>
	</main>

	<!-- Footer -->
	<footer class="relative z-10 w-full max-w-7xl mx-auto px-6 py-5 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono uppercase tracking-wider gap-2">
		<div>
			© {new Date().getFullYear()} ROCKY MOUNTAIN SAFETY BY SAFE HANDS. ALL RIGHTS RESERVED.
		</div>
		<div>
			COLORADO, USA
		</div>
	</footer>
</div>





