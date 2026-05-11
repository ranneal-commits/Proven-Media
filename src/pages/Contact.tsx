export default function Contact() {
  return (
    <div className="py-24 bg-primary text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-neutral-300 mb-12">
          Have a question? We're here to help.
        </p>
        <div className="bg-primary-hover p-8 rounded-3xl border border-neutral-700 text-left">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-neutral-700 bg-primary text-white focus:ring-2 focus:ring-accent1 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-neutral-700 bg-primary text-white focus:ring-2 focus:ring-accent1 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-neutral-700 bg-primary text-white focus:ring-2 focus:ring-accent1 outline-none"
              ></textarea>
            </div>
            <button className="w-full bg-accent1 text-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent1-hover transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
