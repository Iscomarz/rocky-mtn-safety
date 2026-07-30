<script lang="ts">
	import logoOficial from '$lib/assets/Rocky-mtn-safety/logo-cropped.png';
</script>

<footer class="bg-[rgb(18,18,18)] text-zinc-400 border-t border-zinc-800" aria-label="Site Footer">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-12">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			
			<!-- Column 1: Brand & Motto -->
			<div class="space-y-4">
				<a href="/">
					<img src={logoOficial} alt="Rocky Mountain Safety Official Logo" class="h-14 w-auto object-contain" />
				</a>
				<p class="text-xs text-zinc-400 leading-relaxed">
					Providing certified safety training, Operator Qualification (OQ) evaluations, and mobile occupational health testing across Durango and the Four Corners Region.
				</p>
				<p class="text-xs font-bold text-white uppercase italic">
					"ADVICE you can rely on. STRATEGIES that work. EXPERTS who've been there."
				</p>
			</div>

			<!-- Column 2: Core Services Links -->
			<div class="space-y-3 font-mono text-xs">
				<h4 class="font-bold text-white uppercase tracking-wider text-xs border-b border-zinc-800 pb-2">PAGES &amp; SERVICES</h4>
				<ul class="space-y-2 uppercase">
					<li><a href="/oq-pipeline" class="hover:text-[rgb(210,47,37)] transition-colors">Operator Qualification (OQ)</a></li>
					<li><a href="/safety-training" class="hover:text-[rgb(210,47,37)] transition-colors">Safety Training Courses</a></li>
					<li><a href="/nccer" class="hover:text-[rgb(210,47,37)] transition-colors">NCCER Workforce Development</a></li>
					<li><a href="/occupational-health" class="hover:text-[rgb(210,47,37)] transition-colors">Occupational Health &amp; Mobile Testing</a></li>
					<li><a href="/about" class="hover:text-[rgb(210,47,37)] transition-colors">About Us</a></li>
					<li><a href="/service-area" class="hover:text-[rgb(210,47,37)] transition-colors">Four Corners Service Area</a></li>
					<li><a href="/quote" class="hover:text-[rgb(210,47,37)] transition-colors">Request a Quote</a></li>
				</ul>
			</div>

			<!-- Column 3: Office Address & Hours -->
			<div class="space-y-3 font-mono text-xs">
				<h4 class="font-bold text-white uppercase tracking-wider text-xs border-b border-zinc-800 pb-2">DURANGO OFFICE &amp; HOURS</h4>
				<div class="space-y-2">
					<div>
						<span class="text-[10px] text-zinc-500 uppercase block">LOCATION</span>
						<span class="text-xs text-zinc-300 block">858 Main St, Unit 203</span>
						<span class="text-xs text-zinc-300 block">Durango, Colorado 81301</span>
					</div>
					<div class="pt-1">
						<span class="text-[10px] text-zinc-500 uppercase block">BUSINESS HOURS</span>
						<span class="text-xs text-zinc-300 block">Mon–Fri: 8:00 AM – 4:00 PM</span>
						<span class="text-[11px] text-[rgb(210,47,37)] block">After-hours &amp; weekends by appt</span>
					</div>
				</div>
			</div>

			<!-- Column 4: Direct Contacts -->
			<div class="space-y-3 font-mono text-xs">
				<h4 class="font-bold text-white uppercase tracking-wider text-xs border-b border-zinc-800 pb-2">DIRECT CONTACTS</h4>
				<div class="space-y-2.5">
					<div>
						<span class="text-[10px] text-zinc-500 uppercase block">DURANGO LOCAL CONTACT</span>
						<span class="text-xs font-semibold text-zinc-300 block">Lori Sanchez</span>
						<a href="tel:+19707648799" class="text-xs font-bold text-white hover:text-[rgb(210,47,37)] transition-colors block">
							(970) 764-8799
						</a>
						<a href="mailto:L.Sanchez@RockyMtnSafety.com" class="text-[11px] text-zinc-400 hover:text-white transition-colors block">
							L.Sanchez@RockyMtnSafety.com
						</a>
					</div>
					<div class="pt-1 border-t border-zinc-800/80">
						<span class="text-[10px] text-zinc-500 uppercase block">MAIN OFFICE / SAFE HANDS</span>
						<span class="text-xs font-semibold text-zinc-300 block">Joyce Sanchez</span>
						<a href="tel:+14322312207" class="text-xs font-bold text-white hover:text-[rgb(210,47,37)] transition-colors block">
							(432) 231-2207
						</a>
					</div>
				</div>
			</div>

		</div>

		<!-- Bottom Copyright Row -->
		<div class="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono uppercase tracking-wider gap-4">
			<div>
				© {new Date().getFullYear()} ROCKY MOUNTAIN SAFETY BY SAFE HANDS. ALL RIGHTS RESERVED.
			</div>
			<div class="flex items-center gap-4 text-zinc-500">
				<span>DURANGO, CO</span>
				<span>•</span>
				<a href="/coming-soon" class="hover:text-zinc-300 transition-colors">BACKUP COMING SOON PAGE</a>
			</div>
		</div>
	</div>
</footer>
