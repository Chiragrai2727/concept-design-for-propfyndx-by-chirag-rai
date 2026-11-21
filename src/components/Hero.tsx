import {
  Building2,
  ChevronDown,
  Heart,
  IndianRupee,
  Menu,
  Phone,
  Search,
} from 'lucide-react';
import { HERO_DATA, LOGO_SRC } from '../data/content';

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="mx-4 sm:mx-6 lg:mx-[60px] mt-6 rounded-[40px] overflow-hidden relative min-h-[min(calc(100vh-48px),820px)] flex flex-col bg-[#0A2A52]"
    >
      {/* Hero skyscraper background photo */}
      <img
        src={HERO_DATA.heroImageUrl}
        alt={HERO_DATA.heroImageAlt}
        width={1376}
        height={768}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Navy gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(10,42,82,0.85) 0%, rgba(10,42,82,0.62) 55%, rgba(10,42,82,0.35) 100%)',
        }}
      />

      {/* Single inner wrapper ensuring identical left & right alignment */}
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 pt-7 pb-10 flex-1 flex flex-col justify-between gap-8">
        {/* SINGLE FLOATING WHITE NAVBAR */}
        <header
          className="w-full h-14 sm:h-[72px] bg-white rounded-full pl-5 pr-1 sm:pl-7 sm:pr-4 grid grid-cols-[auto_1fr_auto] items-center gap-3 min-[1280px]:gap-4 min-[1440px]:gap-5 min-[1560px]:gap-6"
          style={{ boxShadow: '0 12px 40px rgba(10,42,82,.18)' }}
        >
          {/* Left: PropfyndX logo */}
          <div className="flex items-center shrink-0">
            <img
              src={LOGO_SRC}
              alt="PropfyndX"
              width={213}
              height={69}
              loading="eager"
              decoding="async"
              className="h-8 sm:h-9 lg:h-10 w-auto max-w-none object-contain"
            />
          </div>

          {/* Centre: Nav links (>= 1180px) */}
          <nav
            aria-label="Primary navigation"
            className="hidden min-[1180px]:flex items-center justify-center gap-0.5 min-[1280px]:gap-1 min-w-0"
          >
            {HERO_DATA.navLinks.map((label) => {
              const isActive = label === 'Home';
              return isActive ? (
                <span
                  key={label}
                  className="bg-[#0A5BB5] text-white rounded-full h-10 min-[1360px]:h-11 px-2.5 min-[1280px]:px-3 min-[1440px]:px-4 min-[1560px]:px-5 flex items-center text-[11px] min-[1280px]:text-[12px] min-[1440px]:text-[13.5px] min-[1560px]:text-[15px] font-medium whitespace-nowrap shrink-0"
                >
                  {label}
                </span>
              ) : (
                <span
                  key={label}
                  className="text-[#0A2A52] h-10 min-[1360px]:h-11 px-1.5 min-[1280px]:px-2 min-[1440px]:px-2.5 min-[1560px]:px-4 flex items-center text-[11px] min-[1280px]:text-[12px] min-[1440px]:text-[13.5px] min-[1560px]:text-[15px] font-medium whitespace-nowrap shrink-0"
                >
                  {label}
                </span>
              );
            })}
          </nav>

          {/* Spacer when nav links are hidden (< 1180px) */}
          <div className="min-[1180px]:hidden" aria-hidden="true" />

          {/* Right: Phone pill + Filled heart circle + Mobile hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone pill (hidden < 640px) */}
            <div className="hidden sm:flex items-center gap-2 bg-[#F5F9FE] rounded-full h-12 px-3.5 min-[1440px]:px-5 shrink-0">
              <Phone className="w-4 h-4 text-[#F7B217] shrink-0" aria-hidden="true" />
              <span className="text-[13px] min-[1440px]:text-[14.5px] min-[1560px]:text-[15px] font-semibold text-[#0A5BB5] whitespace-nowrap">
                {HERO_DATA.phone}
              </span>
            </div>

            {/* 48px blue circle with white FILLED heart icon */}
            <div
              aria-label="Shortlisted properties"
              className="w-12 h-12 rounded-full bg-[#0A5BB5] text-white flex items-center justify-center shrink-0"
            >
              <Heart className="w-5 h-5 fill-white text-white" aria-hidden="true" />
            </div>

            {/* 48px hamburger circle (visible < 1180px) */}
            <div
              aria-label="Menu"
              className="flex min-[1180px]:hidden w-12 h-12 rounded-full bg-[#F5F9FE] text-[#0A2A52] items-center justify-center shrink-0"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
        </header>

        {/* HEADLINE BLOCK */}
        <div className="my-auto max-w-[760px] text-left">
          <div className="inline-flex items-center gap-2.5 bg-[#0A5BB5] rounded-full h-10 px-5">
            <span className="text-[#F7B217] text-[20px] font-bold leading-none">
              {HERO_DATA.badgePercent}
            </span>
            <span className="text-white text-[13px] font-bold uppercase tracking-[0.08em] leading-none">
              {HERO_DATA.badgeText}
            </span>
          </div>

          <h1
            className="mt-6 font-semibold text-white leading-[1.12] tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(36px, 4.6vw, 64px)',
              textShadow: '0 2px 24px rgba(10,42,82,.35)',
            }}
          >
            <span className="text-[#F7B217]">{HERO_DATA.headlineHighlight}</span>{' '}
            {HERO_DATA.headlineRest}
          </h1>
        </div>

        {/* SEARCH BAR */}
        <div
          className="w-full bg-white rounded-[24px] p-3"
          style={{ boxShadow: '0 20px 60px rgba(10,42,82,.25)' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_1fr_1fr_auto] gap-2 items-stretch">
            {HERO_DATA.searchFields.map((field) => (
              <div
                key={field.label}
                className="h-16 rounded-2xl bg-[#F5F9FE] border border-[#E1ECF9] px-4 flex items-center justify-between gap-3 min-w-0"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-[#E1ECF9] text-[#0A5BB5] flex items-center justify-center shrink-0">
                    {field.icon === 'search' && <Search className="w-4 h-4" aria-hidden="true" />}
                    {field.icon === 'building' && (
                      <Building2 className="w-4 h-4" aria-hidden="true" />
                    )}
                    {field.icon === 'rupee' && (
                      <IndianRupee className="w-4 h-4" aria-hidden="true" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#5B6B82] leading-tight">
                      {field.label}
                    </div>
                    <div className="text-[15px] font-medium text-[#0A2A52] truncate leading-tight mt-0.5">
                      {field.value}
                    </div>
                  </div>
                </div>
                {field.hasChevron && (
                  <ChevronDown className="w-4 h-4 text-[#5B6B82] shrink-0" aria-hidden="true" />
                )}
              </div>
            ))}

            <div className="bg-[#F7B217] text-[#0A2A52] h-16 rounded-2xl px-9 flex items-center justify-center gap-2.5 text-[15px] font-bold whitespace-nowrap shrink-0 sm:col-span-2 lg:col-span-1">
              <Search className="w-[18px] h-[18px] shrink-0" aria-hidden="true" />
              <span>{HERO_DATA.searchButton}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
