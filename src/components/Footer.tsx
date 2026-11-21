import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from 'lucide-react';
import { FOOTER_DATA, LOGO_SRC } from '../data/content';

export function Footer() {
  return (
    <footer className="mx-4 sm:mx-6 lg:mx-[60px] mb-6 rounded-[40px] bg-[#0A2A52] text-white px-6 sm:px-10 lg:px-14 pt-16 pb-[88px] lg:pb-8">
      {/* Row 1: White logo + 4 social icons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <img
          src={LOGO_SRC}
          alt="PropfyndX"
          width={213}
          height={69}
          loading="lazy"
          decoding="async"
          className="h-10 w-auto max-w-none object-contain"
          style={{ filter: 'brightness(0) invert(1)' }}
        />

        <div className="flex items-center gap-3">
          {[
            { name: 'Facebook', Icon: Facebook },
            { name: 'Instagram', Icon: Instagram },
            { name: 'LinkedIn', Icon: Linkedin },
            { name: 'YouTube', Icon: Youtube },
          ].map(({ name, Icon }) => (
            <span
              key={name}
              aria-label={name}
              className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white shrink-0"
            >
              <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/15 my-10" />

      {/* Row 2: 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Company */}
        <div>
          <h3 className="text-[#F7B217] text-[14px] font-bold uppercase tracking-[0.08em] mb-5">
            Company
          </h3>
          <ul>
            {FOOTER_DATA.companyLinks.map((item) => (
              <li
                key={item}
                className="text-[15px] text-white/80 leading-[34px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h3 className="text-[#F7B217] text-[14px] font-bold uppercase tracking-[0.08em] mb-5">
            Contact
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#F7B217]" aria-hidden="true" />
              </span>
              <span className="text-[15px] text-white/85 break-all">
                {FOOTER_DATA.email}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#F7B217]" aria-hidden="true" />
              </span>
              <span className="text-[15px] text-white/85 whitespace-nowrap">
                {FOOTER_DATA.phone}
              </span>
            </div>
          </div>
        </div>

        {/* Column 3: Explore Properties */}
        <div>
          <h3 className="text-[#F7B217] text-[14px] font-bold uppercase tracking-[0.08em] mb-5">
            Explore Properties
          </h3>
          <div className="flex flex-wrap gap-2">
            {FOOTER_DATA.exploreChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full px-3.5 py-2 bg-white/[0.08] text-[13px] text-white/85 leading-none"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 my-10" />

      {/* Row 3: More Locations */}
      <div>
        <h3 className="text-[#F7B217] text-[14px] font-bold uppercase tracking-[0.08em] mb-5">
          More Locations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FOOTER_DATA.moreLocations.map((group) => (
            <div key={group.heading}>
              <h4 className="text-white font-semibold text-[15px] mb-3 leading-snug">
                {group.heading}
              </h4>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[14px] text-white/[0.78] leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/15 my-10" />

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 text-center md:text-left">
        <p className="text-[13px] text-white/70">{FOOTER_DATA.copyright}</p>
        <p className="text-[13px] font-bold text-[#F7B217] tracking-[0.04em] whitespace-nowrap">
          {FOOTER_DATA.poweredBy}
        </p>
      </div>
    </footer>
  );
}
