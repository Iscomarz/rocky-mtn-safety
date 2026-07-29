import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const userAgent = event.request.headers.get('user-agent') || '';

	// 1. Block AhrefsBot at server layer
	if (/ahrefsbot/i.test(userAgent)) {
		return new Response('403 Forbidden: Automated bot traffic blocked.', {
			status: 403,
			headers: {
				'Content-Type': 'text/plain',
				'Cache-Control': 'no-store, max-age=0'
			}
		});
	}

	// 2. Redirect dummy /products paths to root /
	if (event.url.pathname.startsWith('/products')) {
		throw redirect(301, '/');
	}

	return resolve(event);
};
