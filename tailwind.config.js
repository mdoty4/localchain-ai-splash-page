/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── COLOR PALETTE ───────────────────────────────────────────────
      // Dark Mode, High-Contrast — inspired by Linear / Vercel
      // Primary accent: Electric Purple (#8B5CF6 → #A78BFA range)
      // Secondary accent: Neon Teal (#14B8A6) for code/status indicators
      colors: {
        // Background hierarchy
        background: {
          DEFAULT: '#0A0A0A',      // Deepest black-charcoal (page base)
          primary: '#0A0A0A',
          secondary: '#111111',    // Slightly elevated surfaces
          tertiary: '#1A1A1A',     // Cards, panels
          elevated: '#222222',     // Hover states, raised elements
        },
        // Surface borders
        border: {
          DEFAULT: '#2A2A2A',      // Subtle dividers
          strong: '#3A3A3A',       // Section borders
          accent: '#8B5CF6',       // Purple accent borders
        },
        // Text hierarchy
        text: {
          primary: '#F5F5F5',      // Near-white headings
          secondary: '#A3A3A3',    // Body copy
          tertiary: '#737373',     // Muted metadata
          code: '#14B8A6',         // Neon Teal for code/terminal
          link: '#A78BFA',         // Light purple for links
        },
        // Accent colors
        accent: {
          DEFAULT: '#8B5CF6',      // Electric Purple (primary CTA)
          light: '#A78BFA',        // Lighter purple (hover)
          dark: '#7C3AED',         // Deeper purple (active/pressed)
          glow: 'rgba(139, 92, 246, 0.15)',  // Purple glow backdrop
        },
        // Status / secondary accent
        teal: {
          DEFAULT: '#14B8A6',      // Neon Teal (code, success, terminal)
          light: '#2DD4BF',
          dark: '#0D9488',
          glow: 'rgba(20, 184, 166, 0.15)',
        },
        // Semantic
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },

      // ─── TYPOGRAPHY ─────────────────────────────────────────────────
      // Headings: Inter (clean sans-serif)
      // Code: JetBrains Mono (high-quality monospace)
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'JetBrainsMono',
          'Fira Code',
          'FiraMono',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
        display: [
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },

      // Font sizing for headings (tight, bold, high-impact)
      fontSize: {
        'hero-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],  // 60px
        'section-lg': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],  // 36px
        'card-md': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],    // 20px
        'body-base': ['1rem', { lineHeight: '1.625', letterSpacing: '0em', fontWeight: '400' }],       // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],        // 14px
        'code-xs': ['0.8125rem', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],       // 13px
        'label-xs': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.08em', fontWeight: '600' }],     // 11px (badges)
      },

      // ─── SPACING & LAYOUT ───────────────────────────────────────────
      maxWidth: {
        'page': '1200px',      // Max content width
        'narrow': '800px',     // Narrow content (reading)
        'hero': '1400px',      // Hero section width
      },

      // ─── EFFECTS ────────────────────────────────────────────────────
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        'code': '0.625rem',
      },

      boxShadow: {
        'card': '0 0 0 1px rgba(255, 255, 255, 0.05), 0 2px 8px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 0 0 1px rgba(139, 92, 246, 0.3), 0 4px 16px rgba(139, 92, 246, 0.1)',
        'glow-purple': '0 0 40px rgba(139, 92, 246, 0.2)',
        'glow-teal': '0 0 40px rgba(20, 184, 166, 0.15)',
        'code-block': '0 0 0 1px rgba(255, 255, 255, 0.06), 0 4px 24px rgba(0, 0, 0, 0.4)',
      },

      // ─── ANIMATIONS ─────────────────────────────────────────────────
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },

      // ─── BACKGROUNDS ────────────────────────────────────────────────
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.15), transparent)',
        'gradient-card': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
        'grid-pattern': 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}