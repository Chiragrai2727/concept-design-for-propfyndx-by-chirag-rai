import { PROPERTIES } from '../data/content';
import { Container } from './Container';
import { PropertyCard } from './PropertyCard';
import { SectionHeading } from './SectionHeading';

const DUBAI_SLUGS = new Set([
  'karl-lagerfeld-villas',
  'standalone-villa',
  'luxury-villa',
]);

export function FeaturedDubai() {
  const dubaiListings = PROPERTIES.filter((p) => DUBAI_SLUGS.has(p.slug));

  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <SectionHeading>Featured Properties in Dubai</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dubaiListings.map((property) => (
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
