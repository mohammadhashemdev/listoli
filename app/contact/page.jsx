function Page() {
  return (
    <main className="h-screen container mx-auto flex justify-center items-center">
      <form
        action="#"
        className="w-4/5 md:w-3/5 lg:w-6/8 xl:w-2/5 flex flex-col gap-4 px-5 py-7 border border-slate-800 rounded-xl"
      >
        <div className="mb-8">
          <h3 className="font-bold text-white text-2xl md:text-4xl text-center mb-2">
            Contact Us
          </h3>
          <p className="text-center text-sm md:text-base text-white">
            Inquire, chat with our team, or get pricing
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <input
            className="grow border text-sm md:text-base border-slate-800 rounded-md text-white focus:outline-none bg-slate-950 px-4 py-2"
            type="text"
            name="firstname"
            placeholder="First Name"
          />
          <input
            className="grow border text-sm md:text-base border-slate-800 rounded-md text-white focus:outline-none bg-slate-950 px-4 py-2"
            type="text"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="grow border text-sm md:text-base border-slate-800 rounded-md text-white focus:outline-none bg-slate-950 px-4 py-2"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <textarea
            placeholder="Message"
            className="grow border text-sm md:text-base border-slate-800 rounded-md text-white focus:outline-none bg-slate-950 px-4 py-2"
            name="message"
            id="message"
            rows={"5"}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange-600 text-sm md:text-base px-4 py-2 text-white font-bold rounded-md hover:bg-orange-800 transition-all"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default Page;
