# DESIGN.md — Rocky Mountain Safety Design System

## 1. Brand Identity & Vision
- **Brand Name**: Rocky Mountain Safety by Safe Hands
- **Motto**: *"ADVICE. You can rely on. STRATEGIES. That work. EXPERTS. Who’ve been there."*
- **Target Audience**: Field personnel, safety managers, HR directors, and oil & gas / industrial contractors in the Four Corners region (Durango, CO, NM, UT, AZ).
- **Core Value Proposition**: Practical, accessible, and mobile-ready safety training, operator qualification (OQ), and occupational health testing.

---

## 2. Visual Palette & Tokens
- **Canvas Background**: `#F8F9FA` (Industrial Clean Light — optimized for outdoor legibility on mobile devices in direct sunlight).
- **Surface Cards**: `#FFFFFF` (Crisp high-contrast cards).
- **Primary Accent Color**: `rgb(210, 47, 37)` / `#D22F25` (Safety Red for CTAs, emergency highlights, and active state indicators).
- **Primary Accent Hover**: `rgb(235, 57, 47)`
- **Heading Typography Color**: `#0F172A` (Deep Slate for maximum contrast).
- **Body Text Color**: `#334155` (Slate Gray).
- **Borders & Dividers**: `#E2E8F0` (Technical thin borders).

---

## 3. Component Architecture & Style Guidelines
- **Card Style**: **Square Technical Industrial**
  - Sharp corners (0px border-radius / `rounded-none`).
  - Subtle technical grid backgrounds (`bg-grid-pattern`).
  - High-contrast monospace technical badges (`font-mono uppercase text-xs`).
  - Left accent border highlights (`border-l-4 border-l-[rgb(210,47,37)]`).
- **Interactive Buttons**:
  - Primary CTA: Solid Safety Red (`bg-[rgb(210,47,37)]`), bold monospace typography, uppercase, sharp edges.
  - Hover effect: Subtle lift (`-translate-y-0.5`) + high-contrast ring focus indicator.
- **Navigation Header**:
  - Dark Slate Header (`#121212` / `#18181B`) for strong visual anchoring.
  - Active route indicator: Bold Safety Red text + bottom red underline bar.

---

## 4. Typography Rules
- **Headings (`h1`, `h2`, `h3`)**: `Outfit` / `Plus Jakarta Sans`, uppercase, black/extrabold font weight (`font-black`), tracking tight (`tracking-tight`).
- **Body Text**: `Plus Jakarta Sans`, clean 14px-16px, leading relaxed (`leading-relaxed`).
- **Badges & Metadata**: Monospace (`font-mono`), uppercase, tracking widest (`tracking-widest`).

---

## 5. Security & Form Guidelines
- **Zero Friction Quote Form**: Requires Company, Contact Name, Phone, Email, and Service Requested.
- **Privacy Rule**: Never collect sensitive personal data (SSN, medical history, drug test results) over general web forms.
- **Anti-Spam Shield**:
  - Invisible Honeypot field (`website_url_hp`).
  - Vercel Edge Middleware bot filtering.
  - Cloudflare L7 DDoS protection.
