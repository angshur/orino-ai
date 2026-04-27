# Viao.ai — Project Context Prompt
*Use this at the start of any Claude Code or Claude chat session to restore full context.*

---

## What is Viao.ai?

Viao.ai is a done-for-you AI services company that builds AI receptionists, smart websites, and outbound SDR systems for local businesses and B2B sales teams. Everything is set up in 48 hours. The business owner touches nothing.

**Live site:** https://viao-ai.vercel.app
**Domain target:** viao.ai

**One sentence pitch:**
> "We build your AI receptionist, smart website, and sales outreach system. Done for you in 48 hours. You focus on your work."

---

## The Team

- **Builder:** Angshuman (not listed publicly) — Head of Product at TapClicks, building Viao as a weekend side venture
- **Sales:** Mike Rosner (NYC) — ex-CRO/SVP Sales, MarTech/AdTech background, strong agency and media company network
- **Face of company:** Bipasha — listed publicly on the site

---

## The Problem We Solve

Small businesses and B2B sales teams are losing customers and revenue because:
- Missed calls = missed bookings (salons, restaurants, dental offices)
- No website or bad website = no lead capture
- Manual outreach = too slow, too expensive, not enough pipeline

Existing tools (GoHighLevel, My AI Front Desk, evyAI) either require the business owner to set it up themselves, or only create content without executing the outreach. Viao does everything done-for-you.

---

## Customer Segments

### Tier 1 — Local Businesses (entry, $299/mo)
Salons, restaurants, roofers, dental offices
Core pain: missed calls, no online presence, no lead capture

### Tier 2 — Growing Companies (mid, $599/mo)
Real estate firms, med spas, universities, dental chains
Core pain: managing more customers, multi-location, reputation

### Tier 3 — B2B Sales Teams (premium, $999/mo)
Adtech companies, media companies, SaaS sales teams (e.g. Mogl/Falcone)
Core pain: can't find leads fast enough, outbound too slow

### GTM Channel
Mike's agency and media company network → hungry sales reps → they sell to SMB clients → Viao delivers. Not one business at a time — agency reps as the distribution layer.

---

## Three Hero Products (Live Today)

### 1. AI Receptionist
- Sara answers every call 24/7
- Books appointments, handles FAQs, captures every lead
- Call log delivered to owner
- **Tech:** White-label My AI Front Desk + Twilio
- **Cost to us:** ~$49/mo wholesale → charge $150-200/mo bundled

### 2. Smart Website
- Built from Google Reviews + existing business content
- Captures leads, local SEO baked in, live in 48 hours
- **Tech:** Google Places API + Claude API (copy generation) + HTML template → Vercel
- **This is the custom build — our actual differentiator**

### 3. AI SDR
- Finds prospects, writes the message, sends it, follows up, books the meeting
- The user just shows up to the meeting
- Directly addresses the gap Taylor identified in evyAI: "it only creates the content, I want it to execute the outreach"
- Also addresses Falcone's pain at Mogl: can't find leads fast enough, outbound too slow
- **Tech:** Clay/Apollo for prospecting + AI outreach sequences + ElevenLabs voice for calls

---

## Full Product Portfolio (Portfolio Page)

### For Local Businesses
- AI Receptionist
- Smart Website
- Appointment Reminders (SMS/voice, cuts no-shows)
- Review Request Automation
- Social Media Content Generator

### For Growing Companies
- AI-Powered CRM
- Re-engagement Campaigns
- Business Listings Sync (Google/Yelp/Facebook)
- Multi-location Dashboard
- Local SEO Setup

### For Sales Teams
- AI SDR (hero product for this segment)
- Outbound Voice Agent
- Prospect List Builder
- Lead Follow-up Sequences
- Pipeline Reporting Dashboard

---

## Tech Stack

### Phase 1 (current — build lean)
| Component | Solution |
|---|---|
| Website | Next.js 14 + Tailwind CSS → Vercel |
| AI Receptionist | White-label My AI Front Desk |
| Phone numbers | Twilio ($1/mo per number) |
| Smart Website generator | Google Places API + Claude API |
| Contact/booking | Calendly embed |
| Backend | Supabase (when needed) |

