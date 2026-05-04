import { ScrollReveal } from './ScrollReveal';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Design the Flow',
      description:
        'Drag agents onto the canvas. Connect them. Define what each one does — the prompt, the input, the output. Build your pipeline like you are drawing an architecture diagram.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
          <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Assign the Models',
      description:
        'Pick the right model for each stage. Use Claude for reasoning, GPT for generation, a local model for sensitive code — or mix and match. Each node runs the model you assign it.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-teal">
          <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="5" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="19" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 8L7 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M14 8L17 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Run the Sequence',
      description:
        'Hit play. Watch your pipeline execute node by node. Track progress, inspect outputs at each stage, and iterate on the flow — not just the prompt. Repeatable. Reproducible. Yours.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-teal">
          <polygon points="8,4 20,12 8,20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="section bg-background-secondary"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-page mx-auto">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal>
          <header className="section-header">
            <h2 id="how-it-works-heading">From Idea to Output in Three Steps</h2>
            <p className="max-w-xl mx-auto">
              Design. Assign. Run. One prompt gets you an answer. A sequence gets you a system that works on its own — so you don't have to.
            </p>
          </header>
        </ScrollReveal>

        {/* Steps with Staggered Reveal */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector Line (desktop only) - positioned absolutely so it doesn't take grid space */}
          <div className="hidden md:block absolute top-12 left-0 right-0 z-0" aria-hidden="true">
            <ScrollReveal delay={0.3}>
              <div className="h-px bg-border" />
            </ScrollReveal>
          </div>

          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={0.15 + index * 0.2}>
              <article className="relative flex flex-col items-center text-center">
                {/* Step Number Badge */}
                <div className="relative z-[1] w-24 h-24 rounded-2xl bg-background-tertiary border border-border flex items-center justify-center mb-6 card">
                  {step.icon}
                </div>

                {/* Step Label */}
                <span className="text-label-xs text-accent uppercase tracking-widest mb-2 font-mono">
                  Step {step.number}
                </span>

                {/* Title */}
                <h3 className="text-card-md text-text-primary mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-body-sm text-text-secondary max-w-sm">
                  {step.description}
                </p>

                {/* Arrow between steps (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-6 text-text-tertiary" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}