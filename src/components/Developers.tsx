import { DEVELOPERS } from '../data/content';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

const GROUP_FORWARD = [...DEVELOPERS, ...DEVELOPERS];
const TRACK_FORWARD = [...GROUP_FORWARD, ...GROUP_FORWARD];

const GROUP_REVERSE = [...[...DEVELOPERS].reverse(), ...[...DEVELOPERS].reverse()];
const TRACK_REVERSE = [...GROUP_REVERSE, ...GROUP_REVERSE];

function DeveloperTile({ name, hidden }: { name: string; hidden: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="w-[240px] h-[128px] shrink-0 bg-white rounded-[24px] border border-[#E1ECF9] px-4 flex items-center justify-center text-center"
      style={{ boxShadow: '0 8px 24px rgba(10,42,82,.05)' }}
    >
      <span className="text-[16px] sm:text-[18px] font-semibold text-[#5B6B82] whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function Developers() {
  return (
    <section className="bg-[#F5F9FE] py-14 md:py-20 overflow-x-hidden">
      <Container>
        <SectionHeading>Featured Developers</SectionHeading>
      </Container>

      <div
        className="w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)',
        }}
      >
        <div className="flex w-max gap-8 pr-8 animate-developers-marquee">
          {TRACK_FORWARD.map((developer, index) => (
            <DeveloperTile
              key={`fwd-${developer}-${index}`}
              name={developer}
              hidden={index >= DEVELOPERS.length}
            />
          ))}
        </div>

        <div className="flex w-max gap-8 pr-8 mt-6 animate-developers-marquee-reverse">
          {TRACK_REVERSE.map((developer, index) => (
            <DeveloperTile
              key={`rev-${developer}-${index}`}
              name={developer}
              hidden={index >= DEVELOPERS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
