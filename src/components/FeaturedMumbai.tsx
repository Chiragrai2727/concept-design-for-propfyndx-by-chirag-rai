import { PROPERTIES } from '../data/content';
import { Container } from './Container';
import { PropertyCard } from './PropertyCard';
import { SectionHeading } from './SectionHeading';

const MUMBAI_SLUGS = new Set([
  'aaradhya-avaan',
  'truspace-prima-altiora',
  'alora',
]);

export function FeaturedMumbai() {
  const mumbaiListings = PROPERTIES.filter((p) => MUMBAI_SLUGS.has(p.slug));

  return (
    <section className="bg-[#F5F9FE] pt-14 md:pt-20 pb-10 md:pb-12">
      <Container>
        <SectionHeading>Featured Properties in Mumbai</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mumbaiListings.map((property) => (
            <PropertyCard key={property.slug} property={property} />
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
