import { Home, MapPin } from 'lucide-react';
import { DUBAI_PROPERTIES } from '../data/content';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

export function FeaturedDubai() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading>Featured Properties in Dubai</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DUBAI_PROPERTIES.map((property) => (
            <article
              key={property.id}
              className="bg-white rounded-[28px] border border-[#E1ECF9] p-3 flex flex-col"
            >
              {property.imageUrl ? (
                <img
                  src={property.imageUrl}
                  alt={property.imageAlt}
                  width={1200}
                  height={896}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[320px] rounded-[20px] object-cover"
                />
              ) : (
                <div
                  role="img"
                  aria-label={property.imageAlt}
                  className="w-full h-[320px] rounded-[20px] bg-[#F5F9FE] flex items-center justify-center"
                >
                  <Home className="w-12 h-12 text-[#0A5BB5]" aria-hidden="true" />
                </div>
              )}

              <div className="px-3 pt-4 pb-2 flex-1 flex flex-col">
                <h3 className="text-[20px] font-semibold text-[#0A2A52] leading-snug">
                  {property.name}
                </h3>

                <div className="flex items-center gap-1.5 text-[14px] text-[#5B6B82] mt-1.5">
                  <MapPin className="w-4 h-4 text-[#0A5BB5] shrink-0" aria-hidden="true" />
                  <span>{property.location}</span>
                </div>

                <div className="flex items-center justify-between gap-3 mt-4">
                  <span className="text-[14px] font-semibold text-[#0A2A52]">
                    {property.config}
                  </span>
                  <span className="text-[15px] font-semibold text-[#0A5BB5] text-right">
                    Price On Request
                  </span>
                </div>

                <div className="border-t border-[#E1ECF9] my-3.5" />

                <div className="grid grid-cols-2 gap-2.5 mt-auto pt-1">
                  <span className="h-10 rounded-full bg-[#0A5BB5] text-white text-[14px] font-semibold flex items-center justify-center whitespace-nowrap">
                    Call Back
                  </span>
                  <span className="h-10 rounded-full bg-[#F7B217] text-[#0A2A52] text-[14px] font-semibold flex items-center justify-center whitespace-nowrap">
                    Book Visit
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <span className="h-[52px] px-8 rounded-full border-2 border-[#0A5BB5] text-[#0A5BB5] text-[15px] font-semibold inline-flex items-center justify-center whitespace-nowrap">
            View All Properties
          </span>
        </div>
      </Container>
    </section>
  );
}
