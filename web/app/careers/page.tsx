import type { Metadata } from 'next';
import { PageHero, PageSection } from '@/app/components/MarketingPage';
import { ogForPage, twitterForPage } from '@/app/lib/seo';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'How we work at Cards402: remote-first, flexible hours, published salaries. No open roles at the moment.',
  alternates: { canonical: 'https://cards402.com/careers' },
  openGraph: ogForPage({
    title: 'Careers — Cards402',
    description: 'Remote-first. Published salaries. Building payment rails for AI agents.',
    path: '/careers',
  }),
  twitter: twitterForPage({
    title: 'Careers — Cards402',
    description: 'Remote-first. Published salaries. Building payment rails for AI agents.',
  }),
};

const BENEFITS = [
  {
    icon: '◉',
    title: 'Remote-first',
    body: 'Work 100% remotely from any country we can legally employ in. A quiet office in London is available if you want one.',
  },
  {
    icon: '◴',
    title: 'Flexible hours',
    body: "Night owl or early bird — we care about output. Four-hour overlap window in UTC for syncs, otherwise it's up to you.",
  },
  {
    icon: '◐',
    title: '28 days paid leave',
    body: 'Plus local public holidays. Plus a mandatory week off between Christmas and New Year.',
  },
  {
    icon: '⌘',
    title: 'Equipment allowance',
    body: '£3,000 to kit out your workstation on day one, refreshed every 3 years.',
  },
  {
    icon: '☾',
    title: 'Learning budget',
    body: '£2,500/year for books, courses, conferences. Plus one paid week a year to go deep on something you chose.',
  },
  {
    icon: '✈',
    title: 'Team travel covered',
    body: 'Quarterly team offsites in good cities. Travel, hotel, meals covered.',
  },
  {
    icon: '♡',
    title: 'Health insurance',
    body: 'Private health + dental + mental health coverage in the US, UK, Canada, and the EU. Global coverage via a health spending account elsewhere.',
  },
  {
    icon: '⚕',
    title: 'Paid sick / family leave',
    body: '30 days fully-paid sick leave. 20 weeks fully-paid parental leave for every parent, regardless of role.',
  },
  {
    icon: '◎',
    title: 'Published salaries',
    body: 'Every job post lists the band up front. No negotiation theatre, no gender gap, no "we\'ll see where we land". The number on the ad is the number.',
  },
  {
    icon: '❖',
    title: 'Equity',
    body: 'Every full-time hire gets a meaningful slice. Vesting over four years with a one-year cliff. Standard ISO tax treatment where available.',
  },
  {
    icon: '✷',
    title: 'Performance bonuses',
    body: 'Annual company-wide bonus tied to revenue, plus discretionary shout-outs for exceptional work.',
  },
  {
    icon: '★',
    title: 'Relocation support',
    body: "If you want to move country for personal reasons, we'll help with visa sponsorship and up to £8,000 in relocation costs.",
  },
];

const REASONS = [
  {
    title: 'Get in at the ground level.',
    body: 'Cards402 is small, fast, and agile. You will directly impact the direction of the product and grow with the company from day one.',
  },
  {
    title: 'Make something real.',
    body: 'Not another analytics dashboard. A real payment rail that real autonomous agents use to buy real things on the real open internet. Measurable, on-chain impact.',
  },
  {
    title: 'Do your best work.',
    body: 'We staff for focus. Quiet mornings. Short meetings. Long uninterrupted stretches. We do not mistake activity for progress.',
  },
  {
    title: 'Opinions welcome.',
    body: "If you have a better way, we want to hear it. The loudest voice doesn't win — the best-argued one does. Entrepreneurs, rainmakers, and people who write design docs for fun all fit.",
  },
  {
    title: 'No theatre.',
    body: "No all-hands slideshows. No OKR ceremonies. No stand-up standups. We write things down and get out of each other's way.",
  },
  {
    title: 'We put you first.',
    body: "Our team is our lifeblood. The published salaries, the leave, the equity — none of that is marketing copy. It's how we protect the people we hire.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Come build payment rails for AI"
        accent="agents"
        intro="Cards402 is small, remote-first, and focused. We publish every salary, we hire from everywhere, and we don’t believe anyone should choose between doing great work and taking care of themselves. Below is what we offer. We’re not hiring right now."
      />

      {/* Benefits grid */}
      <PageSection eyebrow="Benefits" title="What you get.">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0',
            borderTop: '1px solid var(--border)',
            borderLeft: '1px solid var(--border)',
          }}
        >
          {BENEFITS.map((b) => (
            <article
              key={b.title}
              style={{
                padding: '1.7rem 1.5rem 1.85rem',
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                background: 'var(--bg)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  color: 'var(--green)',
                  marginBottom: '0.9rem',
                  opacity: 0.85,
                }}
              >
                {b.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  letterSpacing: '-0.015em',
                  color: 'var(--fg)',
                  margin: '0 0 0.6rem',
                  lineHeight: 1.15,
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: 'var(--fg-muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {b.body}
              </p>
            </article>
          ))}
        </div>
      </PageSection>

      {/* Why */}
      <PageSection
        background="surface"
        eyebrow="Why Cards402"
        title="Six reasons to take the call."
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.35rem',
          }}
        >
          {REASONS.map((r) => (
            <div
              key={r.title}
              style={{
                padding: '1.65rem 1.5rem 1.85rem',
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 14,
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  color: 'var(--fg)',
                  margin: '0 0 0.7rem',
                  letterSpacing: '-0.015em',
                }}
              >
                {r.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--fg-muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Open roles */}
      <PageSection eyebrow="Open roles" title="Nothing open right now.">
        <p className="type-body" style={{ fontSize: '0.92rem', maxWidth: 560, margin: 0 }}>
          We&apos;re a small team and fully staffed. We aren&apos;t taking speculative applications
          and we don&apos;t keep CVs on file. When that changes, the roles will appear here first.
        </p>
      </PageSection>
    </>
  );
}
