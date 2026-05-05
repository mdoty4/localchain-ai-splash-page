import { ScrollReveal } from './ScrollReveal';

export function FeatureGrid() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-accent">
          <rect x="2" y="2" width="10" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="16" y="2" width="10" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="2" y="16" width="10" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="16" y="16" width="10" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 12V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M21 12V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: 'Visual Workflow Chains',
      description:
        'Stop thinking in linear threads. Map your AI pipeline on a visual canvas — connect agents, chain prompts, and trace data flow from start to finish. What you design is what you run.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-teal">
          <rect x="6" y="12" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 12V8C10 5.79 11.79 4 14 4C16.21 4 18 5.79 18 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="14" cy="18" r="1.5" fill="currentColor" />
          <path d="M14 19.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: 'Local-First Execution',
      description:
        'Every node runs on your machine. Your codebase, your prompts, your agent outputs — none of it leaves your control. The orchestrator is always local. Always yours.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-teal">
          <circle cx="14" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="6" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="22" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="14" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 11L8 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M17 11H17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M17 11L20 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
      title: 'Local + Frontier Models',
      description:
        'Mix open-weight local models with frontier API models in the same pipeline. Use Llama for private drafts, Claude for reasoning, GPT for polish — assign the right model to the right stage.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-accent">
          <path d="M8 4H20C21.1 4 22 4.9 22 6V22C22 23.1 21.1 24 20 24H8C6.9 24 6 23.1 6 22V6C6 4.9 6.9 4 8 4Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 10H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 18H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: 'Agents, Tools & Scripts',
      description:
        'Plug in custom agents, CLI tools, and shell scripts as nodes in your workflow. Chain a linter, a test runner, and an AI reviewer into a single automated pipeline.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-accent">
          <rect x="3" y="6" width="8" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="17" y="6" width="8" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M11 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M11 18H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 10H6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M20 10H20.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M6 18H6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M20 18H20.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
      title: 'Parallel Workflows',
      description:
        'Run multiple branches of your pipeline at the same time. Spin up independent workflow chains that execute in parallel, then merge results — dramatically cutting iteration time.',
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-teal">
          <path d="M14 3L17.5 8L24 9.5L20 14.5L21 21L14 18L7 21L8 14.5L4 9.5L10.5 8L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Open-Source Control',
      description:
        'Built on open-source principles. Fork it, extend it, adapt it to your stack. No vendor lock-in, no black-box orchestration — full transparency and community-driven evolution.',
    },
  ];

  return (
    <section
      id="features"
      className="section"
      aria-labelledby="features-heading"
    >
      <div className="max-w-page mx-auto">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal>
          <header className="section-header">
            <h2 id="features-heading">Why LocalChain AI?</h2>
            <p className="max-w-xl mx-auto">
              The local-first AI orchestrator that puts you in control of your workflow, your models, and your code.
            </p>
          </header>
        </ScrollReveal>

        {/* Feature Cards Grid with Staggered Reveal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <article className="card p-8 flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent-glow flex items-center justify-center mb-6">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-card-md text-text-primary mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-body-sm text-text-secondary flex-1">
                  {feature.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}