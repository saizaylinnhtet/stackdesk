export default function Home() {
  return (
    <main className="min-w-0 w-full max-w-full overflow-x-clip">
      <section className="relative h-full min-w-0 w-full max-w-full box-border px-4 pt-36 text-center sm:px-6">
        {/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" /> */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
        <p className="text-xl font-bold">Elavorate your agency</p>
        <h1 className="max-w-full text-[clamp(2rem,11vw,3rem)] font-bold uppercase opacity-80 bg-linear-to-r from-blue-700 via-violet-600 to-stone-200 bg-clip-text text-transparent md:text-[clamp(3.25rem,12vw,6rem)]">
          stackdesk
        </h1>
        
      </section>
    </main>
  );
}
