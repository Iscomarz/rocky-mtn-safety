<script lang="ts">
	import logoOficial from '$lib/assets/Rocky-mtn-safety/logo-cropped.png';
	import { page } from '$app/state';

	let mobileMenuOpen = $state(false);

	function closeMenu() {
		mobileMenuOpen = false;
	}

	function isActive(path: string) {
		if (path === '/') {
			return page.url.pathname === '/';
		}
		return page.url.pathname.startsWith(path);
	}
</script>

<header class="sticky top-0 z-50 w-full bg-[rgb(22,22,22)]/95 backdrop-blur-md border-b border-zinc-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
		<!-- Brand Logo -->
		<a href="/" class="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(210,47,37)]">
			<img src={logoOficial} alt="Rocky Mountain Safety Official Logo" class="h-12 sm:h-16 w-auto object-contain" />
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden lg:flex items-center gap-6 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300" aria-label="Main Navigation">
			<a 
				href="/" 
				class="transition-colors py-1 {isActive('/') ? 'text-[rgb(210,47,37)] font-bold border-b-2 border-[rgb(210,47,37)]' : 'hover:text-[rgb(210,47,37)]'}"
			>
				Home
			</a>

			<a 
				href="/oq-pipeline" 
				class="transition-colors py-1 {isActive('/oq-pipeline') ? 'text-[rgb(210,47,37)] font-bold border-b-2 border-[rgb(210,47,37)]' : 'hover:text-[rgb(210,47,37)]'}"
			>
				OQ &amp; Pipeline
			</a>

			<a 
				href="/safety-training" 
				class="transition-colors py-1 {isActive('/safety-training') ? 'text-[rgb(210,47,37)] font-bold border-b-2 border-[rgb(210,47,37)]' : 'hover:text-[rgb(210,47,37)]'}"
			>
				Safety Training
			</a>

			<a 
				href="/nccer" 
				class="transition-colors py-1 {isActive('/nccer') ? 'text-[rgb(210,47,37)] font-bold border-b-2 border-[rgb(210,47,37)]' : 'hover:text-[rgb(210,47,37)]'}"
			>
				NCCER
			</a>

			<a 
				href="/occupational-health" 
				class="transition-colors py-1 {isActive('/occupational-health') ? 'text-[rgb(210,47,37)] font-bold border-b-2 border-[rgb(210,47,37)]' : 'hover:text-[rgb(210,47,37)]'}"
			>
				Mobile Testing
			</a>

			<a 
				href="/about" 
				class="transition-colors py-1 {isActive('/about') ? 'text-[rgb(210,47,37)] font-bold border-b-2 border-[rgb(210,47,37)]' : 'hover:text-[rgb(210,47,37)]'}"
			>
				About Us
			</a>

			<a 
				href="/service-area" 
				class="transition-colors py-1 {isActive('/service-area') ? 'text-[rgb(210,47,37)] font-bold border-b-2 border-[rgb(210,47,37)]' : 'hover:text-[rgb(210,47,37)]'}"
			>
				Four Corners Area
			</a>
		</nav>

		<!-- Desktop Action Buttons -->
		<div class="hidden sm:flex items-center gap-3">
			<a
				href="tel:+19707648799"
				class="px-3.5 py-2 border border-zinc-700 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
			>
				<svg class="w-3.5 h-3.5 text-[rgb(210,47,37)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
				</svg>
				<span>(970) 764-8799</span>
			</a>
			<a
				href="/quote"
				class="px-4 py-2 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
			>
				<span>REQUEST A QUOTE</span>
			</a>
		</div>

		<!-- Mobile Hamburger Button -->
		<button
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			class="lg:hidden p-2 text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(210,47,37)]"
			aria-label="Toggle navigation menu"
		>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if mobileMenuOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile Dropdown Menu -->
	{#if mobileMenuOpen}
		<div class="lg:hidden bg-[rgb(18,18,18)] border-b border-zinc-800 px-6 py-6 space-y-4 font-mono text-xs font-semibold uppercase tracking-wider">
			<a 
				href="/" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				Home
			</a>

			<a 
				href="/oq-pipeline" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/oq-pipeline') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				OQ &amp; Pipeline
			</a>

			<a 
				href="/safety-training" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/safety-training') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				Safety Training
			</a>

			<a 
				href="/nccer" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/nccer') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				NCCER Workforce
			</a>

			<a 
				href="/occupational-health" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/occupational-health') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				Mobile Health &amp; Testing
			</a>

			<a 
				href="/about" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/about') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				About Us
			</a>

			<a 
				href="/service-area" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/service-area') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				Four Corners Area
			</a>

			<div class="pt-4 border-t border-zinc-800 flex flex-col gap-3">
				<a
					href="tel:+19707648799"
					class="w-full py-3 text-center border border-zinc-700 text-white font-bold inline-flex items-center justify-center gap-2"
				>
					<svg class="w-4 h-4 text-[rgb(210,47,37)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
					</svg>
					<span>CALL: (970) 764-8799</span>
				</a>
				<a
					href="/quote"
					onclick={closeMenu}
					class="w-full py-3 bg-[rgb(210,47,37)] text-white font-bold text-center block"
				>
					REQUEST A QUOTE
				</a>
			</div>
		</div>
	{/if}
</header>
