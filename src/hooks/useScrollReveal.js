import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            // Unobserve after animating in — only plays once
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,      // trigger when 12% of element is visible
        rootMargin: '0px 0px -40px 0px', // slight offset so it triggers a bit before edge
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}


// ─── Add this to your index.css ────────────────────────────────────────────
/*

  =============================================
  SCROLL REVEAL — paste into your index.css
  =============================================

  .reveal,
  .reveal-left,
  .reveal-right,
  .reveal-scale {
    opacity: 0;
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  .reveal          { transform: translateY(28px); }
  .reveal-left     { transform: translateX(-32px); }
  .reveal-right    { transform: translateX(32px); }
  .reveal-scale    { transform: scale(0.96); }

  .reveal-visible {
    opacity: 1 !important;
    transform: none !important;
  }

  Stagger children with delay utilities:
  .reveal-delay-1  { transition-delay: 0.1s; }
  .reveal-delay-2  { transition-delay: 0.2s; }
  .reveal-delay-3  { transition-delay: 0.3s; }
  .reveal-delay-4  { transition-delay: 0.4s; }
  .reveal-delay-5  { transition-delay: 0.5s; }

*/