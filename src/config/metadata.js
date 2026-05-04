/**
 * SEO Metadata Configuration for Sequencer Splash Page
 *
 * Centralized metadata object for dynamic meta tags.
 * Used with react-helmet-async to inject SEO tags at runtime.
 */

const siteUrl = 'https://sequencer.dev';
const ogImage = `${siteUrl}/og-image.png`;

export const metadata = {
  // Primary SEO fields
  title: 'Sequencer | Automate Your AI Workflow & Reclaim Your Time',
  description:
    'Stop chatting, start living. Build autonomous, local-first AI agent pipelines that handle the heavy lifting so you can step away from the screen.',

  // Keywords for search engines
  keywords: [
    'AI agent orchestrator',
    'local LLM',
    'workflow automation',
    'prompt chaining',
    'Cline',
    'Aider',
    'local-first AI',
    'visual workflow',
    'Sequencer',
    'AI pipeline',
  ].join(', '),

  // Canonical URL
  canonical: siteUrl,

  // OpenGraph (Facebook / LinkedIn)
  og: {
    title: 'Sequencer | Automate Your AI Workflow & Reclaim Your Time',
    description:
      'Stop chatting, start living. Build autonomous, local-first AI agent pipelines that handle the heavy lifting so you can step away from the screen.',
    image: ogImage,
    url: siteUrl,
    type: 'website',
    siteName: 'Sequencer',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Sequencer | Automate Your AI Workflow & Reclaim Your Time',
    description:
      'Stop chatting, start living. Build autonomous, local-first AI agent pipelines that handle the heavy lifting so you can step away from the screen.',
    image: ogImage,
    site: '@micdoty',
    creator: '@micdoty',
  },

  // Additional SEO signals
  robots: 'index, follow',
  author: 'Sequencer Team',
  themeColor: '#8B5CF6',

  // JSON-LD Structured Data (Schema.org)
  jsonLd: {
    softwareApplication: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Sequencer',
      description:
        'Build autonomous, local-first AI agent pipelines that work while you don\'t. Set it up, step away, and reclaim your time.',
      operatingSystem: 'macOS',
      applicationCategory: 'DeveloperApplication',
      url: siteUrl,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      author: {
        '@type': 'Organization',
        name: 'Sequencer Team',
        url: siteUrl,
      },
    },
  },
};
