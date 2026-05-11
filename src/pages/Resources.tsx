export default function Resources() {
  return (
    <div className="py-24 bg-primary text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Insights & Resources
        </h1>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-16">
          Latest strategies in B2B marketing, AI automation, and media.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-primary-hover rounded-3xl overflow-hidden border border-neutral-700 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-neutral-800">
                <img
                  src={`https://picsum.photos/seed/blog${i}/600/400`}
                  alt="Blog"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-neutral-400 mb-2 font-semibold uppercase tracking-wider">
                  Guide
                </p>
                <h3 className="text-xl font-bold mb-3">
                  How to Use AI Voice Agents for Lead Qualification
                </h3>
                <p className="text-neutral-300 mb-4 text-sm">
                  Discover how B2B companies are automating their sales pipeline
                  with conversational AI.
                </p>
                <button className="text-accent1 font-semibold text-sm hover:underline">
                  Read Article &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
