import { Building2 } from 'lucide-react';
import { TOP_CITIES } from '../data/content';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

export function Cities() {
  return (
    <section className="bg-[#F5F9FE] pt-8 md:pt-10 pb-14 md:pb-20">
      <Container>
        <SectionHeading>New Project Launches Top Cities</SectionHeading>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TOP_CITIES.map((city) => (
            <div
              key={city}
              className="h-[104px] bg-white rounded-[32px] border border-[#E1ECF9] px-4 sm:px-6 flex items-center gap-3 sm:gap-4"
            >
              <Building2 className="w-7 h-7 text-[#0A5BB5] shrink-0" aria-hidden="true" />
              <span className="text-[16px] sm:text-[20px] font-semibold text-[#0A5BB5] leading-tight">
                {city}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
