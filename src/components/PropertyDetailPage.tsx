import {
  CheckCircle2,
  Filter,
  Heart,
  MapPin,
  Menu,
  Phone,
} from 'lucide-react';
import {
  HERO_DATA,
  LOGO_SRC,
  PROPERTIES,
  type PropertyDetail,
} from '../data/content';
import { Footer } from './Footer';
import { PropertyCard } from './PropertyCard';

interface PropertyDetailPageProps {
  property: PropertyDetail;
}

export function PropertyDetailPage({ property }: PropertyDetailPageProps) {
  const tiles: Array<{ label: string; value: string; isPrice?: boolean }> = [];
  if (property.type) {
    tiles.push({ label: 'Type', value: property.type });
  }
  tiles.push({ label: 'Configurations', value: property.configurations });
  tiles.push({ label: 'Price', value: property.price, isPrice: true });
  if (property.rera) {
    tiles.push({ label: 'RERA No', value: property.rera });
  }

  const currentIndex = PROPERTIES.findIndex((p) => p.slug === property.slug);
  const moreProperties = [1, 2, 3]
    .map((offset) => PROPERTIES[(currentIndex + offset) % PROPERTIES.length])
    .filter((item) => item && item.slug !== property.slug);

  return (
    <div className="min-h-screen bg-[#F5F9FE] relative pt-7 pb-6 overflow-x-hidden flex flex-col">
      {/* Small blue rounded tab fixed to the left edge with white funnel icon */}
      <div
        aria-label="Filter"
        className="absolute left-0 top-[108px] sm:top-[128px] lg:top-8 z-20 w-10 sm:w-11 h-12 rounded-r-2xl bg-[#075BB8] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(10,42,82,0.18)]"
      >
        <Filter className="w-5 h-5 text-white" aria-hidden="true" />
      </div>

      {/* Container max-width 1200px, 24px page margins on mobile */}
      <main className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 flex-1">
        {/* Same floating navbar as home page, with no active menu item */}
        <header
          className="w-full h-14 sm:h-[72px] bg-white rounded-full pl-5 pr-1 sm:pl-7 sm:pr-4 grid grid-cols-[auto_1fr_auto] items-center gap-3 min-[1280px]:gap-4 min-[1440px]:gap-5"
          style={{ boxShadow: '0 12px 40px rgba(10,42,82,.18)' }}
        >
          <a
            href="#/"
            aria-label="Go to home page"
            className="flex items-center shrink-0 cursor-pointer"
          >
            <img
              src={LOGO_SRC}
              alt="PropfyndX"
              width={213}
              height={69}
              loading="eager"
              decoding="async"
              className="h-8 sm:h-9 lg:h-10 w-auto max-w-none object-contain"
            />
          </a>

          <nav
            aria-label="Property page navigation"
            className="hidden min-[1180px]:flex items-center justify-center gap-0.5 min-[1280px]:gap-1 min-w-0"
          >
            {HERO_DATA.navLinks.map((label) =>
              label === 'Home' ? (
                <a
                  key={label}
                  href="#/"
                  className="text-[#0A2A52] hover:text-[#0A5BB5] transition-colors h-10 min-[1360px]:h-11 px-1.5 min-[1280px]:px-2 text-[11px] min-[1280px]:text-[12px] min-[1440px]:text-[12.5px] font-medium whitespace-nowrap shrink-0 flex items-center cursor-pointer"
                >
                  {label}
                </a>
              ) : (
                <span
                  key={label}
                  className="text-[#0A2A52] h-10 min-[1360px]:h-11 px-1.5 min-[1280px]:px-2 text-[11px] min-[1280px]:text-[12px] min-[1440px]:text-[12.5px] font-medium whitespace-nowrap shrink-0 flex items-center"
                >
                  {label}
                </span>
              ),
            )}
          </nav>

          <div className="min-[1180px]:hidden" aria-hidden="true" />

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 bg-[#F5F9FE] rounded-full h-12 px-3.5 min-[1440px]:px-5 shrink-0">
              <Phone className="w-4 h-4 text-[#F7B217] shrink-0" aria-hidden="true" />
              <span className="text-[13px] min-[1440px]:text-[14.5px] font-semibold text-[#0A5BB5] whitespace-nowrap">
                {HERO_DATA.phone}
              </span>
            </div>

            <div
              aria-label="Shortlisted properties"
              className="w-12 h-12 rounded-full bg-[#0A5BB5] text-white flex items-center justify-center shrink-0"
            >
              <Heart className="w-5 h-5 fill-white text-white" aria-hidden="true" />
            </div>

            <div
              aria-label="Menu"
              className="flex min-[1180px]:hidden w-12 h-12 rounded-full bg-[#F5F9FE] text-[#0A2A52] items-center justify-center shrink-0"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
        </header>

        {/* Two columns, top aligned, 80px below navbar on desktop */}
        <div className="mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-[minmax(0,600px)_minmax(0,540px)] lg:justify-between gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN (600x640 desktop, 320px height mobile) */}
          <div className="w-full max-w-[600px] mx-auto lg:mx-0">
            <img
              src={property.photo}
              alt={property.photoAlt}
              width={1200}
              height={896}
              loading="eager"
              fetchPriority="high"
              className="w-full h-[320px] sm:h-[480px] lg:h-[640px] rounded-[32px] object-cover"
            />
          </div>

          {/* RIGHT COLUMN (540px) */}
          <div className="w-full max-w-[540px] mx-auto lg:mx-0">
            <h1 className="text-[32px] sm:text-[42px] font-semibold text-[#0A2A52] leading-tight">
              {property.name}
            </h1>

            {property.developer && (
              <p className="text-[18px] font-medium text-[#075BB8] mt-1.5">
                {property.developer}
              </p>
            )}

            <div className="flex items-center gap-2 text-[16px] text-[#4A6280] mt-3">
              <MapPin className="w-4 h-4 text-[#075BB8] shrink-0" aria-hidden="true" />
              <span>{property.location}</span>
            </div>

            <div className="border-t border-[#E1ECF9] my-6" />

            {/* Dynamic spec tiles (2x2 when 4, stretches last tile when odd) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tiles.map((spec, idx) => {
                const spanFull = tiles.length % 2 === 1 && idx === tiles.length - 1;
                const isPriceText = spec.value === 'Price On Request';
                return (
                  <div
                    key={spec.label}
                    className={`bg-white rounded-[20px] border border-[#E1ECF9] p-5 ${
                      spanFull ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="text-[12px] font-bold text-[#4A6280]">
                      {spec.label}
                    </div>
                    <div
                      className={
                        spec.isPrice
                          ? `${
                              isPriceText ? 'text-[20px] sm:text-[22px]' : 'text-[24px]'
                            } font-bold text-[#075BB8] mt-1.5 leading-tight`
                          : 'text-[16px] font-semibold text-[#0A2A52] mt-1.5 leading-snug'
                      }
                    >
                      {spec.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Amenities (rendered only when data exists) */}
            {property.amenities && property.amenities.length > 0 && (
              <>
                <h2 className="text-[20px] font-semibold text-[#0A2A52] mt-7 mb-4">
                  Amenities
                </h2>

                <div className="flex flex-wrap gap-2.5">
                  {property.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="h-10 rounded-[20px] bg-white border border-[#E1ECF9] px-3.5 inline-flex items-center gap-2"
                    >
                      <CheckCircle2
                        className="w-[18px] h-[18px] text-[#075BB8] shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[14px] font-medium text-[#0A2A52] whitespace-nowrap">
                        {amenity}
                      </span>
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Enquire Now pill button (static) */}
            <div className="mt-7">
              <span className="w-[200px] h-12 rounded-full bg-[#075BB8] text-white text-[15px] font-bold inline-flex items-center justify-center whitespace-nowrap">
                Enquire Now
              </span>
            </div>
          </div>
        </div>

        {/* LOCATION SECTION */}
        <div className="mt-16 lg:mt-20">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0A2A52] text-center mb-8">
            Location
          </h2>

          {/* Google Maps embed card (pointer-events-none in static design mode) */}
          <div className="w-full max-w-[1200px] h-[280px] sm:h-[420px] rounded-[32px] overflow-hidden border border-[#E1ECF9] bg-[#E3EFFC]">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                property.mapQuery,
              )}&z=15&output=embed`}
              title={`Map: ${property.name}`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 pointer-events-none"
            />
          </div>
        </div>

        {/* MORE PROPERTIES ROW (no heading, 100px space above and below) */}
        <div
          aria-label="More properties"
          className="mt-[100px] mb-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {moreProperties.map((item) => (
            <PropertyCard key={item.slug} property={item} showFavorite />
          ))}
        </div>
      </main>

      {/* Same footer as home page */}
      <Footer />
    </div>
  );
}
