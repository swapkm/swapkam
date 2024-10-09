export default function PriceAction() {
  return (
    <main>
      <div className="h-96 max-w-screen-2xl mx-auto px-4 flex items-center justify-center">
        <h1>
          <span className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
            Comming Soon!
          </span>
        </h1>
      </div>
      <section className="relative">
        <div className="m-auto h-80 bg-gradient-to-tr from-indigo-400 via-teal-900 to-[#C084FC] blur-[118px]"></div>

        <div className="relative mx-auto max-w-screen-xl gap-12 px-4 py-28 text-slate-400 md:px-8">
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <h1 className="text-sm font-medium text-blue-500">
              Build products for everyone
            </h1>
            <h2 className="mx-auto text-4xl font-extrabold text-blue-600 md:text-5xl">
              Design your projects faster with{" "}
              <span className="bg-gradient-to-r from-blue-500 to-[#E114E5] bg-clip-text text-transparent">
                the largest figma UI kit
              </span>
            </h2>
            <p className="mx-auto max-w-2xl">
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 text-sm sm:flex sm:space-y-0">
              <a
                href="/"
                className="block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow-lg duration-150 hover:bg-blue-500 hover:shadow-none active:bg-blue-700"
              >
                Browse courses
              </a>

              <a
                href="/"
                className="block rounded-lg border border-slate-700 px-4 py-2 font-medium text-slate-200 duration-150 hover:bg-slate-800"
              >
                Get access
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
