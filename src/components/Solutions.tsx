import {
  Briefcase,
  Building2,
  Landmark,
  Map,
  Megaphone,
  Warehouse,
} from 'lucide-react';
import { SOLUTIONS, type SolutionItem } from '../data/content';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

function SolutionIcon({ icon }: { icon: SolutionItem['icon'] }) {
  const iconClass = 'w-9 h-9 text-[#0A5BB5]';
  switch (icon) {
    case 'building':
      return <Building2 className={iconClass} aria-hidden="true" />;
    case 'briefcase':
      return <Briefcase className={iconClass} aria-hidden="true" />;
    case 'map':
      return <Map className={iconClass} aria-hidden="true" />;
    case 'warehouse':
      return <Warehouse className={iconClass} aria-hidden="true" />;
    case 'landmark':
      return <Landmark className={iconClass} aria-hidden="true" />;
    case 'megaphone':
      return <Megaphone className={iconClass} aria-hidden="true" />;
  }
}

export function Solutions() {
  return (
    <section className="bg-[#F5F9FE] py-14 md:py-20">
      <Container>
        <SectionHeading>Cutting-Edge Proptech Solutions</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-[28px] border border-[#E1ECF9] p-7 flex flex-col items-start"
            >
              <div className="w-[72px] h-[72px] rounded-2xl bg-[#F5F9FE] flex items-center justify-center shrink-0">
                <SolutionIcon icon={item.icon} />
              </div>

              <h3 className="text-[19px] font-semibold text-[#0A2A52] mt-5 leading-snug">
                {item.title}
              </h3>

              {item.subtitle && (
                <p className="text-[13.5px] font-medium text-[#5B6B82] mt-1">
                  {item.subtitle}
                </p>
              )}

              <ul className="mt-4 space-y-2.5 flex-1">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-[14px] text-[#5B6B82] leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#0A5BB5] mt-[8px] shrink-0"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <span className="mt-6 h-10 px-6 rounded-full bg-[#0A5BB5] text-white text-[13px] font-bold tracking-[0.04em] inline-flex items-center justify-center whitespace-nowrap">
                EXPLORE
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
