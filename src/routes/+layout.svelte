<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import logoPng from '$lib/assets/Rocky-mtn-safety/RMS by Safe Hands Logo.png';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { env } from '$env/dynamic/public';

	let { children } = $props();

	const gaId = env.PUBLIC_GA_ID;

	const canonicalUrl = $derived(
		'https://rockymtnsafety.com' + (page.url.pathname === '/' ? '/' : page.url.pathname.replace(/\/$/, ''))
	);

	const localBusinessJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': ['LocalBusiness', 'ProfessionalService', 'EducationalOrganization'],
				'@id': 'https://rockymtnsafety.com/#business',
				name: 'Rocky Mountain Safety by Safe Hands',
				alternateName: ['Rocky Mountain Safety', 'RMS Safe Hands'],
				url: 'https://rockymtnsafety.com',
				logo: 'https://rockymtnsafety.com/apple-touch-icon.png',
				image: 'https://rockymtnsafety.com/og-image.png',
				description:
					'Professional provider of industrial safety training, pipeline Operator Qualification (OQ) evaluations, NCCER workforce credentials, and mobile occupational health testing in Durango, Colorado and the Four Corners.',
				telephone: '+1-970-764-8799',
				email: 'L.Sanchez@RockyMtnSafety.com',
				address: {
					'@type': 'PostalAddress',
					streetAddress: '858 Main St, Unit 203',
					addressLocality: 'Durango',
					addressRegion: 'CO',
					postalCode: '81301',
					addressCountry: 'US'
				},
				geo: {
					'@type': 'GeoCoordinates',
					latitude: 37.2753,
					longitude: -107.8801
				},
				areaServed: [
					{ '@type': 'AdministrativeArea', name: 'Colorado' },
					{ '@type': 'AdministrativeArea', name: 'New Mexico' },
					{ '@type': 'AdministrativeArea', name: 'Arizona' },
					{ '@type': 'AdministrativeArea', name: 'Utah' },
					{ '@type': 'Place', name: 'Four Corners Region' }
				],
				openingHoursSpecification: [
					{
						'@type': 'OpeningHoursSpecification',
						dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
						opens: '08:00',
						closes: '16:00'
					}
				],
				priceRange: '$$',
				parentOrganization: {
					'@type': 'Organization',
					name: 'Safe Hands Safety',
					telephone: '+1-432-231-2207'
				},
				contactPoint: [
					{
						'@type': 'ContactPoint',
						telephone: '+1-970-764-8799',
						contactType: 'customer support',
						contactOption: 'TollFree',
						areaServed: ['US'],
						availableLanguage: ['en', 'es']
					}
				],
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: 'Safety & Health Services',
					itemListElement: [
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Operator Qualification (OQ) Pipeline Evaluations',
								description:
									'DOT/PHMSA compliant task evaluations across Veriforce, EWN, and ISNetworld platforms.'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Industrial Safety Training Courses',
								description:
									'Bilingual SafeLandUSA, PEC H2S Clear, OSHA 10/30, CPR/First Aid, and MSHA surface mining.'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'Mobile Occupational Health & Drug Testing',
								description:
									'On-site DOT drug/alcohol testing, quantitative respirator fit testing (QNFT), and audiometric exams.'
							}
						},
						{
							'@type': 'Offer',
							itemOffered: {
								'@type': 'Service',
								name: 'NCCER Workforce Development',
								description:
									'Standardized craft training, assessments, and portable credentials for industrial trades.'
							}
						}
					]
				}
			},
			{
				'@type': 'WebSite',
				'@id': 'https://rockymtnsafety.com/#website',
				url: 'https://rockymtnsafety.com',
				name: 'Rocky Mountain Safety',
				publisher: {
					'@id': 'https://rockymtnsafety.com/#business'
				},
				inLanguage: ['en-US', 'es-US']
			}
		]
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="apple-touch-icon" href={logoPng} />
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:url" content={canonicalUrl} />
	{@html `<script type="application/ld+json">${localBusinessJsonLd}</script>`}
	{#if gaId}
		<script async src="https://www.googletagmanager.com/gtag/js?id={gaId}"></script>
		{@html `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');</script>`}
	{/if}
</svelte:head>

{#key page.url.pathname}
	<div in:fade={{ duration: 220, delay: 40 }} out:fade={{ duration: 150 }}>
		{@render children()}
	</div>
{/key}