### Phase 2 (GoHighLevel white-label)
- White-label GoHighLevel as backend CRM/automation layer
- Configure per vertical — salon package, dental package, restaurant package
- Keep custom website generator as Viao's differentiator
- GoHighLevel handles: CRM, email/SMS, review requests, re-engagement, social content

---

## Design System

```css
--background: #FFFFFF
--surface: #F8FAFC
--accent-teal: #0F766E       /* primary */
--accent-amber: #F59E0B      /* CTAs */
--text-primary: #0F172A
--text-secondary: #475569
--font-heading: 'Plus Jakarta Sans', sans-serif
--font-body: 'DM Sans', sans-serif
```

**Feel:** Clean, confident, approachable. Toast meets Jobber. Works for a salon owner and a university admissions director simultaneously. Not dark/premium (that's for SaaSMatchup). Not playful/cheap. Professional neighbor energy.

---

## Real Customer Example

**Star Image Studio** — Beauty Salon, San Jose CA
- Owner: Sharmila
- Pain: Missing calls during peak hours, no lead capture
- Solution: AI Receptionist (Sara) + Smart Website built from Google reviews
- Result: Every call answered, every lead captured
- Use this as the proof section on the homepage

**Falcone (Mogl)** — AdTech company
- Pain: Can't find leads fast enough, outbound too slow
- Solution: AI SDR — prospect list + outreach sequences + voice follow-up
- Target first B2B consulting client

---

## Competitive Landscape

| Competitor | What they do | Why Viao wins |
|---|---|---|
| GoHighLevel | All-in-one CRM/automation for agencies | Too complex for SMBs to self-configure. Viao delivers done-for-you on top of GHL in Phase 2 |
| My AI Front Desk | AI receptionist for SMBs | Self-serve. Viao white-labels and bundles it |
| Durable | AI website builder | Self-serve at $22/mo. Viao is done-for-you at $299/mo |
| Smith.ai | Human + AI receptionist | $97-1000/mo. Viao is pure AI, lower cost |
| evyAI | LinkedIn content generator | Only creates content, doesn't execute outreach. Viao's AI SDR executes |

**The gap Viao fills:** Done-for-you bundle (website + receptionist + SDR) delivered in 48 hours. Nobody is doing all three as a managed service for SMBs and sales teams.

---

## Business Model

- **Starter:** $299/mo — Local businesses (receptionist + website)
- **Growth:** $599/mo — Multi-location + mid-market
- **Sales Team:** $999/mo — B2B SDR + outreach
- **Agency commission:** 20-30% recurring to Mike's sales reps
- **No contracts. Cancel anytime.**

Target unit economics:
- My AI Front Desk cost: ~$49/mo wholesale
- Delivery cost: ~2-3 hours setup per client
- Gross margin target: 60-70% at scale

---

## Build Philosophy

- **Weekend-only builds** — Angshuman builds on weekends alongside full-time TapClicks role
- **Frontend-first** — ship something clickable every session
- **Phase 1:** Build the website generator custom. White-label everything else.
- **Phase 2:** GoHighLevel white-label as backend. Viao becomes the configuration and delivery layer.
- **Never over-engineer** — SQLite before Postgres, monolith before microservices
- **Start manual, then automate** — onboard first 5 clients manually, then systematize

---

## Current Status

- [x] Site live at https://viao-ai.vercel.app
- [x] Three pages: Homepage, Products, Contact
- [x] Design system implemented
- [x] Copy finalized
- [ ] Calendly link connected
- [ ] Real headshots / team photos
- [ ] Star Image Studio mockup screenshot
- [ ] My AI Front Desk white-label account set up
- [ ] Google Places API key configured
- [ ] Claude API website generator built
- [ ] First client: Falcone/Mogl (AI SDR pilot)
- [ ] First client: Star Image Studio or similar salon (AI Receptionist pilot)

---

## Next Session Priorities

1. Connect Calendly to contact page
2. Build the Smart Website generator (Google Places API → Claude API → HTML template)
3. Set up My AI Front Desk white-label account
4. Reach out to Falcone for AI SDR pilot conversation
5. Get Mike to send 3 agency contacts to the site this week

---

## How to Use This File

Paste the entire contents of this file at the start of any Claude Code or Claude chat session with the prompt:

> "Read this context file fully before we start. This is the Viao.ai project. [paste file contents]. Today's goal is: [your specific task for this session]."

This restores full project state without re-explaining everything from scratch.
