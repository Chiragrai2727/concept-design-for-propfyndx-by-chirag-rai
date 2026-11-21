import { Building2, MapPin } from 'lucide-react';
import { MUMBAI_PROPERTIES } from '../data/content';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

export function FeaturedMumbai() {
  return (
    <section className="bg-[#F5F9FE] pt-14 md:pt-20 pb-10 md:pb-12">
      <Container>
        <SectionHeading>Featured Properties in Mumbai</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MUMBAI_PROPERTIES.map((property) => (
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
                  <Building2 className="w-12 h-12 text-[#0A5BB5]" aria-hidden="true" />
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

                <div className="flex items-start justify-between gap-3 mt-4">
                  <span className="text-[14px] font-semibold text-[#0A2A52] pt-0.5">
                    {property.config}
                  </span>
                  <div className="text-right shrink-0">
                    <div className="text-[20px] font-bold text-[#0A5BB5] leading-tight">
                      {property.price}
                    </div>
                    <div className="text-[12px] text-[#5B6B82] mt-0.5">onwards</div>
                  </div>
                </div>

                <div className="border-t border-[#E1ECF9] my-3.5" />

                <p className="text-[12.5px] text-[#5B6B82]">
                  RERA Registration No: {property.rera}
                </p>

                <div className="grid grid-cols-2 gap-2.5 mt-4 pt-1">
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
