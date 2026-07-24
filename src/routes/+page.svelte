<script lang="ts">
	import { onMount } from 'svelte';
	import logoOficial from '$lib/assets/Rocky-mtn-safety/logo-cropped.png';
	import oqsgLogo from '$lib/assets/partners/oqsg.png';
	import ewnLogo from '$lib/assets/partners/ewn.png';
	import co811Logo from '$lib/assets/partners/co811.svg';
	import veriforceLogo from '$lib/assets/partners/veriforce.svg';
	import nccerLogo from '$lib/assets/partners/nccer.svg';
	import itsLogo from '$lib/assets/partners/its.svg';
	import isnetworldLogo from '$lib/assets/partners/isnetworld.avif';

	const platforms = [
		{ name: 'OQSG', label: 'Operator Qualification', logo: oqsgLogo },
		{ name: 'PEC SafeLand / Basic 7.0', label: 'Safety Orientation', logo: null },
		{ name: 'PEC H2S Clear', label: 'Hydrogen Sulfide Training', logo: null },
		{ name: 'NCCER', label: 'Craft & Safety Training', logo: nccerLogo },
		{ name: 'Veriforce', label: 'Compliance & OQ', logo: veriforceLogo },
		{ name: 'ITS', label: 'Industrial Training Services', logo: itsLogo },
		{ name: 'EWN', label: 'Energy World Net', logo: ewnLogo },
		{ name: 'ISNetworld', label: 'Contractor Management', logo: isnetworldLogo },
		{ name: '811 Colorado', label: 'Damage Prevention', logo: co811Logo }
	];

	let currentIndex = $state(0);
	let isPaused = $state(false);

	function nextSlide() {
		currentIndex = (currentIndex + 1) % platforms.length;
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + platforms.length) % platforms.length;
	}

	function goToSlide(index: number) {
		currentIndex = index;
	}

	onMount(() => {
		const interval = setInterval(() => {
			if (!isPaused) {
				nextSlide();
			}
		}, 3000);

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Rocky Mountain Safety - Oil and Gas Safety Training & Consulting in Colorado</title>
	<meta
		name="description"
		content="Oil and Gas Safety Training & Consulting Services in Colorado. Official website under construction — coming soon."
	/>
</svelte:head>

<div class="relative min-h-screen bg-[rgb(22,22,22)] text-white overflow-hidden flex flex-col justify-between select-none font-sans">
	<!-- Technical Grid Background -->
	<div class="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" aria-hidden="true"></div>

	<!-- Top Navigation / Header -->
	<header class="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-zinc-800">
		<div class="flex items-center gap-3">
			<img src={logoOficial} alt="Rocky Mountain Safety Official Logo" class="h-16 sm:h-20 w-auto object-contain" />
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
		<div class="space-y-12 w-full">
			
			<!-- Headline Block -->
			<section class="space-y-4 max-w-3xl mx-auto" aria-labelledby="main-heading">
				<div class="inline-block px-3 py-1 bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-300 uppercase tracking-widest">
					OFFICIAL PORTAL LAUNCH IN PROGRESS
				</div>
				<h1 id="main-heading" class="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
					OIL AND GAS SAFETY TRAINING &amp; CONSULTING IN <span class="text-[rgb(210,47,37)]">COLORADO</span>
				</h1>
				<p class="text-base sm:text-lg text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed">
					We are launching our full service portal soon. Providing comprehensive workplace safety compliance, OSHA certification, OQ training, and workforce protection solutions.
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
			<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto" aria-label="Core services">
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
					<h2 class="text-xs font-bold uppercase tracking-wider text-white">OQ TRAINING</h2>
					<p class="text-[12px] text-zinc-400 leading-snug">Operator Qualification compliance.</p>
				</div>
			</section>

			<!-- Partner & Accredited Platforms Section (Multi-item Carousel Slider) -->
			<section 
				class="pt-6 border-t border-zinc-800/80 max-w-5xl mx-auto space-y-4" 
				aria-label="Accredited platforms and partners carousel"
				onmouseenter={() => (isPaused = true)}
				onmouseleave={() => (isPaused = false)}
			>
				<div class="flex items-center justify-between gap-3">
					<div class="h-px bg-zinc-800 flex-1"></div>
					<span class="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">PARTNER WITH / ACCREDITED PLATFORMS</span>
					<div class="h-px bg-zinc-800 flex-1"></div>
				</div>

				<div class="relative flex items-center gap-2 sm:gap-3">
					<!-- Previous Button -->
					<button
						onclick={prevSlide}
						class="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-[rgb(210,47,37)] text-zinc-300 hover:text-white font-mono font-bold text-xl flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(210,47,37)] cursor-pointer select-none z-10"
						aria-label="Previous partners"
					>
						‹
					</button>

					<!-- Slider Content Window: 4 items on desktop, 3 on tablet, 2 on mobile -->
					<div class="flex-1 overflow-hidden">
						<div 
							class="flex transition-transform duration-500 ease-in-out gap-3"
							style="transform: translateX(-{currentIndex * 25}%);"
						>
							{#each [...platforms, ...platforms] as platform, idx}
								<div class="w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] md:w-[calc(25%-9px)] shrink-0">
									<div class="p-3 text-center flex flex-col items-center justify-center h-[95px] space-y-1.5">
										{#if platform.logo}
											<img src={platform.logo} alt="{platform.name} logo" class="h-8 sm:h-9 w-auto max-w-[130px] object-contain opacity-90 hover:opacity-100 transition-opacity" />
										{/if}
										<div class="text-center w-full px-1">
											<span class="text-xs font-bold font-mono text-white tracking-wide uppercase block truncate">{platform.name}</span>
											<span class="text-[10px] text-zinc-400 font-mono tracking-normal block truncate mt-0.5">{platform.label}</span>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>

					<!-- Next Button -->
					<button
						onclick={nextSlide}
						class="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-[rgb(210,47,37)] text-zinc-300 hover:text-white font-mono font-bold text-xl flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(210,47,37)] cursor-pointer select-none z-10"
						aria-label="Next partners"
					>
						›
					</button>
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






