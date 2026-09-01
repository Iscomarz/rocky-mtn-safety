<script lang="ts">
	import { onMount } from 'svelte';
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

	onMount(() => {
		const interval = setInterval(() => {
			if (!isPaused) {
				nextSlide();
			}
		}, 3000);

		return () => clearInterval(interval);
	});
</script>

<section 
	class="py-10 border-b border-slate-200 bg-white" 
	aria-label="Accredited platforms and partners carousel"
	onmouseenter={() => (isPaused = true)}
	onmouseleave={() => (isPaused = false)}
>
	<div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
		<div class="flex items-center justify-between gap-3">
			<div class="h-px bg-slate-300 flex-1"></div>
			<span class="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">PARTNER WITH / ACCREDITED PLATFORMS</span>
			<div class="h-px bg-slate-300 flex-1"></div>
		</div>

		<div class="relative flex items-center gap-2 sm:gap-3">
			<!-- Previous Button -->
			<button
				onclick={prevSlide}
				class="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-slate-100 hover:bg-slate-200 border border-slate-300 hover:border-[rgb(210,47,37)] text-slate-700 hover:text-slate-900 font-mono font-bold text-xl flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(210,47,37)] cursor-pointer select-none z-10"
				aria-label="Previous partners"
			>
				‹
			</button>

			<!-- Slider Content Window: 4 items on desktop, 3 on tablet, 2 on mobile -->
			<div class="flex-1 overflow-hidden">
				<div 
					class="flex transition-transform duration-500 ease-in-out gap-3 slider-pos-{currentIndex}"
				>
					{#each [...platforms, ...platforms] as platform, idx}
						<div class="w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] md:w-[calc(25%-9px)] shrink-0">
							<div class="p-3 text-center flex flex-col items-center justify-center h-[95px] space-y-1.5 bg-slate-50 border border-slate-200">
								{#if platform.logo}
									<img src={platform.logo} alt="{platform.name} logo" class="h-8 sm:h-9 w-auto max-w-[130px] object-contain opacity-90 hover:opacity-100 transition-opacity" />
								{/if}
								<div class="text-center w-full px-1">
									<span class="text-xs font-bold font-mono text-slate-900 tracking-wide uppercase block truncate">{platform.name}</span>
									<span class="text-[10px] text-slate-600 font-mono tracking-normal block truncate mt-0.5">{platform.label}</span>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Next Button -->
			<button
				onclick={nextSlide}
				class="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-slate-100 hover:bg-slate-200 border border-slate-300 hover:border-[rgb(210,47,37)] text-slate-700 hover:text-slate-900 font-mono font-bold text-xl flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(210,47,37)] cursor-pointer select-none z-10"
				aria-label="Next partners"
			>
				›
			</button>
		</div>
	</div>
</section>

<style>
	.slider-pos-0 { transform: translateX(0%); }
	.slider-pos-1 { transform: translateX(-25%); }
	.slider-pos-2 { transform: translateX(-50%); }
	.slider-pos-3 { transform: translateX(-75%); }
	.slider-pos-4 { transform: translateX(-100%); }
	.slider-pos-5 { transform: translateX(-125%); }
	.slider-pos-6 { transform: translateX(-150%); }
	.slider-pos-7 { transform: translateX(-175%); }
	.slider-pos-8 { transform: translateX(-200%); }
</style>
