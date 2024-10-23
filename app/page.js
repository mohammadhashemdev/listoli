/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLightbulb, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <main>
      <section className="w-full flex flex-col justify-center items-center px-10 md:px-4">
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center my-24 md:my-36">
          <h1 className="text-4xl md:text-7xl font-black text-white">
            Buying || Building?
          </h1>
          <h3 className="text-2xl md:text-5xl font-medium text-slate-300">
            Why Choose, When You Can Do Both?
          </h3>
          <p className="text-sm md:text-xl text-slate-400 md:w-3/6 my-6 md:my-12">
            You don’t have to choose between buying or building. With our
            innovative platform, you can easily combine the best of both worlds
            in just Three Simple Steps. Whether you&apos;re looking to purchase
            ready-made products or customize something entirely your own,
            we&apos;ve got you covered.
          </p>
          <a
            href="https://listoli.gitbook.io/content-service-api"
            target="_blank"
            className="px-8 md:px-12 py-3 md:py-4 text-sm md:text-xl bg-orange-600 rounded-xl text-white font-bold hover:bg-orange-800 transition-all cursor-pointer"
          >
            Read Docs
          </a>
        </div>
        <div className="flex flex-col md:gap-56 gap-12 w-full container my-4 md:my-16">
          <div className="w-full md:px-24 flex justify-center items-center">
            <div className="relative w-full flex justify-start items-start">
              <img
                src="/actualcode.png"
                alt="code-illustration"
                className="hidden md:block md:w-4/5 img"
              />
              <div className="md:absolute right-0 bottom-0 w-full md:w-96 min-h-80 bg-slate-950 rounded-xl border border-slate-800 px-6 py-10 flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center items-center w-14 h-14 p-3 rounded-full bg-orange-600/15">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    className="text-orange-600"
                  />
                </div>
                <p className="h-12 w-12 bg-orange-600 text-white rounded-full flex justify-center items-center absolute -right-5 -top-5 font-bold text-2xl">
                  1
                </p>
                <h3 className="text-white text-center font-bold text-2xl">
                  Access the codebase
                </h3>
                <div className="w-14 rounded-full bg-indigo-700 py-1"></div>
                <p className="text-xs md:text-sm text-slate-200 text-center px-9 mt-5">
                  Yes, the actual code. Not just an API of a black box, but a
                  straightforward git clone. From source code to test
                  repositories—our code is yours now.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:px-24 flex justify-center items-center">
            <div className="relative w-full flex justify-end items-start">
              <img
                src="/features.png"
                alt="features-illustration"
                className="hidden md:block md:w-4/5 img"
              />
              <div className="md:absolute left-0 bottom-0 w-full md:w-96 min-h-80 bg-slate-950 rounded-xl border border-slate-800 px-6 py-10 flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center items-center w-14 h-14 p-3 rounded-full bg-orange-600/15">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    size="2x"
                    className="text-orange-600"
                  />
                </div>
                <p className="h-12 w-12 bg-orange-600 text-white rounded-full flex justify-center items-center absolute md:-left-5 -right-5 -top-5 font-bold text-2xl">
                  2
                </p>
                <h3 className="text-white text-center font-bold text-2xl">
                  Delivering new features
                </h3>
                <div className="w-14 rounded-full bg-indigo-700 py-1"></div>
                <p className="text-xs md:text-sm text-slate-200 text-center px-8 mt-5">
                  You continuously deploy. Our latest features are yours to
                  adopt. You watch them evolve and learn as we grow. Regular
                  workshops, training, and on-demand support make us an
                  extension of your team, at a fraction of the cost.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:px-24 flex justify-center items-center">
            <div className="relative w-full flex justify-start items-start">
              <img
                src="/fallApart.png"
                alt="code-illustration"
                className="hidden md:block md:w-4/5 img"
              />
              <div className="md:absolute right-0 bottom-0 w-full md:w-96 min-h-80 bg-slate-950 rounded-xl border border-slate-800 px-6 py-10 flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center items-center w-14 h-14 p-3 rounded-full bg-orange-600/15">
                  <FontAwesomeIcon
                    icon={faPeopleArrows}
                    size="lg"
                    className="text-orange-600"
                  />
                </div>
                <p className="h-12 w-12 bg-orange-600 text-white rounded-full flex justify-center items-center absolute -right-5 -top-5 font-bold text-2xl">
                  3
                </p>
                <h3 className="text-white text-center font-bold text-2xl">
                  If getting apart
                </h3>
                <div className="w-14 rounded-full bg-indigo-700 py-1"></div>
                <p className="text-xs md:text-sm text-slate-200 text-center px-8 mt-5">
                  You&apos;re no longer just the buyer; you&apos;re the maker
                  now.Whether you&apos;ve outgrown our pace or your needs have
                  changed, you can choose to break off at a specific version and
                  continue on your own. By then, you&apos;ll be as familiar with
                  the code as we are. Our support team will be available to help
                  with the transition—if you still need them.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/6 mx-auto flex flex-col justify-center items-center gap-6 my-24">
          <h3 className="text-center text-2xl md:text-3xl text-white font-bold">
            Stay in the loop
          </h3>
          <p className="md:w-3/6 text-xs md:text-sm text-slate-200 text-center">
            Never miss out on important news, updates, and special offers! Sign
            up with your email to stay informed about our latest products,
            features, and exclusive promotions.
          </p>
          <div className="flex flex-row items-center justify-between w-96 gap-1 p-2 bg-slate-800 rounded-md">
            <input
              className="px-3 py-2 grow rounded-md text-xs md:text-sm"
              type="text"
              name="email"
              placeholder="Email Address"
            />
            <button className="px-4 md:px-6 py-2 text-xs md:text-sm bg-orange-600 rounded-md text-white font-bold hover:bg-orange-800 transition-all">
              Sign up
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
