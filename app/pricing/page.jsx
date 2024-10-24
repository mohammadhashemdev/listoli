function page() {
  return (
    <main className="container mx-auto md:px-36 px-4 flex flex-col gap-6">
      <div className="md:flex hidden flex-col gap-10 my-14">
        <div className="flex w-full justify-between items-center">
          <div className="flex grow flex-col gap-10 justify-center items-start">
            <div className="flex flex-col gap-1 items-start justify-center">
              <p className="text-white text-sm">Content Service V.1.0</p>
              <h1 className="font-bold text-white text-4xl border-b border-slate-700 pb-4">
                Java Spring Boot
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-end">
                <p className="font-bold text-orange-600 text-6xl">$10</p>
                <p className="text-2xl text-orange-600">/month</p>
              </div>
              <p className="text-white w-2/3">
                * The price increases by $0.50 per minor release, capped at $15
                before the next major release. Each major release adds $5 to the
                price (e.g., Version 2.0 is $15, Version 3.0 is $20).
              </p>
            </div>
            <a
              href="https://listoli.gitbook.io/content-service-api"
              target="_blank"
              className="px-10 py-3 md:py-4 text-sm bg-orange-600 rounded-xl text-white font-bold hover:bg-orange-800 transition-all cursor-pointer"
            >
              Signup to get Notified for Initial Release
            </a>
          </div>
          <div className="flex flex-row grow justify-end items-center">
            <div className="w-2/3 h-2/3">
              <img src="/features2-01.png" alt="pricing tag" />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full gap-6 ">
          <div className="flex flex-col w-1/4 rounded-xl border border-slate-700 px-6 py-4">
            <h5 className="font-bold text-lg text-white border-b border-slate-700 pb-2">
              Content Management
            </h5>
            <p className="text-white pt-4">
              Manage and publish private and public posts.
            </p>
          </div>
          <div className="flex flex-col w-1/4 rounded-xl border border-slate-700 px-6 py-4">
            <h5 className="font-bold text-lg text-white border-b border-slate-700 pb-2">
              User Engagement
            </h5>
            <p className="text-white pt-4">
              Enable likes, comments, and reactions for interactive content.
            </p>
          </div>
          <div className="flex flex-col w-1/4 rounded-xl border border-slate-700 px-6 py-4">
            <h5 className="font-bold text-lg text-white border-b border-slate-700 pb-2">
              Notifications System
            </h5>
            <p className="text-white pt-4">
              Real-time alerts for user interactions.
            </p>
          </div>
          <div className="flex flex-col w-1/4 rounded-xl border border-slate-700 px-6 py-4">
            <h5 className="font-bold text-lg text-white border-b border-slate-700 pb-2">
              Content Moderation
            </h5>
            <p className="text-white pt-4">
              AI-driven moderation with manual review options.
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex hidden flex-col gap-10 my-14">
        <div className="flex w-full justify-between items-center">
          <div className="flex grow flex-col gap-10 justify-center items-start">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h1 className="font-bold text-white text-4xl border-b border-slate-700 pb-4">
                Cut off licence
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-end">
                <p className="font-bold text-orange-600 text-6xl">$100</p>
                <p className="text-2xl text-orange-600">/licence</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-white w-2/3 text-sm">
                  <span className="text-orange-600 font-bold text-base">
                    Pricing:
                  </span>{" "}
                  Increases by $10 per minor release, capped at $100 before the
                  next major release. Each major release adds $100 (e.g.,
                  Version 2.0 is $200, Version 3.0 is $300).
                </p>
                <p className="text-white w-2/3 text-sm">
                  <span className="text-orange-600 font-bold text-base">
                    Cut-Off License:
                  </span>{" "}
                  After acquiring the cut-off license, code access is revoked,
                  and future releases are unavailable. To access newer releases,
                  re-subscription is required, with no guarantee of
                  compatibility with your modified code.
                </p>
              </div>
            </div>
            <a
              href="https://listoli.gitbook.io/content-service-api"
              target="_blank"
              className="px-10 py-3 md:py-4 text-sm bg-orange-600 rounded-xl text-white font-bold hover:bg-orange-800 transition-all cursor-pointer"
            >
              Signup to get Notified for Initial Release
            </a>
          </div>
          <div className="flex flex-row grow justify-end items-center">
            <div className="w-2/3 h-2/3">
              <img src="/pricetag-01.png" alt="pricing tag" />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full gap-6 ">
          <div className="flex flex-col w-1/3 rounded-xl border border-slate-700 px-6 py-4">
            <h5 className="font-bold text-lg text-white border-b border-slate-700 pb-2">
              Cut-Off License
            </h5>
            <p className="text-white pt-4">
              License the code at a specific version, then continue development
              independently.
            </p>
          </div>
          <div className="flex flex-col w-1/3 rounded-xl border border-slate-700 px-6 py-4">
            <h5 className="font-bold text-lg text-white border-b border-slate-700 pb-2">
              Off-Boarding Support
            </h5>
            <p className="text-white pt-4">
              Receive 2 hours of free support during the transition.
            </p>
          </div>
          <div className="flex flex-col w-1/3 rounded-xl border border-slate-700 px-6 py-4">
            <h5 className="font-bold text-lg text-white border-b border-slate-700 pb-2">
              Single-Use License
            </h5>
            <p className="text-white pt-4">
              License is valid only for the application initially acquired for,
              with no rights for other applications or redistribution.
            </p>
          </div>
        </div>
      </div>

      {/* mobile version */}
    </main>
  );
}

export default page;
