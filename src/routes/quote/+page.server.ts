import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const company = data.get('company')?.toString().trim();
		const contactName = data.get('contactName')?.toString().trim();
		const phone = data.get('phone')?.toString().trim();
		const email = data.get('email')?.toString().trim();
		const serviceRequested = data.get('serviceRequested')?.toString().trim();
		const employeeCount = data.get('employeeCount')?.toString().trim();
		const location = data.get('location')?.toString().trim();
		const preferredDate = data.get('preferredDate')?.toString().trim();
		const message = data.get('message')?.toString().trim();

		// Honeypot anti-spam check: If bot filled out the hidden field, silently exit
		const websiteUrlHp = data.get('website_url_hp')?.toString().trim();
		if (websiteUrlHp) {
			console.warn('[Honeypot Triggered] Blocked automated spam submission silently.');
			return {
				success: true
			};
		}

		// Server-side validation for required fields
		if (!company || !contactName || !phone || !email || !serviceRequested) {
			return fail(400, {
				error: 'Please fill in all required fields (Company, Contact Name, Phone, Email, Service Requested).'
			});
		}

		const apiKey = env.RESEND_API_KEY;

		if (!apiKey || apiKey === 're_your_api_key_here') {
			console.warn('[Resend WARNING] RESEND_API_KEY is not configured in .env yet.');
			return {
				success: true,
				demoMode: true,
				message: 'Quote request recorded locally. Add your actual RESEND_API_KEY in .env to send real emails.'
			};
		}

		const resend = new Resend(apiKey);
		
		// Resend tested sender address (onboarding@resend.dev works immediately for tests)
		const fromAddress = env.RESEND_FROM_EMAIL || 'Rocky Mountain Safety Quotes <onboarding@resend.dev>';

		// Production email routing (commented for testing):
		// const toAddress = env.QUOTE_RECIPIENT_EMAIL || 'L.Sanchez@RockyMtnSafety.com';
		// const ccAddress = env.QUOTE_CC_EMAIL || 'Joyce.Sanchez@SafeHandsSafety.com';

		// Testing recipient override:
		const toAddress = 'franmtz96@gmail.com';

		// Clean Industrial Light HTML Email Template
		const emailHtml = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>New Quote Request - Rocky Mountain Safety</title>
			</head>
			<body style="margin: 0; padding: 0; background-color: #f8f9fa; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #0f172a;">
				
				<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8f9fa; padding: 32px 16px;">
					<tr>
						<td align="center">
							<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e2e8f0; border-top: 5px solid rgb(210, 47, 37); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
								
								<!-- Header -->
								<tr>
									<td style="padding: 24px 32px; background-color: #ffffff; border-bottom: 1px solid #e2e8f0;">
										<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td align="left" valign="middle">
													<div style="font-family: Arial, sans-serif;">
														<span style="font-size: 20px; font-weight: 900; color: #0f172a; letter-spacing: -0.5px; text-transform: uppercase; display: block; line-height: 1.2;">
															ROCKY MOUNTAIN <span style="color: rgb(210, 47, 37);">SAFETY</span>
														</span>
														<span style="font-size: 11px; font-weight: 700; color: #64748b; letter-spacing: 1px; text-transform: uppercase; display: block; margin-top: 2px;">
															BY SAFE HANDS • DURANGO, COLORADO
														</span>
													</div>
												</td>
												<td align="right" valign="middle">
													<span style="font-size: 10px; font-family: monospace; font-weight: bold; background-color: #fee2e2; color: rgb(210, 47, 37); padding: 4px 8px; border: 1px solid #fca5a5; text-transform: uppercase;">
														INCOMING QUOTE
													</span>
												</td>
											</tr>
										</table>
									</td>
								</tr>

								<!-- Content Body -->
								<tr>
									<td style="padding: 32px;">
										<h1 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: -0.3px;">
											NEW SERVICE QUOTE REQUEST
										</h1>
										<p style="margin: 0 0 24px 0; font-size: 14px; color: #475569; line-height: 1.5;">
											A new quote request has been submitted through the Rocky Mountain Safety web portal. Details below:
										</p>

										<!-- Data Fields Table -->
										<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-bottom: 24px;">
											<tr style="border-bottom: 1px solid #f1f5f9;">
												<td width="35%" style="padding: 10px 0; font-size: 12px; font-family: monospace; font-weight: bold; color: #64748b; text-transform: uppercase;">COMPANY NAME</td>
												<td style="padding: 10px 0; font-size: 14px; font-weight: bold; color: #0f172a;">${company}</td>
											</tr>
											<tr style="border-bottom: 1px solid #f1f5f9;">
												<td style="padding: 10px 0; font-size: 12px; font-family: monospace; font-weight: bold; color: #64748b; text-transform: uppercase;">CONTACT NAME</td>
												<td style="padding: 10px 0; font-size: 14px; color: #0f172a;">${contactName}</td>
											</tr>
											<tr style="border-bottom: 1px solid #f1f5f9;">
												<td style="padding: 10px 0; font-size: 12px; font-family: monospace; font-weight: bold; color: #64748b; text-transform: uppercase;">PHONE NUMBER</td>
												<td style="padding: 10px 0; font-size: 14px; color: #0f172a;">
													<a href="tel:${phone}" style="color: rgb(210, 47, 37); font-weight: bold; text-decoration: none;">${phone}</a>
												</td>
											</tr>
											<tr style="border-bottom: 1px solid #f1f5f9;">
												<td style="padding: 10px 0; font-size: 12px; font-family: monospace; font-weight: bold; color: #64748b; text-transform: uppercase;">EMAIL ADDRESS</td>
												<td style="padding: 10px 0; font-size: 14px; color: #0f172a;">
													<a href="mailto:${email}" style="color: #0284c7; text-decoration: underline;">${email}</a>
												</td>
											</tr>
											<tr style="border-bottom: 1px solid #f1f5f9;">
												<td style="padding: 10px 0; font-size: 12px; font-family: monospace; font-weight: bold; color: #64748b; text-transform: uppercase;">SERVICE REQUESTED</td>
												<td style="padding: 10px 0; font-size: 14px; font-weight: bold; color: rgb(210, 47, 37);">${serviceRequested}</td>
											</tr>
											<tr style="border-bottom: 1px solid #f1f5f9;">
												<td style="padding: 10px 0; font-size: 12px; font-family: monospace; font-weight: bold; color: #64748b; text-transform: uppercase;">CREW / WORKERS SIZE</td>
												<td style="padding: 10px 0; font-size: 14px; color: #0f172a;">${employeeCount || 'Not specified'}</td>
											</tr>
											<tr style="border-bottom: 1px solid #f1f5f9;">
												<td style="padding: 10px 0; font-size: 12px; font-family: monospace; font-weight: bold; color: #64748b; text-transform: uppercase;">JOBSITE LOCATION</td>
												<td style="padding: 10px 0; font-size: 14px; color: #0f172a;">${location || 'Not specified'}</td>
											</tr>
											<tr>
												<td style="padding: 10px 0; font-size: 12px; font-family: monospace; font-weight: bold; color: #64748b; text-transform: uppercase;">PREFERRED DATE</td>
												<td style="padding: 10px 0; font-size: 14px; color: #0f172a;">${preferredDate || 'Not specified'}</td>
											</tr>
										</table>

										<!-- Message Highlight Box -->
										<div style="margin-top: 16px; padding: 16px; background-color: #f8f9fa; border: 1px solid #e2e8f0; border-left: 4px solid rgb(210, 47, 37);">
											<span style="display: block; font-size: 11px; font-family: monospace; font-weight: bold; color: #64748b; text-transform: uppercase; margin-bottom: 6px;">
												ADDITIONAL DETAILS / SPECIFIC TASKS
											</span>
											<div style="font-size: 13px; color: #334155; line-height: 1.6;">
												${message ? message.replace(/\n/g, '<br/>') : '<em>No additional details provided.</em>'}
											</div>
										</div>

										<div style="margin-top: 28px; text-align: center;">
											<a href="mailto:${email}?subject=RE:%20Quote%20Request%20-%20Rocky%20Mountain%20Safety" style="display: inline-block; padding: 12px 28px; background-color: rgb(210, 47, 37); color: #ffffff; font-family: monospace; font-size: 12px; font-weight: bold; text-transform: uppercase; text-decoration: none; letter-spacing: 1px;">
												REPLY TO CLIENT DIRECTLY
											</a>
										</div>
									</td>
								</tr>

								<!-- Footer -->
								<tr>
									<td style="padding: 20px 32px; background-color: #f8f9fa; border-top: 1px solid #e2e8f0; text-align: center;">
										<p style="margin: 0 0 4px 0; font-size: 11px; font-family: monospace; font-weight: bold; color: #475569; text-transform: uppercase;">
											ROCKY MOUNTAIN SAFETY BY SAFE HANDS
										</p>
										<p style="margin: 0; font-size: 11px; color: #94a3b8;">
											Durango, CO • Phone: (432) 231-2207 • L.Sanchez@RockyMtnSafety.com
										</p>
									</td>
								</tr>

							</table>
						</td>
					</tr>
				</table>

			</body>
			</html>
		`;

		try {
			const { data: resendData, error } = await resend.emails.send({
				from: fromAddress,
				to: [toAddress],
				// cc: [ccAddress],
				replyTo: email,
				subject: `[TEST Quote Request] ${company} - ${serviceRequested}`,
				html: emailHtml
			});

			if (error) {
				console.error('[Resend Error]', error);
				return fail(500, { error: `Resend API error: ${error.message}` });
			}

			console.log('[Resend SUCCESS] Email sent! Message ID:', resendData?.id);

			return {
				success: true,
				emailId: resendData?.id
			};
		} catch (err: any) {
			console.error('[Resend Action Error]', err);
			return fail(500, { error: err.message || 'An unexpected error occurred while sending the email.' });
		}
	}
};
