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
      title: 'See Your Workflow',
      description:
        'Stop thinking in linear threads. Map your AI pipeline on a visual canvas — connect agents, chain prompts, and trace data flow from start to finish. What you design is what you run.',
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
      title: 'Many Agents. One Pipeline.',
      description:
        'Assign different models to different stages. Let one agent write tests, another refactor code, a third review diffs. Sequencer handles the routing, synchronization, and handoffs — so your agents work like a team, not a tug-of-war.',
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
      title: 'Your Code Stays Yours',
      description:
        'Sequencer runs on your machine. Your codebase, your prompts, your agent outputs — none of it leaves your control. Connect to remote models when you choose, but the orchestrator is always local. Always yours.',
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
            <h2 id="features-heading">Why Sequencer?</h2>
            <p className="max-w-xl mx-auto">
              From chat threads to pipelines. The assembly line for AI-assisted development.
            </p>
          </header>
        </ScrollReveal>

        {/* Feature Cards Grid with Staggered Reveal */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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