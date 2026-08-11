import type { CSSProperties } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  Droplets,
  Gauge,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Waves
} from "lucide-react";
import { EstimateBuilder } from "@/components/EstimateBuilder";
import { faqs, phoneHref, reviewThemes, services, site, smsWithMessage } from "@/config/site";

const serviceIcons = [Home, Gauge, Waves, Droplets, Building2, Store];

function SectionHeading({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function Header() {
  return (
    <header className="site-header" id="top">
      <a className="brand" href="#top" aria-label={`${site.businessName} home`}>
        <span className="brand-mark"><Droplets size={19} /></span>
        <span className="brand-copy"><strong>LC</strong><small>PRESSURE WASHING</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#services">Services</a>
        <a href="#results">Results</a>
        <a href="#why-lc">Why LC</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div className="header-actions">
        <a className="header-phone desktop-only" href={phoneHref}><Phone size={15} /> (832) 439-8037</a>
        <a className="button button-primary" href="#estimate">Request estimate <ArrowRight size={16} /></a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="shell hero-layout">
        <div className="hero-copy">
          <div className="hero-kickers">
            <span><MapPin size={14} /> {site.regionLine}</span>
            <span><Clock3 size={14} /> 9 AM–9 PM daily</span>
          </div>
          <h1>Clean surfaces.<br /><em>Sharper curb appeal.</em></h1>
          <p className="hero-lede">Residential and commercial exterior cleaning for League City—built around responsive service, thorough work, and results you can actually see.</p>
          <div className="hero-actions">
            <a className="button button-primary button-large" href="#estimate">Request an estimate <ArrowRight size={18} /></a>
            <a className="button button-secondary button-large" href={smsWithMessage("Hi LC Pressure Washing, I'd like to ask about an exterior cleaning project.")}><MessageCircle size={18} /> Text LC</a>
          </div>
          <div className="hero-proof">
            <div><Star size={18} fill="currentColor" /><strong>{site.rating}/5</strong><span>{site.reviewCount} public reviews</span></div>
            <div><BadgeCheck size={18} /><strong>Residential + Commercial</strong><span>Exterior cleaning</span></div>
            <div><MapPin size={18} /><strong>League City</strong><span>Galveston County</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Before and after surface concept">
          <div className="surface-card dirty">
            <span>BEFORE</span>
            <div className="surface-texture" />
          </div>
          <div className="surface-card clean">
            <span>AFTER</span>
            <div className="surface-texture" />
          </div>
          <div className="pressure-line"><span /><span /><span /></div>
          <div className="visual-badge"><Droplets size={18} /><strong>VISIBLE RESULTS</strong><small>Real LC project photos go here next</small></div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    [BadgeCheck, "4.9 rating", "50 public reviews"],
    [Clock3, "9 AM–9 PM", "current public hours"],
    [Sparkles, "Thorough work", "a repeated review theme"],
    [MessageCircle, "Responsive", "easy communication"]
  ] as const;
  return <section className="trust-strip"><div className="shell trust-grid">{items.map(([Icon, value, label]) => <div className="trust-item" key={value}><Icon size={19} /><div><strong>{value}</strong><span>{label}</span></div></div>)}</div></section>;
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="shell">
        <div className="split-heading">
          <SectionHeading eyebrow="WHAT LC CLEANS" title="One call. The outside handled." body="From the house itself to the concrete around it, LC Pressure Washing is positioned to refresh the surfaces people notice first." />
          <a className="text-link" href="#estimate">Tell us what needs cleaning <ArrowRight size={16} /></a>
        </div>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article className="service-card" key={service.name}>
                <div className="service-number">0{index + 1}</div>
                <Icon size={26} />
                <span className="mini-label">{service.eyebrow}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <a href="#estimate">Request estimate <ChevronRight size={15} /></a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="section results-section" id="results">
      <div className="shell results-layout">
        <div>
          <SectionHeading light eyebrow="THE DIFFERENCE" title="The work should speak before the pitch does." body="Pressure washing is visual. This section is intentionally built around LC's real before-and-after work—the next customization step is dropping actual project photos into these slots." />
          <div className="result-points">
            <span><Check size={16} /> Driveways + sidewalks</span>
            <span><Check size={16} /> House + garage exteriors</span>
            <span><Check size={16} /> Patios + outdoor surfaces</span>
            <span><Check size={16} /> Commercial properties</span>
          </div>
        </div>
        <div className="project-board">
          <div className="project-slot slot-a"><span>PROJECT PHOTO 01</span><strong>Driveway / concrete</strong></div>
          <div className="project-slot slot-b"><span>PROJECT PHOTO 02</span><strong>House exterior</strong></div>
          <div className="project-slot slot-c"><span>PROJECT PHOTO 03</span><strong>Patio / walkway</strong></div>
        </div>
      </div>
    </section>
  );
}

function WhyLC() {
  const reasons = [
    [Clock3, "Shows up", "Punctuality and prompt follow-through show up repeatedly in public customer feedback."],
    [ShieldCheck, "Takes pride in the work", "Customers frequently describe the finished work as thorough, professional, and visibly better."],
    [MessageCircle, "Easy to work with", "Responsive communication and straightforward scheduling are recurring themes."],
    [Sparkles, "Strong value", "Customers consistently describe pricing as fair, reasonable, or a great value for the work performed."]
  ] as const;
  return (
    <section className="section why-section" id="why-lc">
      <div className="shell">
        <SectionHeading eyebrow="WHY LC" title="The reputation is already doing the talking." body="Instead of inventing marketing claims, this preview is built around the themes customers already repeat about LC Pressure Washing." />
        <div className="why-grid">{reasons.map(([Icon, title, body]) => <article key={title}><Icon size={22} /><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="shell reviews-layout">
        <div className="rating-panel">
          <span className="eyebrow">PUBLIC REPUTATION</span>
          <div className="rating-line"><strong>{site.rating}</strong><span>/5</span></div>
          <div className="stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={20} fill="currentColor" />)}</div>
          <p>Based on {site.reviewCount} public reviews in the current business listing.</p>
          <a className="button button-light" href={phoneHref}><Phone size={17} /> Call LC Pressure Washing</a>
        </div>
        <div className="theme-panel">
          <span className="mini-label">WHAT CUSTOMERS KEEP MENTIONING</span>
          <div className="theme-grid">{reviewThemes.map((theme, index) => <div key={theme}><span>0{index + 1}</span><strong>{theme}</strong></div>)}</div>
          <p className="review-note">This preview summarizes recurring public review themes rather than inventing testimonials. Individual review quotes can be added after the owner approves the final content.</p>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Tell LC what needs cleaning", "Choose the property type and the surfaces you want handled."],
    ["02", "Confirm the scope", "LC can clarify the job, access, timing, and any surface-specific considerations."],
    ["03", "Schedule the appointment", "Current business information indicates appointments are required."],
    ["04", "See the difference", "The goal is simple: cleaner surfaces and a stronger first impression."]
  ];
  return <section className="section process-section"><div className="shell"><SectionHeading eyebrow="HOW IT WORKS" title="From dirty surface to done." /><div className="process-grid">{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

function Estimate() {
  return (
    <section className="section estimate-section" id="estimate">
      <div className="shell estimate-layout">
        <div>
          <SectionHeading light eyebrow="REQUEST AN ESTIMATE" title="Start with the property. LC can handle the details from there." body="No giant form. No account creation. Send the basic scope by text and continue the conversation directly with LC Pressure Washing." />
          <div className="estimate-contact">
            <a href={phoneHref}><Phone size={18} /><span><small>CALL</small><strong>(832) 439-8037</strong></span></a>
            <div><Clock3 size={18} /><span><small>PUBLIC HOURS</small><strong>9 AM–9 PM daily</strong></span></div>
          </div>
        </div>
        <EstimateBuilder />
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="shell faq-layout">
        <SectionHeading eyebrow="QUICK ANSWERS" title="Before you reach out." body="Only information supported by LC's current public business listings is stated as fact in this preview." />
        <div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return <section className="final-cta"><div className="shell final-cta-inner"><div><span className="eyebrow">LEAGUE CITY EXTERIOR CLEANING</span><h2>Ready to clean up the outside?</h2><p>Tell LC what you want washed and get the conversation started.</p></div><div><a className="button button-primary button-large" href="#estimate">Request estimate <ArrowRight size={18} /></a><a className="button button-dark-outline button-large" href={phoneHref}><Phone size={18} /> Call LC</a></div></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="shell footer-grid"><div className="brand footer-brand"><span className="brand-mark"><Droplets size={19} /></span><span className="brand-copy"><strong>LC</strong><small>PRESSURE WASHING</small></span></div><div><strong>Residential + Commercial</strong><span>League City, TX · Galveston County</span></div><div><strong>(832) 439-8037</strong><span>9:00 AM–9:00 PM daily</span></div><p>Private prospect preview · Public information should be owner-verified before launch.</p></div></footer>;
}

function MobileBar() {
  return <div className="mobile-bar"><a href={phoneHref}><Phone size={17} /> Call</a><a href="#estimate"><MessageCircle size={17} /> Estimate</a></div>;
}

export default function HomePage() {
  const brandStyles = {
    "--bg": site.brand.background,
    "--surface": site.brand.surface,
    "--ink": site.brand.ink,
    "--muted": site.brand.muted,
    "--primary": site.brand.primary,
    "--fresh": site.brand.fresh,
    "--concrete": site.brand.concrete
  } as CSSProperties;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.legalDisplayName,
    description: site.description,
    telephone: site.phone,
    areaServed: ["League City, TX", "Galveston County, TX"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      reviewCount: site.reviewCount
    },
    openingHoursSpecification: ["Mo-Su 09:00-21:00"]
  };

  return (
    <div className="site-root" style={brandStyles}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main><Hero /><TrustStrip /><Services /><Results /><WhyLC /><Reviews /><Process /><Estimate /><FAQ /><FinalCTA /></main>
      <Footer />
      <MobileBar />
    </div>
  );
}
