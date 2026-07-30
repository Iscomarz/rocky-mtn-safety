export const config = {
	matcher: ['/((?!_next|static|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)$).*)']
};

// Known malicious bot User-Agent signatures & scrapers
const BLOCKED_BOT_REGEX = /ahrefsbot|semrushbot|dotbot|mj12bot|bytespider|gptbot|claudebot|ccbot|scrapy|python-requests|go-http-client|curl\/|wget\/|libwww-perl|zgrab|censys|nmap|sqlmap|nikto|masscan|eval|passthrough/i;

// Known exploit and spam scanning path patterns (.env, .git, 2026/..., kazino, casino, wp-...)
const EXPLOIT_PATH_REGEX = /\.(php|asp|aspx|jsp|cgi|env|git)$|xmlrpc|wp-admin|wp-content|wp-includes|wp-login|wp-json|\/2026\/|\/2025\/|\/2024\/|\/casino|\/kazino|\/1win|\/pin-up|\/wordpress|\/blog\/|\/admin|^\/\.env/i;

export default function middleware(request: Request): Response | void {
	const url = new URL(request.url);
	const hostname = url.hostname;
	const pathname = url.pathname;
	const userAgent = request.headers.get('user-agent') || '';

	// 1. Force redirect any direct *.vercel.app host traffic to custom domain (pushing bots through Cloudflare)
	if (hostname.endsWith('.vercel.app')) {
		return Response.redirect(`https://rockymtnsafety.com${pathname}${url.search}`, 301);
	}

	// 2. Immediately block exploit / vulnerability scanning paths at Edge
	if (EXPLOIT_PATH_REGEX.test(pathname)) {
		return new Response('403 Forbidden: Malicious path scan blocked.', {
			status: 403,
			headers: {
				'Content-Type': 'text/plain',
				'Cache-Control': 'no-store, max-age=0'
			}
		});
	}

	// 3. Block known malicious scrapers and bot user-agents
	if (!userAgent || BLOCKED_BOT_REGEX.test(userAgent)) {
		return new Response('403 Forbidden: Automated bot traffic blocked.', {
			status: 403,
			headers: {
				'Content-Type': 'text/plain',
				'Cache-Control': 'no-store, max-age=0'
			}
		});
	}
}
