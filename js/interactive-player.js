/* ==========================================================================
   INTERACTIVE "IN MOTION" MICRO-INTERACTION PLAYER
   ========================================================================== */

(function () {
  const demos = {
    'onboarding': {
      title: 'FIG. 01 — MULTI-STEP AGENT ONBOARDING FLOW',
      subtitle: 'Kuro AI • Interactive Flow with Optimistic UI & Progressive Disclosure',
      annotation: 'UX RATIONALE: Redesigned the 7-step modal into a conversational 3-stage canvas. By loading agent templates dynamically, onboarding friction dropped by 40% with zero abandonment on key credential inputs.',
      duration: 6,
      render: (step) => `
        <div class="interactive-canvas-inner" style="width:100%; height:100%; background:#0B0D14; display:flex; flex-direction:column; padding:20px; font-family:var(--font-sans); color:#FFFFFF;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #1F2438; padding-bottom:12px; margin-bottom:16px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="width:10px; height:10px; border-radius:50%; background:#EF4444;"></span>
              <span style="width:10px; height:10px; border-radius:50%; background:#F59E0B;"></span>
              <span style="width:10px; height:10px; border-radius:50%; background:#10B981;"></span>
              <span style="font-family:var(--font-mono); font-size:12px; color:#94A3B8; margin-left:8px;">agent-builder.kuro.ai / step-0${Math.min(3, Math.floor(step / 2) + 1)}</span>
            </div>
            <span style="background:#D92318; font-size:11px; font-weight:700; padding:2px 8px; border-radius:2px; font-family:var(--font-condensed); text-transform:uppercase;">Live Prototype</span>
          </div>

          <div style="display:grid; grid-template-columns: 240px 1fr; gap:20px; flex:1;">
            <!-- Left Sidebar Flow -->
            <div style="background:#121624; border:1px solid #1F2438; border-radius:6px; padding:14px; display:flex; flex-direction:column; gap:12px;">
              <div style="font-family:var(--font-condensed); font-size:11px; text-transform:uppercase; color:#64748B; letter-spacing:0.08em;">Workflow Pipeline</div>
              
              <div style="display:flex; align-items:center; gap:10px; padding:8px 10px; background:${step >= 0 ? '#1E2538' : 'transparent'}; border-radius:4px; border-left:3px solid ${step >= 0 ? '#D92318' : 'transparent'};">
                <div style="width:20px; height:20px; border-radius:50%; background:${step >= 0 ? '#D92318' : '#334155'}; font-size:11px; display:flex; align-items:center; justify-content:center; font-weight:700;">1</div>
                <div style="font-size:12px; font-weight:600;">Define Persona</div>
              </div>

              <div style="display:flex; align-items:center; gap:10px; padding:8px 10px; background:${step >= 2 ? '#1E2538' : 'transparent'}; border-radius:4px; border-left:3px solid ${step >= 2 ? '#D92318' : 'transparent'};">
                <div style="width:20px; height:20px; border-radius:50%; background:${step >= 2 ? '#D92318' : '#334155'}; font-size:11px; display:flex; align-items:center; justify-content:center; font-weight:700;">2</div>
                <div style="font-size:12px; font-weight:600;">Connect Knowledge (RAG)</div>
              </div>

              <div style="display:flex; align-items:center; gap:10px; padding:8px 10px; background:${step >= 4 ? '#1E2538' : 'transparent'}; border-radius:4px; border-left:3px solid ${step >= 4 ? '#D92318' : 'transparent'};">
                <div style="width:20px; height:20px; border-radius:50%; background:${step >= 4 ? '#D92318' : '#334155'}; font-size:11px; display:flex; align-items:center; justify-content:center; font-weight:700;">3</div>
                <div style="font-size:12px; font-weight:600;">Trigger Execution</div>
              </div>
            </div>

            <!-- Main Canvas Flow -->
            <div style="background:#121624; border:1px solid #1F2438; border-radius:6px; padding:20px; display:flex; flex-direction:column; justify-content:center; align-items:center; position:relative;">
              ${step < 2 ? `
                <div style="width:100%; max-width:380px; text-align:center;">
                  <div style="font-size:13px; font-family:var(--font-mono); color:#94A3B8; margin-bottom:8px;">[STAGE 01: INITIALIZE]</div>
                  <h4 style="font-family:var(--font-serif-display); font-size:20px; margin-bottom:12px; color:#FFFFFF;">Select Agent Architecture</h4>
                  <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px;">
                    <div style="border:2px solid #D92318; background:#1E2538; padding:12px; border-radius:6px; cursor:pointer; text-align:left;">
                      <div style="font-weight:700; font-size:13px; color:#FFFFFF;">Orchestrator</div>
                      <div style="font-size:11px; color:#94A3B8;">Multi-model swarm</div>
                    </div>
                    <div style="border:1px solid #334155; padding:12px; border-radius:6px; text-align:left; opacity:0.6;">
                      <div style="font-weight:700; font-size:13px;">Single Executor</div>
                      <div style="font-size:11px; color:#94A3B8;">Fast deterministic</div>
                    </div>
                  </div>
                  <div style="background:#D92318; color:#FFF; padding:8px 16px; border-radius:4px; font-size:12px; font-weight:700; display:inline-block;">Selected: Multi-Model Orchestrator ✓</div>
                </div>
              ` : step < 4 ? `
                <div style="width:100%; max-width:400px; text-align:center;">
                  <div style="font-size:13px; font-family:var(--font-mono); color:#94A3B8; margin-bottom:8px;">[STAGE 02: VECTOR SEARCH]</div>
                  <h4 style="font-family:var(--font-serif-display); font-size:20px; margin-bottom:12px; color:#FFFFFF;">Indexing Schema & Data Connectors</h4>
                  <div style="background:#0F131E; border:1px solid #283049; border-radius:6px; padding:14px; text-align:left; font-family:var(--font-mono); font-size:11px; color:#38BDF8; margin-bottom:14px;">
                    <div>> Connecting to Postgres Vector DB... <span style="color:#4ADE80;">[OK]</span></div>
                    <div>> Embedding 14,200 document chunks... <span style="color:#FBBF24;">[92%]</span></div>
                    <div>> Auto-indexing similarity tokens... <span style="color:#4ADE80;">[READY]</span></div>
                  </div>
                  <div style="height:6px; background:#20283E; border-radius:3px; overflow:hidden;">
                    <div style="width:85%; height:100%; background:#38BDF8; transition:width 0.3s ease;"></div>
                  </div>
                </div>
              ` : `
                <div style="width:100%; max-width:400px; text-align:center; animation:fadeIn 0.3s ease;">
                  <div style="width:48px; height:48px; border-radius:50%; background:#10B981; color:#FFFFFF; display:flex; align-items:center; justify-content:center; font-size:22px; margin:0 auto 12px auto;">✓</div>
                  <h4 style="font-family:var(--font-serif-display); font-size:22px; margin-bottom:6px; color:#FFFFFF;">Agent Pipeline Deployed</h4>
                  <p style="font-size:12px; color:#94A3B8; margin-bottom:16px;">Ready to receive production queries with sub-80ms latency.</p>
                  <div style="display:flex; justify-content:center; gap:8px;">
                    <button style="background:#D92318; color:#FFF; padding:8px 16px; border-radius:4px; font-weight:700; font-size:12px;">Open Live Canvas</button>
                    <button style="border:1px solid #334155; color:#FFF; padding:8px 16px; border-radius:4px; font-size:12px;">Copy Webhook</button>
                  </div>
                </div>
              `}
            </div>
          </div>
        </div>
      `
    },
    'checkout': {
      title: 'FIG. 02 — FINTECH CHECKOUT & PAYMENT FLOW',
      subtitle: 'PrepVault • 0-Friction Multi-Tier Subscription & UPI/Card Flow',
      annotation: 'UX RATIONALE: Redesigned the legacy drop-off ridden 4-step modal into a unified single-view sheet with inline card validation, dynamic coupon calculator, and instantaneous feedback.',
      duration: 6,
      render: (step) => `
        <div style="width:100%; height:100%; background:#0B0D14; display:flex; flex-direction:column; padding:20px; font-family:var(--font-sans); color:#FFFFFF;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #1F2438; padding-bottom:12px; margin-bottom:16px;">
            <div style="font-family:var(--font-serif-display); font-size:16px; font-weight:700; color:#F5F3ED;">PrepVault Checkout Experience</div>
            <div style="font-family:var(--font-mono); font-size:11px; color:#10B981; background:#064E3B; padding:2px 8px; border-radius:2px;">SSL 256-BIT ENCRYPTED</div>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px; flex:1;">
            <!-- Left: Order Summary & Dynamic Calculation -->
            <div style="background:#121624; border:1px solid #1F2438; border-radius:6px; padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="font-family:var(--font-condensed); font-size:11px; text-transform:uppercase; color:#94A3B8; margin-bottom:6px;">Selected Tier</div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                  <div style="font-weight:700; font-size:15px;">Pro Membership (Annual)</div>
                  <div style="font-family:var(--font-serif-display); font-size:16px; font-weight:800; color:#D92318;">₹2,499</div>
                </div>

                <div style="border-top:1px dashed #283049; padding-top:10px; margin-bottom:12px; font-size:12px; color:#94A3B8; display:flex; flex-direction:column; gap:6px;">
                  <div style="display:flex; justify-content:space-between;">
                    <span>Base Subscription</span>
                    <span style="color:#FFF;">₹3,999</span>
                  </div>
                  <div style="display:flex; justify-content:space-between; color:#10B981;">
                    <span>Editorial Discount (38%)</span>
                    <span>-₹1,500</span>
                  </div>
                  <div style="display:flex; justify-content:space-between; font-weight:700; color:#FFF; border-top:1px solid #283049; padding-top:6px; margin-top:4px;">
                    <span>Total Payable</span>
                    <span style="color:#D92318; font-size:14px;">₹2,499</span>
                  </div>
                </div>
              </div>

              <div style="background:#1E2538; padding:8px 12px; border-radius:4px; font-size:11px; color:#CBD5E1;">
                ✦ 14-Day Money-Back Guarantee • Instant Access
              </div>
            </div>

            <!-- Right: Interactive Payment Widget -->
            <div style="background:#121624; border:1px solid #1F2438; border-radius:6px; padding:16px; display:flex; flex-direction:column; justify-content:center;">
              ${step < 3 ? `
                <div style="display:flex; flex-direction:column; gap:10px;">
                  <div style="font-size:11px; font-family:var(--font-condensed); text-transform:uppercase; color:#94A3B8;">Payment Method</div>
                  
                  <div style="display:flex; gap:8px;">
                    <div style="flex:1; padding:8px; border:2px solid #D92318; background:#1E2538; border-radius:4px; text-align:center; font-size:12px; font-weight:700;">Cards / NetBanking</div>
                    <div style="flex:1; padding:8px; border:1px solid #334155; border-radius:4px; text-align:center; font-size:12px; opacity:0.6;">UPI / QR</div>
                  </div>

                  <div style="display:flex; flex-direction:column; gap:8px; margin-top:4px;">
                    <input type="text" value="4111 •••• •••• 9021" readonly style="background:#0F131E; border:1px solid #283049; padding:8px 12px; border-radius:4px; color:#FFF; font-family:var(--font-mono); font-size:12px; outline:none;" />
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                      <input type="text" value="08/28" readonly style="background:#0F131E; border:1px solid #283049; padding:8px 12px; border-radius:4px; color:#FFF; font-family:var(--font-mono); font-size:12px;" />
                      <input type="text" value="•••" readonly style="background:#0F131E; border:1px solid #283049; padding:8px 12px; border-radius:4px; color:#FFF; font-family:var(--font-mono); font-size:12px;" />
                    </div>
                  </div>

                  <button style="background:#D92318; color:#FFF; border:none; padding:10px; border-radius:4px; font-weight:700; font-size:13px; cursor:pointer; margin-top:6px;">
                    Pay ₹2,499 Now →
                  </button>
                </div>
              ` : `
                <div style="text-align:center; animation:fadeIn 0.3s ease;">
                  <div style="width:44px; height:44px; border-radius:50%; background:#10B981; color:#FFF; display:flex; align-items:center; justify-content:center; font-size:22px; margin:0 auto 10px auto;">✓</div>
                  <h4 style="font-family:var(--font-serif-display); font-size:18px; color:#FFF; margin-bottom:4px;">Payment Authorized</h4>
                  <div style="font-family:var(--font-mono); font-size:11px; color:#94A3B8; margin-bottom:12px;">TXN_ID: #PV-9920194-X8</div>
                  <div style="background:#1E2538; padding:8px; border-radius:4px; font-size:11px; color:#38BDF8;">
                    Redirecting to your personalized student dashboard in 2s...
                  </div>
                </div>
              `}
            </div>
          </div>
        </div>
      `
    },
    'tokens': {
      title: 'FIG. 03 — TOKENIZED DESIGN SYSTEM & COMMAND PALETTE',
      subtitle: 'Optimus UI • 50+ Component Token Architecture with Instant Search',
      annotation: 'UX RATIONALE: Engineered unified Figma tokens exported directly to CSS custom variables, eliminating handoff discrepancies between design sprints and production React builds.',
      duration: 6,
      render: (step) => `
        <div style="width:100%; height:100%; background:#0B0D14; display:flex; flex-direction:column; padding:20px; font-family:var(--font-sans); color:#FFFFFF;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #1F2438; padding-bottom:12px; margin-bottom:16px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-family:var(--font-condensed); font-size:13px; font-weight:800; color:#D92318;">OPTIMUS DS</span>
              <span style="color:#64748B;">/</span>
              <span style="font-family:var(--font-mono); font-size:11px; color:#94A3B8;">tokens.v2.json</span>
            </div>
            <div style="font-family:var(--font-mono); font-size:11px; color:#94A3B8;">⌘K Search Active</div>
          </div>

          <div style="display:grid; grid-template-columns: 260px 1fr; gap:20px; flex:1;">
            <!-- Token Categories -->
            <div style="background:#121624; border:1px solid #1F2438; border-radius:6px; padding:14px; display:flex; flex-direction:column; gap:8px;">
              <div style="font-family:var(--font-condensed); font-size:11px; text-transform:uppercase; color:#64748B;">Design Tokens</div>
              <div style="padding:6px 10px; background:#1E2538; border-radius:4px; font-size:12px; font-weight:600; color:#38BDF8;">color.primary (8 tokens)</div>
              <div style="padding:6px 10px; border-radius:4px; font-size:12px; color:#94A3B8;">spacing.scale (12 tokens)</div>
              <div style="padding:6px 10px; border-radius:4px; font-size:12px; color:#94A3B8;">typography.fluid (6 tokens)</div>
              <div style="padding:6px 10px; border-radius:4px; font-size:12px; color:#94A3B8;">radius.elevation (5 tokens)</div>
            </div>

            <!-- Live Token Matrix -->
            <div style="background:#121624; border:1px solid #1F2438; border-radius:6px; padding:16px; display:flex; flex-direction:column; gap:12px;">
              <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;">
                <div style="background:#0F131E; border:1px solid #283049; border-radius:4px; padding:10px;">
                  <div style="height:28px; background:#D92318; border-radius:2px; margin-bottom:6px;"></div>
                  <div style="font-family:var(--font-mono); font-size:10px; color:#94A3B8;">--color-brand-red</div>
                  <div style="font-size:11px; font-weight:700;">#D92318</div>
                </div>

                <div style="background:#0F131E; border:1px solid #283049; border-radius:4px; padding:10px;">
                  <div style="height:28px; background:#18181B; border-radius:2px; margin-bottom:6px; border:1px solid #334155;"></div>
                  <div style="font-family:var(--font-mono); font-size:10px; color:#94A3B8;">--color-surface-ink</div>
                  <div style="font-size:11px; font-weight:700;">#18181B</div>
                </div>

                <div style="background:#0F131E; border:1px solid #283049; border-radius:4px; padding:10px;">
                  <div style="height:28px; background:#FEF9C3; border-radius:2px; margin-bottom:6px;"></div>
                  <div style="font-family:var(--font-mono); font-size:10px; color:#94A3B8;">--color-accent-paper</div>
                  <div style="font-size:11px; font-weight:700; color:#111;">#FEF9C3</div>
                </div>
              </div>

              <div style="background:#090B10; border:1px solid #1F2438; border-radius:4px; padding:10px; font-family:var(--font-mono); font-size:11px; color:#A7F3D0; flex:1; display:flex; align-items:center;">
                <code>export const tokens = { brand: '#D92318', surface: '#18181B', radius: '8px' };</code>
              </div>
            </div>
          </div>
        </div>
      `
    }
  };

  let currentKey = 'onboarding';
  let currentStep = 0;
  let isPlaying = true;
  let intervalId = null;

  function initPlayer() {
    const tabs = document.querySelectorAll('.in-motion-tab');
    const canvas = document.getElementById('inMotionScreenCanvas');
    const titleEl = document.getElementById('inMotionTitle');
    const subtitleEl = document.getElementById('inMotionSubtitle');
    const annotationEl = document.getElementById('inMotionAnnotation');
    const scrubberFill = document.getElementById('playerScrubberFill');
    const playPauseBtn = document.getElementById('playerPlayPauseBtn');

    if (!canvas) return;

    function renderCurrentState() {
      const demo = demos[currentKey];
      if (titleEl) titleEl.textContent = demo.title;
      if (subtitleEl) subtitleEl.textContent = demo.subtitle;
      if (annotationEl) annotationEl.textContent = demo.annotation;
      canvas.innerHTML = demo.render(currentStep);

      const percent = ((currentStep % demo.duration) / (demo.duration - 1)) * 100;
      if (scrubberFill) {
        scrubberFill.style.width = `${Math.max(10, percent)}%`;
      }
    }

    function startLoop() {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(() => {
        if (!isPlaying) return;
        const demo = demos[currentKey];
        currentStep = (currentStep + 1) % demo.duration;
        renderCurrentState();
      }, 1600);
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentKey = tab.getAttribute('data-demo');
        currentStep = 0;
        renderCurrentState();
      });
    });

    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playPauseBtn.textContent = isPlaying ? '❚❚ PAUSE' : '▶ PLAY';
      });
    }

    renderCurrentState();
    startLoop();
  }

  document.addEventListener('DOMContentLoaded', initPlayer);
})();
