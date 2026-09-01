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
					"ADVICE. You can rely on. STRATEGIES. That work. EXPERTS. Whove been there."
				</p>
				<!-- Social Media & Profile Links -->
				<div class="pt-2 flex items-center gap-2.5">
					<a
						href="https://www.linkedin.com/company/safe-hands-safety"
						target="_blank"
						rel="noopener noreferrer"
						class="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-700 hover:border-[rgb(210,47,37)] hover:text-white flex items-center justify-center transition-colors text-zinc-400"
						aria-label="LinkedIn"
					>
						<svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.65 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66c0-.91-.74-1.65-1.66-1.65Z"/></svg>
					</a>
					<a
						href="https://www.facebook.com/SafeHandsSafety"
						target="_blank"
						rel="noopener noreferrer"
						class="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-700 hover:border-[rgb(210,47,37)] hover:text-white flex items-center justify-center transition-colors text-zinc-400"
						aria-label="Facebook"
					>
						<svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
					</a>
					<a
						href="https://maps.google.com/?q=858+Main+St+Unit+203+Durango+CO+81301"
						target="_blank"
						rel="noopener noreferrer"
						class="w-8 h-8 rounded-sm bg-zinc-900 border border-zinc-700 hover:border-[rgb(210,47,37)] hover:text-white flex items-center justify-center transition-colors text-zinc-400"
						aria-label="Google Maps Business Location"
					>
						<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
					</a>
				</div>
			</div>

			<!-- Column 2: Core Services Links -->
			<div class="space-y-3 font-mono text-xs">
				<h4 class="font-bold text-white uppercase tracking-wider text-xs border-b border-zinc-800 pb-2">PAGES & SERVICES</h4>
				<ul class="space-y-2 uppercase">
					<li><a href="/oq-pipeline" class="hover:text-[rgb(210,47,37)] transition-colors">Operator Qualification (OQ)</a></li>
					<li><a href="/safety-training" class="hover:text-[rgb(210,47,37)] transition-colors">Safety Training Courses</a></li>
					<li><a href="/nccer" class="hover:text-[rgb(210,47,37)] transition-colors">NCCER Workforce Development</a></li>
					<li><a href="/occupational-health" class="hover:text-[rgb(210,47,37)] transition-colors">Occupational Health & Mobile Testing</a></li>
					<li><a href="/about" class="hover:text-[rgb(210,47,37)] transition-colors">About Us</a></li>
					<li><a href="/service-area" class="hover:text-[rgb(210,47,37)] transition-colors">Four Corners Service Area</a></li>
					<li><a href="/faq" class="hover:text-[rgb(210,47,37)] transition-colors">FAQ</a></li>
					<li><a href="/quote" class="hover:text-[rgb(210,47,37)] transition-colors">Request a Quote</a></li>
				</ul>
			</div>

			<!-- Column 3: Office Address & Hours -->
			<div class="space-y-3 font-mono text-xs">
				<h4 class="font-bold text-white uppercase tracking-wider text-xs border-b border-zinc-800 pb-2">DURANGO OFFICE & HOURS</h4>
				<div class="space-y-2">
					<address class="not-italic" itemscope itemtype="https://schema.org/PostalAddress">
						<span class="text-[10px] text-zinc-500 uppercase block">LOCATION</span>
						<span class="text-xs text-zinc-300 block" itemprop="streetAddress">858 Main St, Unit 203</span>
						<span class="text-xs text-zinc-300 block">
							<span itemprop="addressLocality">Durango</span>, <span itemprop="addressRegion">CO</span> <span itemprop="postalCode">81301</span>
						</span>
					</address>
					<a
						href="https://maps.google.com/?q=858+Main+St+Unit+203+Durango+CO+81301"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1 text-[10px] font-mono text-[rgb(210,47,37)] hover:text-white transition-colors"
					>
						<span>VIEW ON GOOGLE MAPS →</span>
					</a>
					<div class="pt-1">
						<span class="text-[10px] text-zinc-500 uppercase block">BUSINESS HOURS</span>
						<span class="text-xs text-zinc-300 block">Mon–Fri: 8:00 AM – 4:00 PM</span>
						<span class="text-[11px] text-[rgb(210,47,37)] block">After-hours & weekends by appt</span>
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
