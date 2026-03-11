export default function CanDonkeysHomePage() {
  const serviceAreas = [
    "Bensalem",
    "Feasterville-Trevose",
    "Langhorne",
    "Levittown",
    "Yardley",
    "Newtown",
  ];

  const steps = [
    {
      title: "Sign Up",
      text: "Tell us your address and trash pickup day. We’ll confirm your service and schedule.",
    },
    {
      title: "We Roll Out",
      text: "We move your trash cans to the curb before pickup so you never have to remember again.",
    },
    {
      title: "We Return Them",
      text: "After trash collection, we bring your cans back so your home stays neat and hassle-free.",
    },
  ];

  const benefits = [
    "Perfect for busy families",
    "Helpful for seniors and homeowners with mobility limits",
    "Reliable weekly service",
    "Simple flat-rate pricing",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-emerald-50 via-white to-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-1 text-sm font-medium text-emerald-700 shadow-sm">
              Bucks County Trash Can Curb Service
            </div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Never forget trash day again.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
              CanDonkeys brings your trash cans to the curb and returns them after pickup for homeowners across Bucks County.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Get Started
              </a>
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-base font-semibold text-slate-800 shadow-sm">
                Only $10 per week
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200">
                Weekly service
              </span>
              <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200">
                Reliable pickup support
              </span>
              <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200">
                Local Bucks County business
              </span>
            </div>
          </div>

          <div className="lg:pl-10">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
              <div className="rounded-[1.5rem] bg-slate-900 p-8 text-white">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-xl font-bold">
                    C
                  </div>
                  <div>
                    <p className="text-xl font-semibold">CanDonkeys</p>
                    <p className="text-sm text-slate-300">Trash can curb service</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Service</p>
                    <p className="mt-1 text-lg font-semibold">Roll out + return after pickup</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Pricing</p>
                    <p className="mt-1 text-lg font-semibold">$10 per week</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Coverage</p>
                    <p className="mt-1 text-lg font-semibold">Bucks County neighborhoods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Simple weekly service for your home
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We make trash day easier for busy homeowners, families, and seniors.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-700">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Why choose us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">A small service that solves a weekly problem</h2>
            <div className="mt-6 grid gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl bg-slate-50 px-4 py-4 text-slate-700 ring-1 ring-slate-200">
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Service areas
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Proudly serving Bucks County</h2>
            <p className="mt-4 text-slate-600">
              Starting with local neighborhoods where dependable weekly curb service is in demand.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {serviceAreas.map((area) => (
                <div key={area} className="rounded-2xl border border-slate-200 px-4 py-3 text-center font-medium text-slate-700">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Affordable, simple, and easy to understand</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              One flat weekly rate for dependable trash can curb service.
            </p>
          </div>

          <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Standard plan
            </p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-5xl font-bold tracking-tight">$10</span>
              <span className="pb-2 text-slate-600">/ week</span>
            </div>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Roll cans out before pickup</li>
              <li>• Return cans after collection</li>
              <li>• Reliable local weekly service</li>
              <li>• Great for homeowners and seniors</li>
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Start Service
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Get started
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to make trash day easier?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-300">
              Send us your address, phone number, and pickup day, and we’ll help you get started with weekly curb service.
            </p>
          </div>

          <form className="rounded-[2rem] bg-white p-6 text-slate-900 shadow-xl">
            <div className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Address</label>
                <input
                  type="text"
                  placeholder="Service address"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(215) 555-1234"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Pickup Day</label>
                  <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500">
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Start Service
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
