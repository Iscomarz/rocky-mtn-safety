<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PartnerSlider from '$lib/components/PartnerSlider.svelte';
	import oqBannerImg from '$lib/assets/Rocky-mtn-safety/NeedOQ post.png';
	import oqFieldImg from '$lib/assets/Rocky-mtn-safety/IMG-20260522-WA0005.jpg';
</script>

<svelte:head>
	<title>Operator Qualification (OQ) &amp; Pipeline Services | Rocky Mountain Safety</title>
	<meta
		name="description"
		content="Operator Qualification (OQ) evaluations and covered task verifications for pipeline and utility contractors in Colorado, New Mexico, Arizona, and Utah. Supported on Veriforce, EWN, OQSG, ITS, and ISNetworld."
	/>
</svelte:head>

<div class="min-h-screen bg-[#f8f9fa] text-slate-900 font-sans flex flex-col justify-between">
	<Header />

	<main class="py-16 sm:py-24 border-b border-slate-200 flex-1">
		<div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
			
			<!-- Page Header with Image Layout -->
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
				<div class="lg:col-span-7 space-y-4 text-left">
					<div class="inline-block px-3 py-1 bg-white border border-slate-300 text-xs font-mono text-slate-700 uppercase tracking-widest shadow-sm">
						DOT &amp; PHMSA PIPELINE COMPLIANCE
					</div>
					<h1 class="text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
						OPERATOR QUALIFICATION (OQ) &amp; <span class="text-[rgb(210,47,37)]">PIPELINE SERVICES</span>
					</h1>
					<p class="text-base text-slate-700 leading-relaxed">
						Comprehensive evaluation, covered task verification, and contractor compliance management for energy and utility employers throughout the Four Corners Region.
					</p>
					<div class="pt-2">
						<a
							href="/quote"
							class="inline-block px-8 py-3.5 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
						>
							REQUEST OQ EVALUATION
						</a>
					</div>
				</div>

				<div class="lg:col-span-5">
					<div class="industrial-card p-2 bg-white border border-slate-300 overflow-hidden shadow-xl">
						<img 
							src={oqBannerImg} 
							alt="Operator qualification training and pipeline inspection services" 
							class="w-full h-auto object-cover"
						/>
						<div class="p-3 bg-slate-900 border-t border-slate-800 text-center font-mono text-xs text-white uppercase">
							QUALIFIED OPERATORS • STRONGER OPERATIONS
						</div>
					</div>
				</div>
			</div>

			<!-- Core OQ Capabilities Grid -->
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
				<div class="lg:col-span-5">
					<div class="industrial-card p-2 bg-white border border-slate-300 overflow-hidden shadow-md">
						<img 
							src={oqFieldImg} 
							alt="Certified safety specialist evaluating oil & gas pipeline compliance" 
							class="w-full h-auto object-cover"
						/>
						<div class="p-3 bg-slate-900 border-t border-slate-800 text-center font-mono text-xs text-white uppercase">
							FIELD EVALUATION &amp; HAZARD RECOGNITION
						</div>
					</div>
				</div>

				<div class="lg:col-span-7 space-y-6">
					<div class="industrial-card p-6 sm:p-8 space-y-6 border-l-4 border-l-[rgb(210,47,37)]">
						<h2 class="text-xl font-bold uppercase text-slate-900">FIELD EVALUATIONS &amp; TASK VERIFICATION</h2>
						<p class="text-sm text-slate-700 leading-relaxed">
							Our certified OQ evaluators conduct practical evaluations and knowledge verifications directly at your facility or field site. We support major pipeline operator requirements and help keep your contractor workforce audit-ready.
						</p>

						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
							<div class="bg-slate-50 p-4 border border-slate-200 space-y-1">
								<h3 class="text-xs font-bold font-mono text-slate-900 uppercase">COVERED TASK EVALUATIONS</h3>
								<p class="text-xs text-slate-600">On-site written and practical performance evaluations for gas and liquid pipeline tasks.</p>
							</div>

							<div class="bg-slate-50 p-4 border border-slate-200 space-y-1">
								<h3 class="text-xs font-bold font-mono text-slate-900 uppercase">QUALIFICATION TRACKING</h3>
								<p class="text-xs text-slate-600">Proactive expiration management and renewal scheduling so worker credentials never lapse.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- CTA Box -->
			<div class="industrial-box p-8 text-center space-y-4 border-t-2 border-t-[rgb(210,47,37)] bg-white">
				<h3 class="text-xl font-bold uppercase text-slate-900">NEED OQ EVALUATIONS FOR YOUR CREW?</h3>
				<p class="text-xs text-slate-600 max-w-lg mx-auto">
					Contact our Durango office to schedule evaluators directly at your job site or yard in Colorado, NM, AZ, or UT.
				</p>
				<a
					href="/quote"
					class="inline-block px-8 py-3.5 bg-[rgb(210,47,37)] hover:bg-[rgb(235,57,47)] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
				>
					REQUEST OQ QUOTE
				</a>
			</div>
		</div>

		<div class="pt-16">
			<PartnerSlider />
		</div>
	</main>

	<Footer />
</div>
