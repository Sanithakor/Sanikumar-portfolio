export function initCustomJS() {
    alert();
}




// script.js

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.05)";
    } else {
        header.style.boxShadow = "none";
    }
});





(function BlogPage() {
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Lenis smooth scroll ──────────────────────────────────────────── */
  function initLenis() {
    if (REDUCED) return null;
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    window.__lenis = lenis;
    return lenis;
  }

  /* ── Description animations ───────────────────────────────────────── */
  function initDescriptionAnimations() {
    if (REDUCED) {
      document.querySelectorAll('[data-desc]').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    
    const sectionMap = new Map();
    document.querySelectorAll('[data-desc]').forEach(el => {
      let ancestor = el.parentElement;
      while (ancestor && !['SECTION', 'FOOTER', 'ARTICLE', 'ASIDE'].includes(ancestor.tagName)) {
        ancestor = ancestor.parentElement;
      }
      const key = ancestor || document.body;
      if (!sectionMap.has(key)) sectionMap.set(key, []);
      sectionMap.get(key).push(el);
    });

    gsap.set('[data-desc]', { opacity: 0, y: 24, force3D: true });

    sectionMap.forEach((els, section) => {
      const triggerEl = els[0];
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: 'power3.out',
        stagger: 0.10,
        force3D: true,
        scrollTrigger: {
          trigger: triggerEl,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
          scroller: window,
        },
      });
    });

    if (window.__lenis) {
      window.__lenis.on('scroll', ScrollTrigger.update);
    }
  }

  /* ── Custom cursor ─────────────────────────────────────────────── */
  function initCursor() {
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    const isFine = window.matchMedia('(pointer: fine)').matches;
    if (!isFine || REDUCED) {
      dot.style.display = 'none';
      ring.style.display = 'none';
      document.body.style.cursor = 'auto';
      return;
    }

    let mx = 0, my = 0, rx = 0, ry = 0, started = false;

    window.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
      if (!started) { rx = mx; ry = my; started = true; }
      dot.style.opacity = '1'; ring.style.opacity = '1';
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      dot.style.opacity = '0'; ring.style.opacity = '0';
    });

    gsap.ticker.add(() => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
    });

    const hoverEls = document.querySelectorAll('a, button, input, textarea, select, .card-hover');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
    });
  }

  /* ── Category filter ───────────────────────────────────────────── */
  function initCategoryFilter() {
    document.querySelectorAll('#category-filters .filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#category-filters .filter-pill').forEach(b => {
          b.classList.remove('active'); b.classList.add('text-muted');
        });
        btn.classList.add('active'); btn.classList.remove('text-muted');
        const f = btn.dataset.cat;
        document.querySelectorAll('.blog-post').forEach(post => {
          const cat = post.dataset.category || '';
          post.style.display = (f === 'all' || cat === f) ? '' : 'none';
        });
      });
    });
  }

  /* ── Search ─────────────────────────────────────────────────── */
  function initSearch() {
    const searchInput = document.getElementById('blog-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', e => {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll('.blog-post').forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();
        const desc = post.querySelector('[data-desc]').textContent.toLowerCase();
        const match = title.includes(query) || desc.includes(query);
        post.style.display = match ? '' : 'none';
      });
    });
  }

  /* ── Boot ───────────────────────────────────────────────────── */
  function boot() {
    initLenis();
    initDescriptionAnimations();
    initCursor();
    initCategoryFilter();
    initSearch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
