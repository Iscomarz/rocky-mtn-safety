<script lang="ts">
	const areas = [
		{ name: 'SOUTHWEST COLORADO', detail: 'Durango (HQ), La Plata County, Montezuma County, Archuleta County, San Juan Basin CO' },
		{ name: 'SAN JUAN BASIN, NEW MEXICO', detail: 'Farmington, Aztec, Bloomfield, San Juan County, Rio Arriba County' },
		{ name: 'NORTHERN & EASTERN ARIZONA', detail: 'Apache County, Navajo County, Coconino County industrial corridors' },
		{ name: 'SOUTHEASTERN UTAH', detail: 'San Juan County UT, Grand County, Moab, Paradox Basin' }
	];
</script>

<section id="service-area" class="py-16 sm:py-24 bg-[#f8f9fa] border-b border-slate-200" aria-labelledby="area-heading">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
		
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto space-y-3">
			<div class="inline-block px-3 py-1 bg-white border border-slate-300 text-xs font-mono text-slate-700 uppercase tracking-widest shadow-sm">
				REGIONAL FOOTPRINT
			</div>
			<h2 id="area-heading" class="text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight">
				FOUR CORNERS <span class="text-[rgb(210,47,37)]">SERVICE COVERAGE</span>
			</h2>
			<p class="text-base text-slate-600">
				Headquartered in Durango, Colorado, delivering on-site safety instruction and mobile medical testing across 4 states.
			</p>
		</div>

		<!-- Regional Coverage Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each areas as area}
				<div class="industrial-box p-6 space-y-2 hover:border-[rgb(210,47,37)] transition-colors bg-white">
					<div class="flex items-center gap-2">
						<span class="w-2.5 h-2.5 bg-[rgb(210,47,37)] shrink-0"></span>
						<h3 class="text-base font-bold uppercase text-slate-900 font-mono tracking-tight">{area.name}</h3>
					</div>
					<p class="text-xs text-slate-600 pl-4 border-l border-slate-200">{area.detail}</p>
				</div>
			{/each}
		</div>

		<!-- Mobile Unit Dispatch Highlight -->
		<div class="industrial-card p-6 sm:p-8 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-l-[rgb(210,47,37)]">
			<div class="space-y-1 text-center md:text-left">
				<span class="text-xs font-mono text-[rgb(210,47,37)] uppercase font-bold tracking-wider">ON-SITE DISPATCH</span>
				<h3 class="text-xl font-bold uppercase">NEED INSTRUCTORS OR MOBILE TESTING AT YOUR YARD?</h3>
				<p class="text-xs text-slate-300">We travel directly to your facility or job site anywhere in the Four Corners area.</p>
			</div>

			<a
				href="/quote"
				class="px-6 py-3.5 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-md"
			>
				REQUEST LOCAL DISPATCH
			</a>
		</div>

	</div>
</section>
