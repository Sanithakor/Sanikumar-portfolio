import React from "react";


function hero() {
  return (
    <div>
      <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="index.html" className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-copper/10 border border-copper/30 flex items-center justify-center">
              <span className="font-mono font-extrabold text-copper text-xs">
                DC
              </span>
            </span>
            <span className="font-mono font-bold tracking-tight text-[15px]">
              Dev<span className="text-copper">Craft</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted font-medium">
            <a
              href="index.html#about"
              className="hover:text-paper transition-colors"
            >
              About
            </a>
            <a
              href="index.html#services"
              className="hover:text-paper transition-colors"
            >
              Services
            </a>
            <a
              href="index.html#portfolio"
              className="hover:text-paper transition-colors"
            >
              Work
            </a>
            <a
              href="index.html#process"
              className="hover:text-paper transition-colors"
            >
              Process
            </a>
            <a href="blog.html" className="text-copper">
              Blog
            </a>
            <a
              href="index.html#contact"
              className="hover:text-paper transition-colors"
            >
              Contact
            </a>
          </nav>
          <a
            href="index.html#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold bg-copper text-ink px-5 py-2.5 rounded-lg hover:bg-coppersoft transition-colors"
          >
            Get Free Consultation
          </a>
          <button
            className="md:hidden text-paper text-xl"
            onclick="document.getElementById('mnav').classNameList.toggle('hidden')"
          >
            ☰
          </button>
        </div>
        <div
          id="mnav"
          className="hidden md:hidden border-t border-line px-6 py-4 flex flex-col gap-3 text-sm text-muted bg-panel"
        >
          <a href="index.html#about" className="hover:text-paper">
            About
          </a>
          <a href="index.html#services" className="hover:text-paper">
            Services
          </a>
          <a href="index.html#portfolio" className="hover:text-paper">
            Work
          </a>
          <a href="index.html#process" className="hover:text-paper">
            Process
          </a>
          <a href="blog.html" className="text-copper">
            Blog
          </a>
          <a href="index.html#contact" className="hover:text-paper">
            Contact
          </a>
          <a
            href="index.html#contact"
            className="text-paper font-semibold bg-copper text-ink px-4 py-2 rounded-lg text-center mt-1"
          >
            Get Free Consultation
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
  <div className="absolute inset-0 grid-fade"></div>
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20">
    
    <nav className="mb-8">
      <ol className="flex items-center gap-2 text-xs font-mono text-muted">
        <li><a href="index.html" className="hover:text-copper transition-colors">Home</a></li>
        <li className="text-line">/</li>
        <li className="text-paper">Blog</li>
      </ol>
    </nav>
    
    <div className="max-w-3xl">
      <span className="inline-flex items-center gap-2 font-mono text-xs text-teal border border-teal/30 bg-teal/5 px-3 py-1.5 rounded-full mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"></span>
        Latest insights & tutorials
      </span>
      <h1 className="font-mono font-extrabold text-[2.8rem] leading-[1.06] sm:text-6xl tracking-tight">
        From The<br />  
        <span className="text-copper">Blog</span>
      </h1>
      <p data-desc className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
        Expert insights, tutorials, and deep dives on web development, design systems, performance optimization, and scaling digital products that matter.
      </p>
    </div>
  </div>
</section>


<section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
  <div className="lg:grid lg:grid-cols-4 lg:gap-12">
    
    
    <div className="lg:col-span-3">
      
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <div className="flex-1">
          <input type="search" id="blog-search" placeholder="Search articles..." 
            className="w-full bg-panel border border-line rounded-lg px-4 py-3 text-sm placeholder-muted/50 focus:outline-none focus:border-copper transition-colors"/>
        </div>
        <div className="flex gap-2 flex-wrap" id="category-filters">
          <button data-cat="all" className="filter-pill active border border-line rounded-full px-4 py-2 text-sm font-mono">All</button>
          <button data-cat="web-dev" className="filter-pill border border-line rounded-full px-4 py-2 text-sm font-mono text-muted">Web Dev</button>
          <button data-cat="ui-ux" className="filter-pill border border-line rounded-full px-4 py-2 text-sm font-mono text-muted">UI/UX</button>
          <button data-cat="performance" className="filter-pill border border-line rounded-full px-4 py-2 text-sm font-mono text-muted">Performance</button>
          <button data-cat="business" className="filter-pill border border-line rounded-full px-4 py-2 text-sm font-mono text-muted">Business</button>
        </div>
      </div>

      
      <div id="blog-grid" className="grid sm:grid-cols-2 gap-6 mb-12">
        
        
        <article className="blog-post card-hover border border-line bg-panel rounded-2xl overflow-hidden" data-category="web-dev">
          <a href="blog-post.html" className="block overflow-hidden aspect-[16/9] relative bg-panel2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-copper/25 via-panel2 to-panel flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-110">🚀</div>
            <span className="absolute top-4 left-4 font-mono text-xs bg-copper text-ink font-bold px-2.5 py-1 rounded-md">Web Dev</span>
          </a>
          <div className="p-6">
            <div className="flex items-center gap-3 text-xs text-muted font-mono mb-3">
              <span>Jul 1, 2026</span>
              <span className="w-1 h-1 rounded-full bg-line"></span>
              <span>8 min read</span>
            </div>
            <h3 className="font-bold text-lg leading-snug mb-3">
              <a href="blog-post.html" className="hover:text-copper transition-colors">Building Scalable React Apps with Next.js 15 App Router</a>
            </h3>
            <p data-desc className="text-sm text-muted leading-relaxed mb-5">A deep dive into modern React patterns, server components, and the new App Router architecture that makes enterprise-scale apps maintainable.</p>
            <div className="flex items-center justify-between border-t border-line pt-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-copper/10 border border-copper/20 flex items-center justify-center font-mono text-copper font-bold text-xs">AK</div>
                <span className="text-xs text-muted">Alex Kim</span>
              </div>
              <a href="blog-post.html" className="font-mono text-xs text-copper hover:text-coppersoft transition-colors">Read More →</a>
            </div>
          </div>
        </article>

        
        <article className="blog-post card-hover border border-line bg-panel rounded-2xl overflow-hidden" data-category="ui-ux">
          <a href="blog-post.html" className="block overflow-hidden aspect-[16/9] relative bg-panel2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/25 via-panel2 to-panel flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-110">🎨</div>
            <span className="absolute top-4 left-4 font-mono text-xs bg-teal text-ink font-bold px-2.5 py-1 rounded-md">UI/UX</span>
          </a>
          <div className="p-6">
            <div className="flex items-center gap-3 text-xs text-muted font-mono mb-3">
              <span>Jun 22, 2026</span>
              <span className="w-1 h-1 rounded-full bg-line"></span>
              <span>6 min read</span>
            </div>
            <h3 className="font-bold text-lg leading-snug mb-3">
              <a href="blog-post.html" className="hover:text-copper transition-colors">Design Systems That Scale: From Figma Tokens to Production</a>
            </h3>
            <p data-desc className="text-sm text-muted leading-relaxed mb-5">How to build a robust design system with Figma variables, CSS custom properties, and Tailwind that stays consistent as your team grows.</p>
            <div className="flex items-center justify-between border-t border-line pt-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center font-mono text-teal font-bold text-xs">SR</div>
                <span className="text-xs text-muted">Sara Reyes</span>
              </div>
              <a href="blog-post.html" className="font-mono text-xs text-copper hover:text-coppersoft transition-colors">Read More →</a>
            </div>
          </div>
        </article>

        
        <article className="blog-post card-hover border border-line bg-panel rounded-2xl overflow-hidden" data-category="performance">
          <a href="blog-post.html" className="block overflow-hidden aspect-[16/9] relative bg-panel2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-copper/20 via-panel2 to-teal/10 flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-110">⚡</div>
            <span className="absolute top-4 left-4 font-mono text-xs bg-copper text-ink font-bold px-2.5 py-1 rounded-md">Performance</span>
          </a>
          <div className="p-6">
            <div className="flex items-center gap-3 text-xs text-muted font-mono mb-3">
              <span>Jun 10, 2026</span>
              <span className="w-1 h-1 rounded-full bg-line"></span>
              <span>10 min read</span>
            </div>
            <h3 className="font-bold text-lg leading-snug mb-3">
              <a href="blog-post.html" className="hover:text-copper transition-colors">Core Web Vitals in 2026: A Complete Optimization Guide</a>
            </h3>
            <p data-desc className="text-sm text-muted leading-relaxed mb-5">Everything you need to know about LCP, CLS, INP — with actionable fixes that take a real-world site from a 60 to a 98 Lighthouse score.</p>
            <div className="flex items-center justify-between border-t border-line pt-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-copper/10 border border-copper/20 flex items-center justify-center font-mono text-copper font-bold text-xs">MP</div>
                <span className="text-xs text-muted">Mark Patel</span>
              </div>
              <a href="blog-post.html" className="font-mono text-xs text-copper hover:text-coppersoft transition-colors">Read More →</a>
            </div>
          </div>
        </article>

        
        <article className="blog-post card-hover border border-line bg-panel rounded-2xl overflow-hidden" data-category="business">
          <a href="blog-post.html" className="block overflow-hidden aspect-[16/9] relative bg-panel2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/15 via-panel2 to-copper/10 flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-110">📈</div>
            <span className="absolute top-4 left-4 font-mono text-xs bg-teal text-ink font-bold px-2.5 py-1 rounded-md">Business</span>
          </a>
          <div className="p-6">
            <div className="flex items-center gap-3 text-xs text-muted font-mono mb-3">
              <span>May 28, 2026</span>
              <span className="w-1 h-1 rounded-full bg-line"></span>
              <span>7 min read</span>
            </div>
            <h3 className="font-bold text-lg leading-snug mb-3">
              <a href="blog-post.html" className="hover:text-copper transition-colors">From MVP to Scale: Technical Decisions That Make or Break Startups</a>
            </h3>
            <p data-desc className="text-sm text-muted leading-relaxed mb-5">The architecture choices, tech stack decisions, and technical debt strategies that determine whether your startup can scale from 100 to 10,000 users.</p>
            <div className="flex items-center justify-between border-t border-line pt-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center font-mono text-teal font-bold text-xs">JC</div>
                <span className="text-xs text-muted">Jordan Chen</span>
              </div>
              <a href="blog-post.html" className="font-mono text-xs text-copper hover:text-coppersoft transition-colors">Read More →</a>
            </div>
          </div>
        </article>

        
        <article className="blog-post card-hover border border-line bg-panel rounded-2xl overflow-hidden" data-category="web-dev">
          <a href="blog-post.html" className="block overflow-hidden aspect-[16/9] relative bg-panel2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-copper/15 via-panel2 to-teal/20 flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-110">🔧</div>
            <span className="absolute top-4 left-4 font-mono text-xs bg-copper text-ink font-bold px-2.5 py-1 rounded-md">Web Dev</span>
          </a>
          <div className="p-6">
            <div className="flex items-center gap-3 text-xs text-muted font-mono mb-3">
              <span>May 15, 2026</span>
              <span className="w-1 h-1 rounded-full bg-line"></span>
              <span>12 min read</span>
            </div>
            <h3 className="font-bold text-lg leading-snug mb-3">
              <a href="blog-post.html" className="hover:text-copper transition-colors">Advanced TypeScript Patterns for Large-Scale Applications</a>
            </h3>
            <p data-desc className="text-sm text-muted leading-relaxed mb-5">Template literal types, conditional types, and mapped types that make your codebase self-documenting and bulletproof at enterprise scale.</p>
            <div className="flex items-center justify-between border-t border-line pt-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-copper/10 border border-copper/20 flex items-center justify-center font-mono text-copper font-bold text-xs">AK</div>
                <span className="text-xs text-muted">Alex Kim</span>
              </div>
              <a href="blog-post.html" className="font-mono text-xs text-copper hover:text-coppersoft transition-colors">Read More →</a>
            </div>
          </div>
        </article>

        
        <article className="blog-post card-hover border border-line bg-panel rounded-2xl overflow-hidden" data-category="ui-ux">
          <a href="blog-post.html" className="block overflow-hidden aspect-[16/9] relative bg-panel2 group">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-panel2 to-copper/15 flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-110">🎯</div>
            <span className="absolute top-4 left-4 font-mono text-xs bg-teal text-ink font-bold px-2.5 py-1 rounded-md">UI/UX</span>
          </a>
          <div className="p-6">
            <div className="flex items-center gap-3 text-xs text-muted font-mono mb-3">
              <span>May 2, 2026</span>
              <span className="w-1 h-1 rounded-full bg-line"></span>
              <span>9 min read</span>
            </div>
            <h3 className="font-bold text-lg leading-snug mb-3">
              <a href="blog-post.html" className="hover:text-copper transition-colors">Micro-Interactions That Convert: Psychology-Driven UI Animation</a>
            </h3>
            <p data-desc className="text-sm text-muted leading-relaxed mb-5">The science behind UI animations that guide user behavior, reduce cognitive load, and increase conversion rates by up to 35%.</p>
            <div className="flex items-center justify-between border-t border-line pt-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center font-mono text-teal font-bold text-xs">SR</div>
                <span className="text-xs text-muted">Sara Reyes</span>
              </div>
              <a href="blog-post.html" className="font-mono text-xs text-copper hover:text-coppersoft transition-colors">Read More →</a>
            </div>
          </div>
        </article>

      </div>

      
      <div className="text-center">
        <button id="load-more" className="border border-line rounded-lg px-8 py-3 text-sm font-semibold hover:border-copper hover:bg-panel2 transition-all">
          Load More Articles
        </button>
      </div>
    </div>

    
    <aside className="lg:col-span-1 mt-12 lg:mt-0">
      <div className="space-y-8 lg:sticky lg:top-24">
        
        
        <div className="border border-line bg-panel rounded-xl p-6">
          <h3 className="font-mono font-semibold text-sm uppercase tracking-widest text-paper mb-4">Categories</h3>
          <ul className="space-y-2.5">
            <li><a href="#" className="flex justify-between text-sm text-muted hover:text-paper transition-colors"><span>Web Development</span><span className="font-mono text-xs">12</span></a></li>
            <li><a href="#" className="flex justify-between text-sm text-muted hover:text-paper transition-colors"><span>UI/UX Design</span><span className="font-mono text-xs">8</span></a></li>
            <li><a href="#" className="flex justify-between text-sm text-muted hover:text-paper transition-colors"><span>Performance</span><span className="font-mono text-xs">6</span></a></li>
            <li><a href="#" className="flex justify-between text-sm text-muted hover:text-paper transition-colors"><span>Business</span><span className="font-mono text-xs">4</span></a></li>
          </ul>
        </div>

        
        <div className="border border-line bg-panel rounded-xl p-6">
          <h3 className="font-mono font-semibold text-sm uppercase tracking-widest text-paper mb-4">Popular</h3>
          <div className="space-y-4">
            <article className="group">
              <h4 className="text-sm font-semibold leading-snug group-hover:text-copper transition-colors mb-1">
                <a href="blog-post.html">React 19: What's New and Why It Matters</a>
              </h4>
              <p className="text-xs text-muted font-mono">Apr 18 • 5 min</p>
            </article>
            <article className="group">
              <h4 className="text-sm font-semibold leading-snug group-hover:text-copper transition-colors mb-1">
                <a href="blog-post.html">The Complete Guide to CSS Container Queries</a>
              </h4>
              <p className="text-xs text-muted font-mono">Apr 12 • 7 min</p>
            </article>
            <article className="group">
              <h4 className="text-sm font-semibold leading-snug group-hover:text-copper transition-colors mb-1">
                <a href="blog-post.html">Building Accessible Forms in 2026</a>
              </h4>
              <p className="text-xs text-muted font-mono">Apr 5 • 6 min</p>
            </article>
          </div>
        </div>

        
        <div className="border border-copper/30 bg-panel rounded-xl p-6">
          <h3 className="font-mono font-semibold text-sm uppercase tracking-widest text-copper mb-3">Newsletter</h3>
          <p data-desc className="text-sm text-muted leading-relaxed mb-4">Get weekly insights delivered to your inbox. No spam, unsubscribe anytime.</p>
          <form className="space-y-3">
            <input type="email" placeholder="your@email.com" className="w-full bg-panel2 border border-line rounded-lg px-3 py-2.5 text-sm placeholder-muted/50 focus:outline-none focus:border-copper transition-colors"/>
            <button className="w-full bg-copper text-ink font-semibold py-2.5 rounded-lg hover:bg-coppersoft transition-colors text-sm">Subscribe</button>
          </form>
        </div>

      </div>
    </aside>

  </div>
</section>

<footer className="border-t border-line bg-ink">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
    
    <div className="lg:col-span-2">
      <a href="index.html" className="flex items-center gap-2.5 mb-4">
        <span className="w-8 h-8 rounded-lg bg-copper/10 border border-copper/30 flex items-center justify-center">
          <span className="font-mono font-extrabold text-copper text-xs">DC</span>
        </span>
        <span className="font-mono font-bold tracking-tight text-[15px]">Dev<span className="text-copper">Craft</span></span>
      </a>
      <p data-desc className="text-sm text-muted leading-relaxed max-w-[260px]">
        Building digital solutions that help businesses scale with confidence. Modern, fast, and built to grow.
      </p>
      <div className="mt-5 flex gap-2.5">
        <a href="#" className="w-8 h-8 border border-line rounded-md flex items-center justify-center text-muted hover:border-copper hover:text-copper transition-colors text-xs">𝕏</a>
        <a href="#" className="w-8 h-8 border border-line rounded-md flex items-center justify-center text-muted hover:border-copper hover:text-copper transition-colors text-xs">in</a>
        <a href="#" className="w-8 h-8 border border-line rounded-md flex items-center justify-center text-muted hover:border-copper hover:text-copper transition-colors text-xs">gh</a>
      </div>
    </div>
    
    <div>
      <h5 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Services</h5>
      <ul className="space-y-2.5 text-sm text-muted">
        <li><a href="index.html#services" className="hover:text-paper transition-colors">Web Development</a></li>
        <li><a href="index.html#services" className="hover:text-paper transition-colors">UI/UX Design</a></li>
        <li><a href="index.html#services" className="hover:text-paper transition-colors">eCommerce</a></li>
        <li><a href="index.html#services" className="hover:text-paper transition-colors">Mobile Apps</a></li>
        <li><a href="index.html#services" className="hover:text-paper transition-colors">CMS Development</a></li>
      </ul>
    </div>
    
    <div>
      <h5 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Company</h5>
      <ul className="space-y-2.5 text-sm text-muted">
        <li><a href="index.html#about" className="hover:text-paper transition-colors">About Us</a></li>
        <li><a href="index.html#portfolio" className="hover:text-paper transition-colors">Portfolio</a></li>
        <li><a href="index.html#process" className="hover:text-paper transition-colors">Our Process</a></li>
        <li><a href="index.html#testimonials" className="hover:text-paper transition-colors">Reviews</a></li>
        <li><a href="index.html#contact" className="hover:text-paper transition-colors">Contact</a></li>
      </ul>
    </div>
    
    <div>
      <h5 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Legal</h5>
      <ul className="space-y-2.5 text-sm text-muted">
        <li><a href="#" className="hover:text-paper transition-colors">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-paper transition-colors">Terms of Service</a></li>
        <li><a href="#" className="hover:text-paper transition-colors">Cookie Policy</a></li>
        <li><a href="#" className="hover:text-paper transition-colors">Sitemap</a></li>
      </ul>
    </div>
  </div>
  <div className="border-t border-line py-6">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="text-xs text-muted font-mono">© 2026 DevCraft. All rights reserved.</p>
      <p className="text-xs text-muted font-mono">Built with ❤️ for digital growth</p>
    </div>
  </div>
</footer>



    </div>
  );
}

export default hero;
