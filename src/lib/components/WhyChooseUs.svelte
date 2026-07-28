<script lang="ts">
	const advantages = [
		{
			title: 'LOCAL DURANGO LEADERSHIP',
			desc: 'Headquartered in Durango, CO, providing rapid local response across Southwest Colorado, NM, AZ, and UT.'
		},
		{
			title: 'SAFE HANDS NETWORK BACKING',
			desc: 'Supported by the extensive resources, industry relationships, and proven standards of Safe Hands Safety.'
		},
		{
			title: 'MOBILE FIELD FLEXIBILITY',
			desc: 'We bring certified evaluators, instructors, and medical testing units directly to your job site or company yard.'
		},
		{
			title: 'BILINGUAL INSTRUCTION',
			desc: 'All courses, OQ evaluations, and mobile health services available fluently in English and Spanish.'
		}
	];
</script>

<section id="about" class="py-16 sm:py-24 bg-white border-b border-slate-200" aria-labelledby="why-heading">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
		
		<!-- Section Header -->
		<div class="text-center max-w-3xl mx-auto space-y-3">
			<div class="inline-block px-3 py-1 bg-slate-100 border border-slate-300 text-xs font-mono text-slate-700 uppercase tracking-widest">
				YOUR TRUSTED SAFETY PARTNER
			</div>
			<h2 id="why-heading" class="text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight">
				WHY CHOOSE <span class="text-[rgb(210,47,37)]">ROCKY MOUNTAIN SAFETY</span>
			</h2>
			<p class="text-base text-slate-600">
				Combining deep local Four Corners roots with national safety network expertise.
			</p>
		</div>

		<!-- Grid of 4 Key Advantages -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each advantages as adv}
				<div class="industrial-card p-6 space-y-2 border-l-4 border-l-[rgb(210,47,37)]">
					<h3 class="text-lg font-bold uppercase text-slate-900 tracking-tight">{adv.title}</h3>
					<p class="text-xs text-slate-600 leading-relaxed">{adv.desc}</p>
				</div>
			{/each}
		</div>

		<!-- Motto Showcase Banner -->
		<div class="industrial-box p-8 bg-slate-900 text-white text-center space-y-3">
			<span class="text-xs font-mono text-[rgb(210,47,37)] uppercase font-bold tracking-widest">COMPANY PHILOSOPHY</span>
			<h3 class="text-xl sm:text-2xl font-black uppercase tracking-wide">
				"ADVICE YOU CAN RELY ON. STRATEGIES THAT WORK. EXPERTS WHO'VE BEEN THERE."
			</h3>
			<p class="text-xs text-slate-300 max-w-xl mx-auto">
				We don't just check boxes — we deliver practical, field-proven safety solutions that keep your workers safe and your operations compliant.
			</p>
		</div>

	</div>
</section>
