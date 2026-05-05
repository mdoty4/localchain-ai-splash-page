import { ScrollReveal } from './ScrollReveal';

export function VideoTutorials() {
  const videos = [
    {
      id: 'liJNWYUat9w',
      title: 'What is Sequencer?',
      description: 'A quick introduction to Sequencer — visual AI pipelines that turn your workflow from a chat thread into an assembly line.',
    },
    {
      id: '4D27meUFiy0',
      title: 'Using Sequencer with Openclaw',
      description: 'A hands-on tutorial showing how to connect Sequencer with Openclaw for a real-world multi-agent workflow.',
    },
  ];

  return (
    <section
      id="tutorials"
      className="section"
      aria-labelledby="tutorials-heading"
    >
      <div className="max-w-page mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <header className="section-header">
            <h2 id="tutorials-heading">Watch It in Action</h2>
            <p className="max-w-xl mx-auto">
              See how visual AI pipelines turn complex workflows into an assembly line — from first install to running your first sequence.
            </p>
          </header>
        </ScrollReveal>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <ScrollReveal key={video.id} delay={0.15 + index * 0.2}>
              <article className="card overflow-hidden flex flex-col h-full">
                {/* YouTube Embed */}
                <div className="relative w-full pb-[56.25%]" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full rounded-t-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-card-md text-text-primary mb-2">
                    {video.title}
                  </h3>
                  <p className="text-body-sm text-text-secondary flex-1">
                    {video.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}