/* ==========================================================================
   FIGMA TO PRODUCTION INTERACTIVE COMPONENT INSPECTOR
   ========================================================================== */

(function () {
  const componentStates = {
    'default': {
      label: 'Default State',
      figmaSpec: `// FIGMA AUTO-LAYOUT SPECS
Frame: "Button / Primary / Medium"
• Layout Mode: Horizontal (Row)
• Padding: 12px top/bottom, 24px left/right
• Gap (Item Spacing): 10px
• Corner Radius: 8px (Token: var(--radius-md))
• Fill: Color/Neutral/900 (#18181B)
• Stroke: None
• Typography: Plus Jakarta Sans / SemiBold / 15px / 140%
• Text Color: Color/Neutral/50 (#FFFFFF)
• Effect: Drop Shadow (0px 4px 14px rgba(0,0,0,0.15))`,
      reactCode: `import React from 'react';
import { SparklesIcon } from '@/icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  isLoading?: boolean;
}

export const ActionButton: React.FC<ButtonProps> = ({
  children = 'Generate Pipeline',
  variant = 'primary',
  isLoading = false,
  ...props
}) => {
  return (
    <button
      className={\`btn btn-\${variant} flex items-center gap-2.5 px-6 py-3 rounded-lg font-semibold bg-neutral-900 text-white shadow-md transition-all hover:bg-neutral-800\`}
      {...props}
    >
      <SparklesIcon className="w-4 h-4 text-red-500" />
      <span>{children}</span>
    </button>
  );
};`,
      buttonHtml: `
        <button class="sample-ui-button" id="interactiveUiBtn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          <span>Generate Agent Pipeline</span>
        </button>
      `
    },
    'hover': {
      label: 'Hover State',
      figmaSpec: `// FIGMA HOVER VARIANT SPECS
Variant: "State=Hover"
• Fill: Color/Neutral/800 (#27272A)
• Transform: TranslateY(-2px)
• Effect: Drop Shadow (0px 6px 20px rgba(0,0,0,0.25))
• Cursor: Pointer
• Transition: 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
      reactCode: `// Tailwind / CSS Module Transition
const buttonStyle = "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-xl";`,
      buttonHtml: `
        <button class="sample-ui-button" style="background-color:#27272A; transform:translateY(-2px); box-shadow:0 6px 20px rgba(0,0,0,0.25);">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          <span>Generate Agent Pipeline</span>
        </button>
      `
    },
    'loading': {
      label: 'Loading State',
      figmaSpec: `// FIGMA LOADING VARIANT SPECS
Variant: "State=Loading"
• Opacity: 0.85
• Cursor: Wait
• Sub-component: Spinner / 16px (Rotates 360deg infinite)
• Disabled State: True (Aria-busy: true)`,
      reactCode: `// React Async State Handler
if (isLoading) {
  return (
    <button disabled aria-busy="true" className="opacity-85 cursor-wait ...">
      <Spinner className="animate-spin text-red-500" />
      <span>Compiling Model...</span>
    </button>
  );
}`,
      buttonHtml: `
        <button class="sample-ui-button loading">
          <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
          <span>Compiling Agent Model...</span>
        </button>
      `
    },
    'disabled': {
      label: 'Disabled State',
      figmaSpec: `// FIGMA DISABLED VARIANT SPECS
Variant: "State=Disabled"
• Fill: Color/Neutral/400 (#9CA3AF)
• Opacity: 0.45
• Pointer Events: None
• Accessible Contrast: WCAG AA Minimum compliant`,
      reactCode: `// Accessible Disabled Markup
<button disabled aria-disabled="true" className="opacity-45 cursor-not-allowed ...">
  <span>Generate Agent Pipeline</span>
</button>`,
      buttonHtml: `
        <button class="sample-ui-button disabled">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="2.5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          <span>Generate Agent Pipeline</span>
        </button>
      `
    }
  };

  function initFigmaToCode() {
    const buttons = document.querySelectorAll('.state-btn');
    const figmaSpecEl = document.getElementById('figmaSpecBox');
    const reactCodeEl = document.getElementById('reactCodeBox');
    const liveTargetEl = document.getElementById('liveComponentTarget');

    if (!figmaSpecEl || !reactCodeEl || !liveTargetEl) return;

    function applyState(stateKey) {
      const data = componentStates[stateKey] || componentStates['default'];
      figmaSpecEl.textContent = data.figmaSpec;
      reactCodeEl.textContent = data.reactCode;
      liveTargetEl.innerHTML = data.buttonHtml;
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const key = btn.getAttribute('data-state');
        applyState(key);
      });
    });

    applyState('default');
  }

  document.addEventListener('DOMContentLoaded', initFigmaToCode);
})();
