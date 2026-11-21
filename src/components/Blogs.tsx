import { BedDouble, Building, Building2, Trees } from 'lucide-react';
import { BLOGS, type BlogItem } from '../data/content';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

function BlogFallbackIcon({ icon }: { icon: BlogItem['fallbackIcon'] }) {
  const cls = 'w-10 h-10 text-[#0A5BB5]';
  switch (icon) {
    case 'bed':
      return <BedDouble className={cls} aria-hidden="true" />;
    case 'skyline':
      return <Building2 className={cls} aria-hidden="true" />;
    case 'marina':
      return <Building className={cls} aria-hidden="true" />;
    case 'villa':
      return <Trees className={cls} aria-hidden="true" />;
  }
}

export function Blogs() {
  return (
    <section className="bg-[#F5F9FE] py-14 md:py-20">
      <Container>
        <SectionHeading>Insights and Resources</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOGS.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-[28px] border border-[#E1ECF9] p-[10px] flex flex-col"
            >
              {blog.imageUrl ? (
                <img
                  src={blog.imageUrl}
                  alt={blog.imageAlt}
                  width={1200}
                  height={805}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[174px] rounded-[20px] object-cover"
                />
              ) : (
                <div
                  role="img"
                  aria-label={blog.imageAlt}
                  className="w-full h-[174px] rounded-[20px] bg-[#F5F9FE] flex items-center justify-center"
                >
                  <BlogFallbackIcon icon={blog.fallbackIcon} />
                </div>
              )}

              <div className="p-3 pt-4 flex-1 flex flex-col">
                <span className="text-[12px] text-[#5B6B82]">{blog.date}</span>

                <h3 className="text-[16px] font-semibold text-[#0A2A52] leading-snug mt-2 line-clamp-4 flex-1">
                  {blog.title}
                </h3>

                <div className="mt-5">
                  <span className="h-9 px-5 rounded-full bg-[#0A5BB5] text-white text-[12px] font-bold tracking-[0.04em] inline-flex items-center justify-center whitespace-nowrap">
                    READ MORE
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <span className="h-[52px] px-8 rounded-full border-2 border-[#0A5BB5] text-[#0A5BB5] text-[15px] font-semibold inline-flex items-center justify-center whitespace-nowrap">
            View All Blogs
          </span>
        </div>
      </Container>
    </section>
  );
}
