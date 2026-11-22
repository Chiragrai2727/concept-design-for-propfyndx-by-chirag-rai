import { Heart, MapPin } from 'lucide-react';
import type { PropertyDetail } from '../data/content';

interface PropertyCardProps {
  property: PropertyDetail;
  showFavorite?: boolean;
}

export function PropertyCard({ property, showFavorite = false }: PropertyCardProps) {
  const detailHref = `#/property/${property.slug}`;
  const isPriceOnRequest = property.cardPrice === 'Price On Request';

  return (
    <article className="bg-white rounded-[28px] border border-[#E1ECF9] p-3 flex flex-col">
      <div className="relative">
        <a href={detailHref} className="block cursor-pointer">
          <img
            src={property.photo}
            alt={property.photoAlt}
            width={1200}
            height={896}
            loading="lazy"
            decoding="async"
            className="w-full h-[320px] rounded-[20px] object-cover"
          />
        </a>

        {showFavorite && (
          <span
            aria-label="Favorite property"
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(10,42,82,0.14)] cursor-default"
          >
            <Heart className="w-[18px] h-[18px] text-[#0A5BB5]" aria-hidden="true" />
          </span>
        )}
      </div>

      <div className="px-3 pt-4 pb-2 flex-1 flex flex-col">
        <h3 className="text-[20px] font-semibold text-[#0A2A52] leading-snug">
          <a
            href={detailHref}
            className="cursor-pointer hover:text-[#0A5BB5] transition-colors"
          >
            {property.name}
          </a>
        </h3>

        <div className="flex items-center gap-1.5 text-[14px] text-[#5B6B82] mt-1.5">
          <MapPin className="w-4 h-4 text-[#0A5BB5] shrink-0" aria-hidden="true" />
          <span>{property.location}</span>
        </div>

        <div className="flex items-start justify-between gap-3 mt-4">
          <span className="text-[14px] font-semibold text-[#0A2A52] pt-0.5">
            {property.cardConfig}
          </span>
          {isPriceOnRequest ? (
            <span className="text-[15px] font-bold text-[#0A5BB5] text-right shrink-0">
              Price On Request
            </span>
          ) : (
            <div className="text-right shrink-0">
              <div className="text-[20px] font-bold text-[#0A5BB5] leading-tight">
                {property.cardPrice}
              </div>
              <div className="text-[12px] text-[#5B6B82] mt-0.5">onwards</div>
            </div>
          )}
        </div>

        <div className="border-t border-[#E1ECF9] my-3.5" />

        {property.rera && (
          <p className="text-[12.5px] text-[#5B6B82]">
            RERA Registration No: {property.rera}
          </p>
        )}

        <div
          className={`grid grid-cols-2 gap-2.5 mt-auto ${
            property.rera ? 'pt-4' : 'pt-1'
          }`}
        >
          <a
            href={detailHref}
            className="h-10 rounded-full bg-[#0A5BB5] text-white text-[14px] font-semibold flex items-center justify-center whitespace-nowrap cursor-pointer"
          >
            Call Back
          </a>
          <a
            href={detailHref}
            className="h-10 rounded-full bg-[#F7B217] text-[#0A2A52] text-[14px] font-semibold flex items-center justify-center whitespace-nowrap cursor-pointer"
          >
            Book Visit
          </a>
        </div>
      </div>
    </article>
  );
}
