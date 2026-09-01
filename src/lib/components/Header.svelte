<script lang="ts">
	import logoOficial from '$lib/assets/Rocky-mtn-safety/logo-cropped.png';
	import { page } from '$app/state';
	import { getLang, toggleLang, t } from '$lib/i18n/index.svelte';

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
				{t('nav.home')}
			</a>

			<a 
				href="/oq-pipeline" 
				class="transition-colors py-1 {isActive('/oq-pipeline') ? 'text-[rgb(210,47,37)] font-bold border-b-2 border-[rgb(210,47,37)]' : 'hover:text-[rgb(210,47,37)]'}"
			>
				{t('nav.oqPipeline')}
			</a>

			<a 
				href="/safety-training" 
				class="transition-colors py-1 {isActive('/safety-training') ? 'text-[rgb(210,47,37)] font-bold border-b-2 border-[rgb(210,47,37)]' : 'hover:text-[rgb(210,47,37)]'}"
			>
				{t('nav.safetyTraining')}
			</a>

			<a 
				href="/nccer" 
				class="transition-colors py-1 {isActive('/nccer') ? 'text-[rgb(210,47,37)] font-bold border-b-2 border-[rgb(210,47,37)]' : 'hover:text-[rgb(210,47,37)]'}"
			>
				{t('nav.nccer')}
			</a>

			<a 
				href="/occupational-health" 
				class="transition-colors py-1 {isActive('/occupational-health') ? 'text-[rgb(210,47,37)] font-bold border-b-2 border-[rgb(210,47,37)]' : 'hover:text-[rgb(210,47,37)]'}"
			>
				{t('nav.mobileTesting')}
			</a>

			<a 
				href="/about" 
				class="transition-colors py-1 {isActive('/about') ? 'text-[rgb(210,47,37)] font-bold border-b-2 border-[rgb(210,47,37)]' : 'hover:text-[rgb(210,47,37)]'}"
			>
				{t('nav.aboutUs')}
			</a>

			<a 
				href="/service-area" 
				class="transition-colors py-1 {isActive('/service-area') ? 'text-[rgb(210,47,37)] font-bold border-b-2 border-[rgb(210,47,37)]' : 'hover:text-[rgb(210,47,37)]'}"
			>
				{t('nav.serviceArea')}
			</a>
		</nav>

		<!-- Desktop Action Buttons & Language Switcher -->
		<div class="hidden sm:flex items-center gap-3">
			<button
				onclick={toggleLang}
				class="px-3 py-1.5 border border-zinc-700 hover:border-zinc-500 bg-zinc-900/90 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(210,47,37)] cursor-pointer rounded-sm"
				title="Cambiar idioma / Switch language"
				aria-label="Toggle language"
			>
				<svg class="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
				</svg>
				<span class={getLang() === 'en' ? 'text-[rgb(210,47,37)] font-black' : 'text-zinc-400 hover:text-white'}>EN</span>
				<span class="text-zinc-600">/</span>
				<span class={getLang() === 'es' ? 'text-[rgb(210,47,37)] font-black' : 'text-zinc-400 hover:text-white'}>ES</span>
			</button>

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
				<span>{t('nav.requestQuote')}</span>
			</a>
		</div>

		<!-- Mobile Header Controls -->
		<div class="lg:hidden flex items-center gap-2">
			<button
				onclick={toggleLang}
				class="px-2.5 py-1.5 border border-zinc-700 bg-zinc-900/90 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer rounded-sm"
				aria-label="Toggle language"
			>
				<span class={getLang() === 'en' ? 'text-[rgb(210,47,37)] font-black' : 'text-zinc-400'}>EN</span>
				<span class="text-zinc-600">/</span>
				<span class={getLang() === 'es' ? 'text-[rgb(210,47,37)] font-black' : 'text-zinc-400'}>ES</span>
			</button>

			<button
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				class="p-2 text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(210,47,37)]"
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
	</div>

	<!-- Mobile Dropdown Menu -->
	{#if mobileMenuOpen}
		<div class="lg:hidden bg-[rgb(18,18,18)] border-b border-zinc-800 px-6 py-6 space-y-4 font-mono text-xs font-semibold uppercase tracking-wider">
			<a 
				href="/" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				{t('nav.home')}
			</a>

			<a 
				href="/oq-pipeline" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/oq-pipeline') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				{t('nav.oqPipeline')}
			</a>

			<a 
				href="/safety-training" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/safety-training') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				{t('nav.safetyTraining')}
			</a>

			<a 
				href="/nccer" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/nccer') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				{t('nav.nccer')}
			</a>

			<a 
				href="/occupational-health" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/occupational-health') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				{t('nav.mobileTesting')}
			</a>

			<a 
				href="/about" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/about') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				{t('nav.aboutUs')}
			</a>

			<a 
				href="/service-area" 
				onclick={closeMenu} 
				class="block py-1.5 {isActive('/service-area') ? 'text-[rgb(210,47,37)] font-bold' : 'text-zinc-300 hover:text-[rgb(210,47,37)]'}"
			>
				{t('nav.serviceArea')}
			</a>

			<div class="pt-4 border-t border-zinc-800 flex flex-col gap-3">
				<a
					href="tel:+19707648799"
					class="w-full py-3 text-center border border-zinc-700 text-white font-bold inline-flex items-center justify-center gap-2"
				>
					<svg class="w-4 h-4 text-[rgb(210,47,37)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
					</svg>
					<span>{t('nav.callUs')}</span>
				</a>
				<a
					href="/quote"
					onclick={closeMenu}
					class="w-full py-3 bg-[rgb(210,47,37)] text-white font-bold text-center block"
				>
					{t('nav.requestQuote')}
				</a>
			</div>
		</div>
	{/if}
</header>

