<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let copiedNotification = $state<string | null>(null);

	function copyAndEmail(email: string, subject: string) {
		if (typeof navigator !== 'undefined' && navigator.clipboard) {
			navigator.clipboard.writeText(email).catch(() => {});
		}
		copiedNotification = `Copied ${email} to clipboard! Opening mail client...`;
		setTimeout(() => {
			copiedNotification = null;
		}, 4000);
		
		window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
	}
</script>

<svelte:head>
	<title>Request a Quote | Rocky Mountain Safety by Safe Hands</title>
	<meta
		name="description"
		content="Contact Rocky Mountain Safety directly by phone or email for fast safety training, OQ evaluations, and mobile medical testing quotes in Durango and the Four Corners."
	/>
</svelte:head>

<div class="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans flex flex-col justify-between">
	<Header />

	<main class="border-b border-slate-200 flex-1 py-16 sm:py-24 relative">
		<!-- Toast Notification for Clipboard Copy -->
		{#if copiedNotification}
			<div class="fixed bottom-6 right-6 z-50 bg-slate-900 text-white border border-slate-700 px-5 py-3 shadow-2xl font-mono text-xs uppercase flex items-center gap-3 animate-bounce">
				<span class="w-2.5 h-2.5 bg-[rgb(210,47,37)] rounded-full"></span>
				<span>{copiedNotification}</span>
			</div>
		{/if}

		<div class="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-center">
			
			<!-- Badge & Title -->
			<div class="inline-block px-3 py-1 bg-white border border-slate-300 text-xs font-mono text-slate-700 uppercase tracking-widest shadow-sm">
				DIRECT TELEPHONE &amp; EMAIL DISPATCH
			</div>

			<h1 class="text-3xl sm:text-5xl font-extralight uppercase text-slate-900 tracking-tight font-['Outfit']">
				REQUEST A <span class="font-normal text-[rgb(210,47,37)]">SERVICE QUOTE</span>
			</h1>

			<p class="text-base text-slate-600 font-light max-w-xl mx-auto">
				Currently, all service quotes, inquiries, and scheduling are dispatched directly via telephone or email with our Durango team.
			</p>

			<!-- Direct Contact Cards -->
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-left">
				
				<!-- Durango Local Office -->
				<div class="industrial-card p-6 bg-white border-l-4 border-l-[rgb(210,47,37)] shadow-md space-y-4">
					<div>
						<span class="text-xs font-mono text-[rgb(210,47,37)] uppercase font-semibold tracking-wider block">DURANGO LOCAL OFFICE</span>
						<h2 class="text-lg font-light text-slate-900 uppercase font-['Outfit'] mt-1">LORI SANCHEZ</h2>
						<span class="text-xs text-slate-500 font-mono block">Direct Representative</span>
					</div>

					<div class="space-y-2 pt-2 border-t border-slate-200">
						<a
							href="tel:+19707648799"
							class="w-full py-3 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
						>
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
							</svg>
							<span>CALL (970) 764-8799</span>
						</a>

						<button
							type="button"
							onclick={() => copyAndEmail('L.Sanchez@RockyMtnSafety.com', 'Service Quote Request - Rocky Mountain Safety')}
							class="w-full py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-mono text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
						>
							<svg class="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
							</svg>
							<span>EMAIL LORI SANCHEZ</span>
						</button>
					</div>
				</div>

				<!-- Main Office / Safe Hands -->
				<div class="industrial-card p-6 bg-white border-l-4 border-l-slate-800 shadow-md space-y-4">
					<div>
						<span class="text-xs font-mono text-slate-500 uppercase font-semibold tracking-wider block">MAIN OFFICE / SAFE HANDS</span>
						<h2 class="text-lg font-light text-slate-900 uppercase font-['Outfit'] mt-1">JOYCE SANCHEZ</h2>
						<span class="text-xs text-slate-500 font-mono block">Central Support</span>
					</div>

					<div class="space-y-2 pt-2 border-t border-slate-200">
						<a
							href="tel:+14322312207"
							class="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
						>
							<svg class="w-4 h-4 text-[rgb(210,47,37)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
							</svg>
							<span>CALL (432) 231-2207</span>
						</a>

						<button
							type="button"
							onclick={() => copyAndEmail('Joyce.Sanchez@SafeHandsSafety.com', 'Service Inquiry - Rocky Mountain Safety')}
							class="w-full py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-mono text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
						>
							<svg class="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
							</svg>
							<span>EMAIL JOYCE SANCHEZ</span>
						</button>
					</div>
				</div>

			</div>

			<!-- Office Location & Hours Box -->
			<div class="industrial-box p-6 bg-white text-left grid grid-cols-1 sm:grid-cols-2 gap-4 border border-slate-300">
				<div>
					<span class="text-xs font-mono font-semibold uppercase text-slate-900 block tracking-wider">DURANGO TRAINING CENTER</span>
					<span class="text-xs text-slate-600 font-light block mt-1">858 Main St, Unit 203</span>
					<span class="text-xs text-slate-600 font-light block">Durango, Colorado 81301</span>
				</div>

				<div>
					<span class="text-xs font-mono font-semibold uppercase text-slate-900 block tracking-wider">OPERATING HOURS</span>
					<span class="text-xs text-slate-600 font-light block mt-1">Monday – Friday: 8:00 AM – 4:00 PM</span>
					<span class="text-xs text-[rgb(210,47,37)] font-light block">Weekend &amp; after-hours service by appointment</span>
				</div>
			</div>

		</div>
	</main>

	<Footer />
</div>
