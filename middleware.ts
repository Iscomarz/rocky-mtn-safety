export const config = {
	matcher: ['/((?!_next|static|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)$).*)']
};

export default function middleware(request: Request): Response | void {
	const userAgent = request.headers.get('user-agent') || '';

	// Block AhrefsBot automated crawling attempts at Vercel Edge Layer
	if (/ahrefsbot/i.test(userAgent)) {
		return new Response('403 Forbidden: Automated bot traffic blocked.', {
			status: 403,
			headers: {
				'Content-Type': 'text/plain',
				'Cache-Control': 'no-store, max-age=0'
			}
		});
	}
}
