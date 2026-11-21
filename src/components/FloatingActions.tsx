import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <div
      className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 flex flex-col items-center gap-3"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* 1) Scroll-to-top button (kept mounted to prevent layout shift) */}
      <button
        type="button"
        aria-label="Scroll to top"
        aria-hidden={!showScrollTop}
        tabIndex={showScrollTop ? 0 : -1}
        onClick={handleScrollTop}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-[#E1ECF9] text-[#0A2A52] flex items-center justify-center transition-all duration-200 motion-reduce:transition-none ${
          showScrollTop
            ? 'opacity-100 translate-y-0 cursor-pointer hover:bg-[#F5F9FE] hover:-translate-y-0.5'
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
        style={{ boxShadow: '0 12px 32px rgba(10,42,82,.22)' }}
      >
        <ArrowUp className="w-6 h-6" strokeWidth={2.25} aria-hidden="true" />
      </button>

      {/* 2) Chat button (visual only, anchored at bottom corner) */}
      <div
        role="img"
        aria-label="Chat"
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0A5BB5] text-white flex items-center justify-center cursor-default"
        style={{ boxShadow: '0 12px 32px rgba(10,42,82,.22)' }}
      >
        <MessageCircle
          className="w-6 h-6 text-white"
          fill="rgba(255,255,255,0.15)"
          aria-hidden="true"
        />
        <span
          aria-hidden="true"
          className="absolute top-0 right-0 w-3 h-3 rounded-full bg-[#F7B217] ring-2 ring-white"
        />
      </div>
    </div>
  );
}
