/* ==========================================================================
   CASE STUDY MODAL CONTROLLER & ABHINAV'S 3 FIGMA PROJECTS
   ========================================================================== */

(function () {
  const caseStudies = {
    'yoruu': {
      category: 'PRODUCT DESIGN • WEB APP',
      issueNo: 'CASE STUDY 01',
      title: 'Yoruu: Atmospheric Dark-Mode Digital Product & Web Experience',
      dek: 'Designing a sleek, atmospheric interface with high-contrast typography, intuitive navigation, and responsive component architecture in Figma.',
      figmaEmbed: 'https://embed.figma.com/design/7eHVYRCt2PhAcdjhQdqzAU/Yoruu?node-id=290-1527&embed-host=share',
      figmaUrl: 'https://www.figma.com/design/7eHVYRCt2PhAcdjhQdqzAU/Yoruu?node-id=290-1527',
      meta: {
        role: 'UI/UX Designer',
        tools: 'Figma, FigJam, Auto-Layout',
        type: 'Product & Web App Design',
        year: '2026'
      },
      heroSvg: `
        <svg viewBox="0 0 1000 500" style="width:100%; height:auto; background:#0A0C12; display:block; border-radius:4px;">
          <defs>
            <linearGradient id="yoruuGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1E2438"/>
              <stop offset="100%" stop-color="#0B0E17"/>
            </linearGradient>
            <linearGradient id="neonAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#8B5CF6"/>
              <stop offset="100%" stop-color="#EC4899"/>
            </linearGradient>
          </defs>
          <rect width="1000" height="500" fill="#0A0C12"/>
          <g opacity="0.15">
            <circle cx="500" cy="250" r="300" fill="url(#neonAccent)"/>
          </g>

          <g transform="translate(120, 50)">
            <!-- Top Navbar Mockup -->
            <rect width="760" height="45" rx="8" fill="#141824" stroke="#252F48"/>
            <text x="24" y="28" font-family="'Oswald', sans-serif" font-weight="700" font-size="16" fill="#FFFFFF" letter-spacing="1">YORUU</text>
            <text x="280" y="28" font-family="'Inter', sans-serif" font-size="12" fill="#94A3B8">Features</text>
            <text x="360" y="28" font-family="'Inter', sans-serif" font-size="12" fill="#94A3B8">Showcase</text>
            <text x="450" y="28" font-family="'Inter', sans-serif" font-size="12" fill="#94A3B8">Design System</text>
            <rect x="650" y="10" width="90" height="26" rx="13" fill="url(#neonAccent)"/>
            <text x="672" y="27" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#FFFFFF">Explore →</text>

            <!-- Hero Body Mockup -->
            <g transform="translate(0, 65)">
              <rect width="760" height="315" rx="8" fill="#101420" stroke="#1F283E"/>
              <text x="40" y="60" font-family="'Playfair Display', serif" font-weight="900" font-size="34" fill="#FFFFFF">Atmospheric & Refined.</text>
              <text x="40" y="95" font-family="'Inter', sans-serif" font-size="14" fill="#94A3B8">Crafted with precision in Figma. Optimized for production responsiveness.</text>
              
              <!-- Cards Row -->
              <g transform="translate(40, 125)">
                <rect width="210" height="150" rx="8" fill="#171C2C" stroke="#2B3652"/>
                <circle cx="36" cy="36" r="16" fill="#8B5CF6"/>
                <text x="64" y="41" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#FFF">Fluid Layouts</text>
                <text x="24" y="80" font-family="'Inter', sans-serif" font-size="11" fill="#94A3B8">8pt Auto-layout grids with modular component tokens.</text>
              </g>

              <g transform="translate(275, 125)">
                <rect width="210" height="150" rx="8" fill="#171C2C" stroke="#EC4899" stroke-width="1.5"/>
                <circle cx="36" cy="36" r="16" fill="#EC4899"/>
                <text x="64" y="41" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#FFF">Dark UI Theme</text>
                <text x="24" y="80" font-family="'Inter', sans-serif" font-size="11" fill="#94A3B8">WCAG compliant high-contrast color ramps.</text>
              </g>

              <g transform="translate(510, 125)">
                <rect width="210" height="150" rx="8" fill="#171C2C" stroke="#2B3652"/>
                <circle cx="36" cy="36" r="16" fill="#3B82F6"/>
                <text x="64" y="41" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#FFF">Ready to Ship</text>
                <text x="24" y="80" font-family="'Inter', sans-serif" font-size="11" fill="#94A3B8">Structured for seamless React component translation.</text>
              </g>
            </g>
          </g>
        </svg>
      `,
      steps: [
        {
          num: '01',
          title: 'The Problem',
          content: `Digital experiences in dense dark-mode products often suffer from muddy visual contrast, unclear visual hierarchy, and over-cluttered navigation. For Yoruu, the challenge was to create an atmospheric, modern web application interface that balances deep aesthetic intrigue with instant usability and clarity.`
        },
        {
          num: '02',
          title: 'The Design Approach',
          content: `I structured the product using an 8-point auto-layout system in Figma. By establishing clear typography contrast (bold serif headings paired with clean, geometric sans-serif body text) and using subtle gradient borders, the interface guides the user's eye naturally toward core calls-to-action.`
        },
        {
          num: '03',
          title: 'Figma Auto-Layout & Component Specs',
          content: `Every element—from the navigation pills to the interactive feature cards—was designed with responsive constraints and auto-layout frames, ensuring fluid scaling across desktop and mobile screens.`
        },
        {
          num: '04',
          title: 'Design System & Color Tokens',
          content: `Developed a curated dark-mode palette using deep midnight blues (#0A0C12, #101420), slate borders (#1F283E), and vibrant neon purple/pink accents (#8B5CF6, #EC4899) that pass WCAG AA contrast standards.`
        },
        {
          num: '05',
          title: 'Frontend Implementation Readiness',
          content: `Because of my frontend background, every Figma component was structured to mirror React prop schemas (variants, hover states, active states, and loading states), making handoff to engineering frictionless.`
        },
        {
          num: '06',
          title: 'What I Learned',
          content: `Dark UI design requires exceptional discipline around elevation and border lighting. Subtle 1px borders with 10-15% opacity create far cleaner depth than heavy drop shadows.`
        }
      ]
    },
    'fashion': {
      category: 'E-COMMERCE • LUXURY APPAREL',
      issueNo: 'CASE STUDY 02',
      title: 'Classy Fashion: Editorial Luxury E-Commerce & Lookbook Experience',
      dek: 'A high-fashion digital storefront blending bold editorial typography, immersive product lookbooks, and streamlined shopping flows.',
      figmaEmbed: 'https://embed.figma.com/design/zkop4UZCnftJHYydb8F4qU/Classy-Fashion?node-id=1-3321&embed-host=share',
      figmaUrl: 'https://www.figma.com/design/zkop4UZCnftJHYydb8F4qU/Classy-Fashion?node-id=1-3321',
      meta: {
        role: 'UI/UX Designer',
        tools: 'Figma, FigJam, Prototyping',
        type: 'Fashion E-Commerce',
        year: '2026'
      },
      heroSvg: `
        <svg viewBox="0 0 1000 500" style="width:100%; height:auto; background:#FBF9F5; display:block; border:1px solid #111;">
          <rect width="1000" height="500" fill="#FAF8F5"/>
          <g transform="translate(100, 40)">
            <rect width="800" height="420" rx="4" fill="#FFFFFF" stroke="#111111" stroke-width="1.5"/>
            <!-- Editorial Header -->
            <text x="30" y="45" font-family="'Playfair Display', serif" font-weight="900" font-size="24" fill="#111" letter-spacing="1">CLASSY FASHION</text>
            <text x="650" y="45" font-family="'Roboto Condensed', sans-serif" font-weight="700" font-size="12" fill="#ED2A1D">AUTUMN / WINTER 2026</text>
            <line x1="30" y1="65" x2="770" y2="65" stroke="#111" stroke-width="1"/>

            <!-- 2-Column Fashion Layout -->
            <g transform="translate(30, 85)">
              <!-- Left: Editorial Lookbook Image Card -->
              <rect width="360" height="300" fill="#EAE5D9" stroke="#111" stroke-width="1"/>
              <text x="20" y="40" font-family="'Playfair Display', serif" font-style="italic" font-size="28" fill="#111">The Minimalist Coat</text>
              <text x="20" y="70" font-family="'Roboto Condensed', sans-serif" font-weight="700" font-size="13" fill="#666">LIMITED EDITION • 100% WOOL</text>
              <rect x="20" y="240" width="140" height="38" fill="#111"/>
              <text x="44" y="264" font-family="'Roboto Condensed', sans-serif" font-weight="700" font-size="11" fill="#FFF">SHOP COLLECTION →</text>
            </g>

            <g transform="translate(415, 85)">
              <!-- Right: Product Grid -->
              <rect width="355" height="140" fill="#F8F6F0" stroke="#E5E2DA"/>
              <text x="20" y="35" font-family="'Playfair Display', serif" font-weight="700" font-size="16" fill="#111">Cashmere Knitwear</text>
              <text x="20" y="60" font-family="'Inter', sans-serif" font-size="12" fill="#666">Pure luxury tailored for everyday comfort.</text>
              <text x="20" y="110" font-family="'Playfair Display', serif" font-weight="800" font-size="18" fill="#ED2A1D">$320.00</text>

              <rect y="155" width="355" height="145" fill="#F8F6F0" stroke="#E5E2DA"/>
              <text x="20" y="190" font-family="'Playfair Display', serif" font-weight="700" font-size="16" fill="#111">Tailored Silk Trouser</text>
              <text x="20" y="215" font-family="'Inter', sans-serif" font-size="12" fill="#666">Effortless drape with bespoke detailing.</text>
              <text x="20" y="265" font-family="'Playfair Display', serif" font-weight="800" font-size="18" fill="#ED2A1D">$240.00</text>
            </g>
          </g>
        </svg>
      `,
      steps: [
        {
          num: '01',
          title: 'The Problem',
          content: `Traditional e-commerce templates often feel sterile and repetitive. Luxury fashion consumers demand an immersive editorial experience reminiscent of high-end magazines, combined with fast product filtering, size guides, and an effortless bag-to-checkout flow.`
        },
        {
          num: '02',
          title: 'The Editorial Approach',
          content: `I designed Classy Fashion with an editorial magazine visual identity: oversized serif headlines, asymmetric photo collages, generous whitespace, and minimal sticky bag drawers that keep the product at center stage.`
        },
        {
          num: '03',
          title: 'Figma Auto-Layout & Variants',
          content: `Engineered complete component variants for product cards (Default, Quick View Hover, Out-of-Stock, Added-to-Bag) and responsive navigation menus using Figma auto-layout.`
        },
        {
          num: '04',
          title: 'Design System & Typography',
          content: `Paired elegant serif display typography (Playfair Display) for headlines with crisp condensed sans-serifs (Roboto Condensed) for pricing, SKU metadata, and size selectors.`
        },
        {
          num: '05',
          title: 'Key Learnings',
          content: `In luxury e-commerce, every micro-interaction (from image zoom to color swatch selection) must feel smooth and intentional. Whitespace acts as a luxury signal.`
        }
      ]
    },
    'plants': {
      category: 'E-COMMERCE • DISCOVERY LANDING PAGE',
      issueNo: 'CASE STUDY 03',
      title: 'Plants Landing Page: Nature-Driven Botanical E-Commerce & Care Experience',
      dek: 'Crafting a calming, organic digital storefront that educates users on indoor plant care while driving conversion with seamless discovery.',
      figmaEmbed: 'https://embed.figma.com/design/ExZbWixckrYjeWUxkc6ZrY/Plants-Landing-page?node-id=0-1&embed-host=share',
      figmaUrl: 'https://www.figma.com/design/ExZbWixckrYjeWUxkc6ZrY/Plants-Landing-page?node-id=0-1',
      meta: {
        role: 'UI/UX Designer',
        tools: 'Figma, FigJam, Vector Illustration',
        type: 'Web & Landing Page Design',
        year: '2026'
      },
      heroSvg: `
        <svg viewBox="0 0 1000 500" style="width:100%; height:auto; background:#F0FDF4; display:block; border:1px solid #15803D;">
          <rect width="1000" height="500" fill="#F0FDF4"/>
          <g transform="translate(100, 40)">
            <rect width="800" height="420" rx="8" fill="#FFFFFF" stroke="#86EFAC" stroke-width="1.5"/>
            <!-- Top Navbar -->
            <text x="30" y="45" font-family="'Playfair Display', serif" font-weight="900" font-size="22" fill="#14532D">PLANTIFY</text>
            <text x="320" y="45" font-family="'Inter', sans-serif" font-size="12" fill="#166534">Shop Plants</text>
            <text x="430" y="45" font-family="'Inter', sans-serif" font-size="12" fill="#166534">Plant Care 101</text>
            <text x="560" y="45" font-family="'Inter', sans-serif" font-size="12" fill="#166534">Sustainability</text>
            <rect x="680" y="25" width="80" height="30" rx="15" fill="#15803D"/>
            <text x="700" y="44" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#FFF">Cart (2)</text>
            <line x1="30" y1="65" x2="770" y2="65" stroke="#DCFCE7" stroke-width="1"/>

            <!-- Main Botanical Hero Card -->
            <g transform="translate(30, 85)">
              <rect width="420" height="300" rx="6" fill="#DCFCE7"/>
              <text x="24" y="50" font-family="'Playfair Display', serif" font-weight="900" font-size="32" fill="#14532D">Bring Nature Inside.</text>
              <text x="24" y="90" font-family="'Inter', sans-serif" font-size="13" fill="#166534">Air-purifying, low-maintenance indoor plants handpicked for your space.</text>
              
              <rect x="24" y="130" width="140" height="40" rx="20" fill="#15803D"/>
              <text x="48" y="155" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#FFF">Explore Plants →</text>
            </g>

            <!-- Featured Plant Cards -->
            <g transform="translate(470, 85)">
              <rect width="290" height="140" rx="6" fill="#F9FAFB" stroke="#E5E7EB"/>
              <circle cx="45" cy="50" r="25" fill="#BBF7D0"/>
              <text x="90" y="45" font-family="'Playfair Display', serif" font-weight="700" font-size="16" fill="#111">Monstera Deliciosa</text>
              <text x="90" y="68" font-family="'Inter', sans-serif" font-size="11" fill="#6B7280">Low maintenance • Indirect light</text>
              <text x="90" y="105" font-family="'Inter', sans-serif" font-weight="800" font-size="14" fill="#15803D">$38.00</text>

              <rect y="155" width="290" height="145" rx="6" fill="#F9FAFB" stroke="#E5E7EB"/>
              <circle cx="45" cy="205" r="25" fill="#BBF7D0"/>
              <text x="90" y="200" font-family="'Playfair Display', serif" font-weight="700" font-size="16" fill="#111">Fiddle Leaf Fig</text>
              <text x="90" y="223" font-family="'Inter', sans-serif" font-size="11" fill="#6B7280">Bright filtered light • Air purifier</text>
              <text x="90" y="260" font-family="'Inter', sans-serif" font-weight="800" font-size="14" fill="#15803D">$54.00</text>
            </g>
          </g>
        </svg>
      `,
      steps: [
        {
          num: '01',
          title: 'The Problem',
          content: `First-time plant buyers often hesitate to purchase plants online due to anxiety around maintenance difficulty, sunlight requirements, and shipping safety. The goal was to build a landing page that combines confident plant education with frictionless purchasing.`
        },
        {
          num: '02',
          title: 'The Design Approach',
          content: `I developed a soothing organic visual language: soft sage greens (#F0FDF4, #DCFCE7), warm earthy neutral backgrounds, and clear visual care badges (Watering frequency, Sunlight needs, Pet-friendly status) right on the product card.`
        },
        {
          num: '03',
          title: 'Figma Auto-Layout Architecture',
          content: `Constructed the complete responsive landing page in Figma with dynamic Auto-Layout components, custom botanical card carousels, and customer review testimonials.`
        },
        {
          num: '04',
          title: 'Design System & Typography',
          content: `Used warm, trustworthy serif display headings paired with clean legible sans-serif body copy for care guides.`
        },
        {
          num: '05',
          title: 'Key Learnings',
          content: `Integrating proactive guidance (like plant quizzes and difficulty filters) into the hero section drastically reduces user hesitation and increases checkout confidence.`
        }
      ]
    }
  };

  function initCaseStudyModal() {
    const modal = document.getElementById('caseStudyModal');
    const modalContent = document.getElementById('caseStudyModalBody');
    const closeBtn = document.getElementById('caseStudyCloseBtn');

    if (!modal || !modalContent) return;

    function openStudy(id) {
      const data = caseStudies[id];
      if (!data) return;

      modalContent.innerHTML = `
        <div class="cs-hero-section">
          <div class="cs-category-badge">
            <span class="category-badge-red">${data.category}</span>
          </div>
          <h1 class="cs-headline-title">${data.title}</h1>
          <p class="cs-lead-statement">${data.dek}</p>
          
          <div class="cs-meta-grid">
            <div class="cs-meta-cell">
              <span class="cs-meta-label">Role</span>
              <span class="cs-meta-value">${data.meta.role}</span>
            </div>
            <div class="cs-meta-cell">
              <span class="cs-meta-label">Tools</span>
              <span class="cs-meta-value">${data.meta.tools}</span>
            </div>
            <div class="cs-meta-cell">
              <span class="cs-meta-label">Type</span>
              <span class="cs-meta-value">${data.meta.type}</span>
            </div>
            <div class="cs-meta-cell">
              <span class="cs-meta-label">Year</span>
              <span class="cs-meta-value">${data.meta.year}</span>
            </div>
          </div>
        </div>

        <!-- Figma Live Embed / Interactive Previewer -->
        <div style="margin: 20px 0;">
          <div style="display:flex; justify-content:space-between; align-items:center; background:#111; color:#FFF; padding:10px 16px; border-radius:4px 4px 0 0;">
            <div style="font-family:var(--font-headline); font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.06em;">
              ❖ LIVE FIGMA DESIGN CANVAS
            </div>
            <a href="${data.figmaUrl}" target="_blank" rel="noopener noreferrer" style="color:#ED2A1D; font-family:var(--font-headline); font-size:12px; font-weight:700;">
              OPEN IN FIGMA ↗
            </a>
          </div>
          
          <div style="position:relative; width:100%; height:480px; background:#0E1017; border:1px solid #111; border-top:none; border-radius:0 0 4px 4px; overflow:hidden;">
            <iframe 
              style="width:100%; height:100%; border:none;" 
              src="${data.figmaEmbed}" 
              allowfullscreen>
            </iframe>
          </div>
          <div style="font-family:var(--font-body); font-size:11px; color:#666; margin-top:6px;">
            💡 <em>Interactive Figma canvas: Click and drag to pan, scroll to zoom directly into the designs!</em>
          </div>
        </div>

        <!-- 6-Step Case Study Steps -->
        ${data.steps.map(step => `
          <div class="cs-step-block">
            <div class="cs-step-header">
              <span class="cs-step-number">${step.num}</span>
              <h3 class="cs-step-title">${step.title}</h3>
            </div>
            <p class="cs-paragraph">${step.content}</p>
          </div>
        `).join('')}

        <!-- Case Study Footer Action -->
        <div style="border-top:2px solid var(--ink-black); padding-top:24px; margin-top:40px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
          <div>
            <div style="font-family:var(--font-subhead); font-size:12px; text-transform:uppercase; color:var(--ink-muted);">Editorial Case Study</div>
            <div style="font-family:var(--font-masthead); font-size:16px; font-weight:800; color:var(--ink-black);">ABHINAV VATS • 2026 EDITION</div>
          </div>
          <button class="modal-close-btn" id="bottomCloseBtn">
            ← BACK TO NEWSPAPER
          </button>
        </div>
      `;

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';

      const bottomClose = document.getElementById('bottomCloseBtn');
      if (bottomClose) {
        bottomClose.addEventListener('click', closeStudy);
      }
    }

    function closeStudy() {
      modal.classList.remove('open');
      document.body.style.overflow = 'auto';
      if (window.location.hash.startsWith('#case-study-')) {
        history.replaceState(null, null, ' ');
      }
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeStudy);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeStudy();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeStudy();
      }
    });

    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-case-study]');
      if (trigger) {
        e.preventDefault();
        const id = trigger.getAttribute('data-case-study');
        openStudy(id);
      }
    });

    if (window.location.hash.startsWith('#case-study-')) {
      const id = window.location.hash.replace('#case-study-', '');
      if (caseStudies[id]) {
        openStudy(id);
      }
    }
  }

  document.addEventListener('DOMContentLoaded', initCaseStudyModal);
})();
