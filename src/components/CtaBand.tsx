import { CTA_DATA } from '../data/content';
import { Container } from './Container';

export function CtaBand() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <div className="rounded-[40px] min-h-[520px] lg:min-h-0 lg:h-[444px] overflow-hidden relative bg-[#0A2A52] border border-white/[0.12] flex items-start lg:items-center">
          {/* Single full-bleed background photo positioned right center */}
          <img
            src={CTA_DATA.imageUrl}
            alt={CTA_DATA.imageAlt}
            width={1376}
            height={768}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-[right_center]"
          />

          {/* Mobile & tablet vertical overlay (navy top 70% fading to transparent bottom) */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, #0A2A52 0%, rgba(10,42,82,0.92) 50%, rgba(10,42,82,0.68) 70%, rgba(10,42,82,0) 100%)',
            }}
          />

          {/* Desktop horizontal overlay */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, #0A2A52 0%, rgba(10,42,82,0.92) 38%, rgba(10,42,82,0.35) 62%, rgba(10,42,82,0) 100%)',
            }}
          />

          {/* Soft 320px amber glow behind the text block */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-1/3 lg:top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(247,178,23,0.18) 0%, rgba(247,178,23,0) 70%)',
            }}
          />

          {/* Left content column */}
          <div className="relative z-10 w-full px-6 lg:px-16 pt-10 pb-12 lg:py-0">
            <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#F7B217]">
              {CTA_DATA.eyebrow}
            </p>

            <h2 className="text-[28px] sm:text-[36px] font-semibold text-white leading-tight sm:whitespace-nowrap mt-2.5">
              {CTA_DATA.heading}
            </h2>

            <p className="text-[18px] sm:text-[20px] text-white/85 mt-3 max-w-[520px]">
              {CTA_DATA.subheading}
            </p>

            <div
              className="mt-7 w-full max-w-[480px] h-16 rounded-full bg-white p-2 pl-4 sm:pl-6 flex items-center justify-between gap-2"
              style={{ boxShadow: '0 16px 40px rgba(0,0,0,.25)' }}
            >
              <input
                type="text"
                readOnly
                placeholder={CTA_DATA.placeholder}
                aria-label="Enter Your Mobile Number"
                className="w-full min-w-0 bg-transparent text-[14px] sm:text-[15px] text-[#0A2A52] placeholder:text-[#5B6B82] outline-none cursor-default"
              />
              <span className="h-12 px-5 sm:px-7 rounded-full bg-[#0A5BB5] text-white text-[14px] sm:text-[15px] font-semibold flex items-center justify-center whitespace-nowrap shrink-0">
                {CTA_DATA.buttonLabel}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
