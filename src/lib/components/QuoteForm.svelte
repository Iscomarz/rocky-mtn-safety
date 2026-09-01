<script lang="ts">
	import { enhance } from '$app/forms';
	import { t } from '$lib/i18n/index.svelte';

	let { form }: { form?: { success?: boolean; error?: string; demoMode?: boolean; message?: string } | null } = $props();

	let company = $state('');
	let contactName = $state('');
	let phone = $state('');
	let email = $state('');
	let serviceRequested = $state('OQ Pipeline Services');
	let employeeCount = $state('');
	let location = $state('');
	let preferredDate = $state('');
	let message = $state('');
	let websiteUrlHp = $state(''); // Honeypot field (hidden from real humans)

	let isSubmitting = $state(false);
	let submitted = $state(false);
	let errorMessage = $state('');

	$effect(() => {
		if (form?.success) {
			submitted = true;
			isSubmitting = false;
		}
		if (form?.error) {
			errorMessage = form.error;
			isSubmitting = false;
		}
	});
</script>

<section id="quote" class="py-16 sm:py-24 bg-[#f8f9fa] border-b border-slate-200" aria-labelledby="quote-heading">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
		
		<!-- Form Header -->
		<div class="text-center space-y-3">
			<div class="inline-block px-3 py-1 bg-white border border-slate-300 text-xs font-mono text-slate-700 uppercase tracking-widest shadow-sm">
				{t('quoteForm.badge')}
			</div>
			<h2 id="quote-heading" class="text-3xl sm:text-4xl font-extralight uppercase text-slate-900 tracking-tight font-['Outfit']">
				{t('quoteForm.titlePrefix')} <span class="font-normal text-[rgb(210,47,37)]">{t('quoteForm.titleHighlight')}</span>
			</h2>
			<p class="text-sm text-slate-600 max-w-xl mx-auto font-light">
				{t('quoteForm.subtitle')}
			</p>
		</div>

		<!-- Main Form Card -->
		<div class="industrial-card p-6 sm:p-10 bg-white border-slate-300 border-l-4 border-l-[rgb(210,47,37)] shadow-lg">
			{#if submitted || form?.success}
				<div class="text-center py-12 space-y-4">
					<div class="w-16 h-16 bg-emerald-100 border border-emerald-400 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
						✓
					</div>
					<h3 class="text-2xl font-light uppercase text-slate-900 font-['Outfit']">{t('quoteForm.successTitle')}</h3>
					<p class="text-sm text-slate-600 max-w-md mx-auto">
						{t('quoteForm.successDesc')}
					</p>

					{#if form?.demoMode}
						<div class="p-3 bg-amber-50 border border-amber-300 text-amber-800 text-xs font-mono max-w-md mx-auto rounded">
							💡 <strong>Developer Note:</strong> {form.message}
						</div>
					{/if}

					<button
						onclick={() => {
							submitted = false;
							errorMessage = '';
						}}
						class="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors mt-4 inline-block cursor-pointer"
					>
						{t('quoteForm.submitAnother')}
					</button>
				</div>
			{:else}
				{#if errorMessage}
					<div class="p-4 bg-red-50 border border-red-300 text-red-700 text-xs font-mono mb-6">
						⚠️ {errorMessage}
					</div>
				{/if}

				<form
					method="POST"
					action="/quote"
					use:enhance={() => {
						isSubmitting = true;
						errorMessage = '';
						return async ({ update }) => {
							isSubmitting = false;
							await update();
						};
					}}
					class="space-y-6"
				>
					<!-- Honeypot Field (Invisible to human users, traps automated spam bots) -->
					<div aria-hidden="true" style="display: none !important; opacity: 0; position: absolute; left: -9999px; pointer-events: none;">
						<label for="website_url_hp">Do not fill this out if you are human</label>
						<input
							type="text"
							id="website_url_hp"
							name="website_url_hp"
							tabindex="-1"
							autocomplete="off"
							bind:value={websiteUrlHp}
						/>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						
						<!-- Company Name -->
						<div class="space-y-1.5">
							<label for="company" class="block font-mono text-xs font-bold uppercase text-slate-900">
								{t('quoteForm.companyName')}
							</label>
							<input
								type="text"
								id="company"
								name="company"
								required
								bind:value={company}
								placeholder="e.g. Four Corners Energy LLC"
								class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-[rgb(210,47,37)] focus:bg-white text-slate-900 text-sm font-sans focus-visible:outline-none transition-colors"
							/>
						</div>

						<!-- Contact Name -->
						<div class="space-y-1.5">
							<label for="contactName" class="block font-mono text-xs font-bold uppercase text-slate-900">
								{t('quoteForm.fullName')}
							</label>
							<input
								type="text"
								id="contactName"
								name="contactName"
								required
								bind:value={contactName}
								placeholder="e.g. John Doe"
								class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-[rgb(210,47,37)] focus:bg-white text-slate-900 text-sm font-sans focus-visible:outline-none transition-colors"
							/>
						</div>

						<!-- Phone Number -->
						<div class="space-y-1.5">
							<label for="phone" class="block font-mono text-xs font-bold uppercase text-slate-900">
								{t('quoteForm.phone')}
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								required
								bind:value={phone}
								placeholder="e.g. (432) 231-2207"
								class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-[rgb(210,47,37)] focus:bg-white text-slate-900 text-sm font-sans focus-visible:outline-none transition-colors"
							/>
						</div>

						<!-- Email Address -->
						<div class="space-y-1.5">
							<label for="email" class="block font-mono text-xs font-bold uppercase text-slate-900">
								{t('quoteForm.email')}
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								bind:value={email}
								placeholder="e.g. john@fourcornersenergy.com"
								class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-[rgb(210,47,37)] focus:bg-white text-slate-900 text-sm font-sans focus-visible:outline-none transition-colors"
							/>
						</div>

						<!-- Service Requested -->
						<div class="space-y-1.5">
							<label for="serviceRequested" class="block font-mono text-xs font-bold uppercase text-slate-900">
								{t('quoteForm.serviceType')}
							</label>
							<select
								id="serviceRequested"
								name="serviceRequested"
								bind:value={serviceRequested}
								class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-[rgb(210,47,37)] focus:bg-white text-slate-900 text-sm font-sans focus-visible:outline-none transition-colors"
							>
								<option value="OQ Pipeline Services">{t('quoteForm.oqService')}</option>
								<option value="Safety Training Courses">{t('quoteForm.trainingService')}</option>
								<option value="NCCER Craft Credentials">{t('quoteForm.nccerService')}</option>
								<option value="Mobile Medical & Drug Testing">{t('quoteForm.healthService')}</option>
								<option value="Respirator Fit & Hearing Testing">{t('quoteForm.fitService')}</option>
								<option value="Multiple Services / Full Package">{t('quoteForm.multipleService')}</option>
							</select>
						</div>

						<!-- Employee Count -->
						<div class="space-y-1.5">
							<label for="employeeCount" class="block font-mono text-xs font-bold uppercase text-slate-900">
								{t('quoteForm.employeeCount')}
							</label>
							<input
								type="text"
								id="employeeCount"
								name="employeeCount"
								bind:value={employeeCount}
								placeholder="e.g. 15 workers"
								class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-[rgb(210,47,37)] focus:bg-white text-slate-900 text-sm font-sans focus-visible:outline-none transition-colors"
							/>
						</div>

						<!-- Location / Jobsite -->
						<div class="space-y-1.5">
							<label for="location" class="block font-mono text-xs font-bold uppercase text-slate-900">
								{t('quoteForm.location')}
							</label>
							<input
								type="text"
								id="location"
								name="location"
								bind:value={location}
								placeholder="e.g. Farmington NM / Durango CO Yard"
								class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-[rgb(210,47,37)] focus:bg-white text-slate-900 text-sm font-sans focus-visible:outline-none transition-colors"
							/>
						</div>

						<!-- Preferred Date -->
						<div class="space-y-1.5">
							<label for="preferredDate" class="block font-mono text-xs font-bold uppercase text-slate-900">
								{t('quoteForm.preferredDate')}
							</label>
							<input
								type="text"
								id="preferredDate"
								name="preferredDate"
								bind:value={preferredDate}
								placeholder="e.g. Next Tuesday morning"
								class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-[rgb(210,47,37)] focus:bg-white text-slate-900 text-sm font-sans focus-visible:outline-none transition-colors"
							/>
						</div>

					</div>

					<!-- Additional Message -->
					<div class="space-y-1.5">
						<label for="message" class="block font-mono text-xs font-bold uppercase text-slate-900">
							{t('quoteForm.message')}
						</label>
						<textarea
							id="message"
							name="message"
							rows="3"
							bind:value={message}
							placeholder="Mention specific OQ covered tasks, course types, or mobile testing schedule requirements..."
							class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 focus:border-[rgb(210,47,37)] focus:bg-white text-slate-900 text-sm font-sans focus-visible:outline-none transition-colors"
						></textarea>
					</div>

					<!-- Privacy Notice -->
					<p class="text-[11px] text-slate-500 italic">
						{t('quoteForm.privacyNotice')}
					</p>

					<!-- Submit Button -->
					<div>
						<button
							type="submit"
							disabled={isSubmitting}
							class="w-full py-4 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-sm font-bold uppercase tracking-wider transition-colors shadow-md disabled:opacity-50 cursor-pointer"
						>
							{#if isSubmitting}
								<span>{t('quoteForm.submitting')}</span>
							{:else}
								<span>{t('quoteForm.submitBtn')}</span>
							{/if}
						</button>
					</div>
				</form>
			{/if}
		</div>

	</div>
</section>
