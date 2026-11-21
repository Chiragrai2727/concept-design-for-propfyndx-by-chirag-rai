import {
  WHY_INVEST_INTRO,
  WHY_INVEST_LEFT,
  WHY_INVEST_RIGHT,
  type WhyInvestPoint,
} from '../data/content';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

function PointBlock({ point }: { point: WhyInvestPoint }) {
  return (
    <div className="flex items-start gap-3.5 text-left">
      <span
        aria-hidden="true"
        className="w-3 h-3 rounded-full bg-[#0A5BB5] mt-[6px] shrink-0"
      />
      <div>
        <h3 className="text-[18px] font-semibold text-[#0A2A52] leading-snug">
          {point.title}
        </h3>
        <p className="text-[14px] text-[#5B6B82] leading-relaxed mt-2 text-left">
          {point.description}
        </p>
      </div>
    </div>
  );
}

export function WhyInvest() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading className="!mb-5">
          Why Invest In Property On PropFyndX?
        </SectionHeading>

        <p className="text-[16px] text-[#5B6B82] text-center max-w-[800px] mx-auto mb-16 leading-relaxed">
          {WHY_INVEST_INTRO}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px_1fr] gap-10 lg:gap-12 items-center">
          {/* Left column points (2nd on mobile/tablet, 1st on desktop) */}
          <div className="order-2 lg:order-1 space-y-10">
            {WHY_INVEST_LEFT.map((point) => (
              <PointBlock key={point.id} point={point} />
            ))}
          </div>

          {/* Centred CSS phone frame (1st on mobile/tablet, 2nd on desktop) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div
              aria-hidden="true"
              className="w-[280px] h-[540px] bg-[#0A2A52] rounded-[40px] p-3 flex flex-col relative shadow-[0_24px_60px_rgba(10,42,82,0.18)]"
            >
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[112px] h-6 bg-[#0A2A52] rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-10 h-1.5 rounded-full bg-white/20" />
              </div>

              {/* Inner screen */}
              <div className="flex-1 bg-[#F5F9FE] rounded-[30px] p-3 pt-10 flex flex-col gap-3 overflow-hidden">
                {[0, 1, 2].map((idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-white rounded-2xl border border-[#E1ECF9] p-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="h-2.5 w-3/4 rounded-full bg-[#CBD5E1]" />
                      <div className="h-2 w-1/2 rounded-full bg-[#E1ECF9]" />
                      <div className="h-2 w-2/3 rounded-full bg-[#E1ECF9]" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="h-7 rounded-full bg-[#0A5BB5]" />
                      <div className="h-7 rounded-full bg-[#F7B217]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column points (3rd on mobile/tablet and desktop) */}
          <div className="order-3 lg:order-3 space-y-10">
            {WHY_INVEST_RIGHT.map((point) => (
              <PointBlock key={point.id} point={point} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
